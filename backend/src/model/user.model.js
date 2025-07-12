import { model, Schema } from "mongoose";

const userScheme = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:String,
    },
      isActive:{
    type: Boolean,
    default:  false
  } 

})
const User = model('signups',userScheme)
export default User