import express from "express";
import contact from "../model/contact.model.js";
import contactusform from "../model/contact.model.js";

const router = express.Router();

router.post("/contactus", async (req, res) => {
  try {
    const {
      loanType,
      message,
      firstName,
      lastName,
      email,
      phone,
    } = req.body;

    console.log("Loan Form Received:", req.body);

    const newform = await contactusform.create({
      loanType,
      message,
      firstName,
      lastName,
      email,
      phone,
    });

    res.status(201).json({
      message: "Loan form submitted successfully",
      newform,
    });
  } catch (error) {
    console.error("Loan form error:", error.message);
    res.status(500).json({
      message: "An error occurred while submitting the loan form",
      error: error.message,
    });
  }
});

export default router;
