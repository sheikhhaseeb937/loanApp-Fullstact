import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InputOtp() {
  const inputRefs = useRef([]);
  const [Inputotp, setInputotp] = useState(new Array(4).fill(""));
  const [submittedOtp, setSubmittedOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate()

  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/, "");
    if (!value) return;

    const newOtp = [...Inputotp];
    newOtp[index] = value;
    setInputotp(newOtp);

    if (index < 3 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...Inputotp];
      newOtp[index] = "";
      setInputotp(newOtp);
      if (index > 0) inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = Inputotp.join("");
    setSubmittedOtp(otp);
    setError("");
    setSuccess("");

const email = localStorage.getItem('email')
console.log(email)

    try {
      // http://localhost:8080/isActive/isActive
      // `${import.meta.env.VITE_BASE_URL || "http://localhost:8080/"}isActive/isActive`
      const response = await axios.post("http://localhost:8080/isActive", { otp,email });
      setSuccess("OTP Verified Successfully!");
      console.log("Response:", response.data);
      ///nagvaite sigin page
      navigate('/sigin')
    } catch (err) {
      setError("Invalid OTP or Server Error.");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col bg-black h-[100vh]">
      <div className="w-full max-w-sm mx-auto p-4 mt-[150px]">
        <h1 className="font-bold text-4xl text-center p-5 text-white">Verify Your Email OTP</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <div className="flex justify-between w-full gap-2">
            {Inputotp.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                ref={(el) => (inputRefs.current[idx] = el)}
                className="w-12 h-12 md:w-14 md:h-14 text-center text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>

          {submittedOtp && (
            <div className="text-lg text-white">
              OTP Submitted: <span className="font-semibold">{submittedOtp}</span>
            </div>
          )}

          {error && <div className="text-red-400 text-sm">{error}</div>}
          {success && <div className="text-green-400 text-sm">{success}</div>}
        </form>
      </div>
    </div>
  );
}
