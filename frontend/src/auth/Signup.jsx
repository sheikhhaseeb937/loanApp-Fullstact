import React, { useState } from "react";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

import { Dropdown } from "primereact/dropdown";

import { Button } from "primereact/button";
import { data, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";



const Signup = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
    const navigate = useNavigate()


  async function handleChange(e) {
    console.log(name, email, password);


    if (name == "" || email == "" || password == "") {
      toast.success(res?.data?.message, {
        position: "top-right",
        autoClose: 1000,
        theme: "dark",
        transition: Bounce,
      });
    }
 
    const response = await axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/signup`, {
        name,
        email,
        password,
      })
      try {
        if (response) {
          toast.success(response?.data?.message, {
            position: "top-right",
            autoClose: 1000,
            theme: "dark",
            transition: Bounce,
          });
          localStorage.setItem('email',email)
       navigate('/Otp')
        }
return
      } catch (error) {
          toast.error(error?.response?.data?.message, {
          position: "top-right",
          autoClose: 1000,
          theme: "dark",
          transition: Bounce,
        });
      
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

        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-11/12 md:w-4/5 mt-10 md:mt-28">
            <h1 className="text-center text-green-600 font-bold text-3xl md:text-4xl">
              Sign <span className="text-gray-800">Up</span>
            </h1>

            <InputText
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-green-600 p-3 w-full mt-5 h-12"
              placeholder="Full Name"
            />

            <InputText
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-green-600 p-3 w-full mt-5 h-12"
              placeholder="Email"
            />

            <InputText
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="border-2 border-green-600  p-3 w-full mt-5 h-12"
              placeholder="Enter Password"
            />

            <div>
              <p className="flex flex-col md:flex-row justify-between gap-4 mt-2 p-2 items-center text-sm">
                <span className="hover:underline hover:text-red-500">
                  <Link to="/sigin">Already have an account?</Link>
                </span>
                <span className="text-red-500 hover:underline hover:text-black">
                  Forgot password
                </span>
              </p>
            </div>

            <div className="bg-green-600 text-white rounded-lg mt-5 w-28 h-10 flex justify-center items-center mx-auto">
              <Button type="submit" icon="pi pi-check" onClick={handleChange}>
                Signup
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
