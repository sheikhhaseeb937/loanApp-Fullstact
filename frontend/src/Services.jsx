import React from 'react';
import { User, Briefcase, Car } from 'lucide-react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <User size={40} className="text-green-700 mx-auto mb-4" />,
    title: "Personal loan",
    description: "Personal loans provide borrowers with flexibility in how they use the funds.",
  },
  {
    icon: <Briefcase size={40} className="text-green-700 mx-auto mb-4" />,
    title: "Business loan",
    description: "Business Loan Services provide financial assistance to businesses for various purposes...",
  },
  {
    icon: <Car size={40} className="text-green-700 mx-auto mb-4" />,
    title: "Auto loan",
    description: "Auto Loan Services provide financing options for individuals/businesses to purchase a vehicle.",
  },
];

const Services = () => {
  return (
  <div>

      <section className="bg-gradient-to-r from-white to-green-50 py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-12">Our <span className='text-green-600'>Services</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <button className="bg-gray-100 text-gray-800 border border-gray-300 px-4 py-2 rounded-full hover:bg-green-100 transition">
            <Link to={"/loanform"}>  Apply now</Link>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
       
            <Link to={"/loanform"}>    View more</Link>
        </button>
      </div>
    </section>
  </div>
  );
};

export default Services;
