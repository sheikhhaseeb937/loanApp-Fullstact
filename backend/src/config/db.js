import mongoose, { connect } from "mongoose";


const mongDB = ()=>{

try {
    const mongConnect = mongoose.connect(process.env.MONODB_URI);
console.log('mongoDB connected')


} catch (error) {
    console.log('mongDB Not Connected')
}
}
export default mongDB;