import mongoose from "mongoose";

const loanFormSchema = new mongoose.Schema({
  loanType: { type: String, required: true },
  amount: { type: Number, required: true },
  tenure: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  employmentStatus: { type: String, required: true },
  monthlyIncome: { type: Number, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  agreeTerms: { type: Boolean, default: false }
}, {
  timestamps: true // Adds createdAt and updatedAt
});

const LoanForm = mongoose.model("LoanForm", loanFormSchema);

export default LoanForm;
