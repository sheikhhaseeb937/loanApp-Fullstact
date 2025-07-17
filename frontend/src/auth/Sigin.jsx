import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "primereact/resources/themes/lara-light-cyan/theme.css";


const Sigin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);



const handleLogin = async (e) => {
  e.preventDefault();
  if (!email || !password) {
    toast.error("Email and password are required", {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
    return;
  }
 // 🟢 Start loading
  setLoading(true); 

try {
  const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/login`, {
  email,
  password
})
const token = res?.data?.accessToken;
    if (token) {
      localStorage.setItem("token", token);
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
        transition: Bounce,
      });
      navigate("/");
    }
} catch (error) {
   toast.error(error?.response?.data?.message || "Login failed", {
      position: "top-left",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,

    });
  }
     finally {
    setLoading(false); 
  }
 
}






  

  return (
    <>


      <ToastContainer />
    <div className="flex flex-col md:flex-row min-h-screen">
  {/* Left Section (Image) */}
  <div className="bg-gray-300 border-black w-full md:w-1/2 flex justify-center items-center">

      {/* <img src={images} alt="Logo" className="object-cover" /> */}
      <div className="max-[400px]:text-5xl md:text-7xl  text-7xl font-bold text-green-600">
          Quick<span className="text-gray-800">Funds</span>
        </div>

  </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <form className="w-11/12 md:w-4/5 mt-10 md:mt-28" onSubmit={handleLogin}>
            <h1 className="text-center text-green-600 font-bold text-4xl mb-4">
              Sign <span className="text-gray-800">In</span>
            </h1>

            <InputText
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-green-600 p-3 w-full mt-5 h-12"
              placeholder="Email"
            />

            <InputText
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-green-600 p-3 w-full mt-5 h-12"
              placeholder="Enter Password"
            />

            <div className="flex justify-between text-sm mt-3">
              <Link to="/signup" className="hover:underline text-green-600">Don't have an account?</Link>
              <span className="text-red-500 hover:underline">Forgot password?</span>
            </div>

            <div className="mt-6 flex justify-center">
              <Button     disabled={loading} type="submit" label="Sign In" className="bg-green-600 text-white w-32 h-10 rounded" />

            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sigin;
