import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = ({Element}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-[260px] h-[290px] md:w-[417px] md:h-[258px]">
      <p className="text-gray-700 mt-3">{Element.feedback}</p>
      <div className="flex items-center mt-5">
        <img
          src={Element.image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 object-center"
        />
        <div className="ml-4">
          <h4 className="text-gray-900 font-semibold">{Element.name}</h4>
          <p className="text-gray-500 text-sm">{Element.role}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
