import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
      const [isOpen, setIsOpen] =useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
const navigate = useNavigate()
const logout = ()=>{
  localStorage.removeItem('token')
  navigate('/sigin')
}

  return (
    <div>
      <nav className="top-0 bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">
          Quick<span className="text-gray-800">Funds</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center  space-x-8 text-gray-800 font-medium" >
          {/* <li><a href="#" className="hover:text-green-600">Home</a></li> */}
          <Link to="/" className="hover:text-green-600">
          <li>Home</li></Link>
          <Link to="/services" className="hover:text-green-600">
          <li>Services</li></Link>

          {/* <li><a href="#" className="hover:text-green-600">How we work?</a></li> */}
          <Link to="/work" className="hover:text-green-600">
          <li>How we work?</li></Link>
          {/* <li><a href="#" className="hover:text-green-600">About Us</a></li> */}
          <Link to="/about" className="hover:text-green-600">
          <li>About Us</li></Link>
          {/* <li>
            <a href="#" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              Contact us
            </a>
          </li> */}
          <Link to="/contactus" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          <li>Contact Us</li></Link>


          {/* ///logout */}
       <button onClick={logout} className="block bg-green-500 text-white px-3 py-2 gap-6 rounded hover:bg-green-600 transition">
       Log Out</button>
        </ul>

        {/* Mobile Toggle */}
        <div className="lg:hidden text-gray-800" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 pb-4">
          <ul className="space-y-4 text-gray-800 font-medium">
            <Link to="/" className=" block hover:text-green-600">
          <li>Home</li></Link>
  <Link to="/services" className=" block hover:text-green-600">
          <li>Services</li></Link>
                <Link to="/work" className="block hover:text-green-600">
          <li>How we work?</li></Link>
              <Link to="/about" className="block hover:text-green-600">
          <li>About Us</li></Link>
           <Link to="/contactus" className="block  bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          <li>Contact Us</li></Link>
{/* ///logout */}
       <button  onClick={logout} className="block mx-auto bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition">
        Log Out</button>
          </ul>
        </div>
      )}
    </nav>
    </div>
  )
}

export default Navbar
