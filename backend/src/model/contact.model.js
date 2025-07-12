import mongoose from "mongoose";


const contactform = new mongoose.Schema({
  loanType: { type: String, required: true },
 firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },

});

const contactusform = mongoose.model('contactUs',contactform);
export default contactusform;