import express from "express";
import bcrypt from "bcrypt";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const router = express.Router();

// POST /api/auth/signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log(req.body)
    // Validate input
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);
    ///otp comformation email
    const otp = Math.floor(Math.random() * 9000) + 1000;
    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      otp,
    });


    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "sheikhhaseeb937@gmail.com",
        pass: "vbitphiqufziadum",
      },
    });

    const mailOptions = {
      from: "sheikhhaseeb937@gmail.com",
      to: email,
      subject: "OTP Code",
      html: `
//     <div style="max-width: 500px; margin: 40px auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1); font-family: Arial, sans-serif;">
//       <h2 style="font-size: 24px; font-weight: 600; color: #1f2937; margin-bottom: 16px;">🔐 Gmail Verification</h2>
//       <p style="color: #374151; margin-bottom: 8px;">Hello User,</p>
//       <p style="color: #374151; margin-bottom: 24px;">
//         Use the following OTP to complete your verification process. This OTP is valid for the next 10 minutes:
//       </p>

//       <div style="text-align: center; margin-bottom: 24px;">
//         <div style="display: inline-block; padding: 12px 24px; background-color: #ebf8ff; color: #1d4ed8; font-size: 20px; font-weight: bold; letter-spacing: 5px; border: 1px dashed #60a5fa; border-radius: 8px;">
//       ${otp}
//         </div>
//       </div>

//       <p style="color: #6b7280; font-size: 14px; margin-bottom: 24px;">
//         If you did not request this, you can safely ignore this email.
//       </p>

//       <p style="color: #1f2937; font-size: 16px;">Thanks,<br />
//         <span style="font-weight: 500;">Quick Funds</span>
//       </p>

//       <div style="font-size: 12px; color: #9ca3af; text-align: center; margin-top: 32px;">
//         © 2025 QuickFundLoanPK. All rights reserved.
//       </div>
//     </div>
//   `,
    };

    await transporter.sendMail(mailOptions);

    // Remove password from response
    const userResponse = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    };

    res.status(201).json({
      message: "User created successfully",
      user: userResponse,
    });
    return;
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ message: "An error occurred during signup." });
  }
});
// POST /api/auth/login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
        
    }

    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid email or password", error: error.message });
    
    }
    if (!user.isActive) {
      return res.status(401).json({
        message: "Please verify your email",
        error: error.message,
      });
    
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ message: "Invalid email or password" });
      
    }

    const accessToken = jwt.sign(
      {
        user: user._id,
        email: user.email,
        name: user.name,
      },
      "haseeb",
      {
        expiresIn: "1h",
      }
    );

    console.log(accessToken);

    const refreshToken = jwt.sign(
      {
        user: user._id,
        email: user.email,
        name: user.name,
      },
      "haseeb",
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Login successful",
      user,
      accessToken,
    });
     return
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while logging in",
      error: error.message,
    });
  }
});

router.post("/isActive", async (req, res) => {
  try {
    const { email, otp } = req.body;

    const userExist = await User.findOne({ email });

    console.log(userExist);

    if (userExist.otp != otp) {
      return res.status(401).json({
        message: "wrong otp",
      });
     
    }

    userExist.isActive = true;

    await userExist.save();

    return res.status(201).json({
      message: "Email verified successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while verify otp",
      error: error.message,
    });
  }
});

export default router;
