import express from "express";
import LoanData from "../model/loanform.model.js"
const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const {
      loanType,
      amount,
      tenure,
      firstName,
      lastName,
      email,
      phone,
      employmentStatus,
      monthlyIncome,
      address,
      city,
      state,
      pincode,
    } = req.body;

    // Log received data (optional for debugging)
    console.log("Loan Form Received:", loanType, amount, email);

  

    const newform = await LoanData.create(  
    {
        loanType,
      amount,
      tenure,
      firstName,
      lastName,
      email,
      phone,
      employmentStatus,
      monthlyIncome,
      address,
      city,
      state,
      pincode,
    }
     )

    res.status(201).json({
      message: "Loan form submitted successfully",
    newform
    });
  } catch (error) {
    console.error("Loan form  not submitted:");
    res.status(500).json({
      message: "Loan form error not submitted:",
      error: error.message,
    });
  }
});

export default router;
