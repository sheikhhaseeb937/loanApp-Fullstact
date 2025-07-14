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
app.use(express.json());
    app.use(cors())


///env
dotenv.config();


//mongoDB connect
mongDB();

///sigUp api routes
app.get("/", (req, res) => {
    res.send("Welcome to Loan Application API");
})

app.use("/signup", authroutes);
app.use("/login", authroutes);
app.use("/api",loanform);
app.use('/api',contact);
app.use("/isActive",authroutes)


    









///sever listen
app.listen(PORT,()=>{
    console.log('sever is running')
})