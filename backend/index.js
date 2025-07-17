import express from 'express';
import cors from "cors";
import mongDB from './src/config/db.js';
import dotenv from "dotenv";
import User from './src/model/user.model.js';
import { hash } from "bcrypt";
import bcrypt from "bcrypt";
// const authRoutes = ('./src/routes/auth.routes.js');
// import authRoutes from "./src/routes/auth.routes.js";
import authroutes from './src/routes/auth.routes.js'
import loanform from './src/routes/Loanform.routes.js'
import contact from './src/routes/contact.routes.js'
const app = express();
const PORT = 8080

/////middlewares


app.use(cors({
  origin: ["http://localhost:5173", "https://loan-app-fullstact.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],


}));
  


app.use(express.json());

///env
dotenv.config();


//mongoDB connect
mongDB();

///sigUp api routes
app.get("/", (req, res) => {
    res.send("Welcome to Loan Application API");
})

app.use("/api", authroutes);

app.use("/",loanform);
app.use('/',contact);



    









///sever listen
app.listen(PORT,()=>{
    console.log('sever is running')
})