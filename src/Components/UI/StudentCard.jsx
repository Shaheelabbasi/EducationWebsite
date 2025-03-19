import React from 'react'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
const StudentCard = ({professor}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-full">
    <img
      src={professor.image}
      alt={name}
      className="w-full h-48 object-cover rounded-lg mb-4 object-center"
    />
    <h3 className="text-lg font-semibold">{professor.name}</h3>
    <p className="text-gray-500 text-sm">{professor.title}</p>
    <p className="text-gray-600 text-sm mt-2">{professor.description}</p>
    <p className="text-orange-500 font-semibold mt-2">{professor.subject}</p>
    <div className="flex gap-3 mt-3">
      <FaInstagram className="text-pink-500 text-xl cursor-pointer" />
      <FaLinkedin className="text-blue-600 text-xl cursor-pointer" />
    </div>
  </div>
  )
}

export default StudentCard
