import React from 'react'
import { FaStar } from "react-icons/fa";
const Card = ({course}) => {
  return (

        <div className="w-full h-[457px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 md:w-[490px] md:h-[540px]">
          <img
            className="w-full h-56 object-center"
            src={course.image} // Replace with actual image URL
            alt="UI/UX Design Course"
          />
          <div className="p-5">
            <div className='flex justify-between items-center'>
            <h3 className="text-sm text-gray-500">{course.category}</h3>
            <div className="flex items-center mt-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-lg" />
              ))}
            </div>
           

            </div>
            <h2 className="text-xl font-semibold mt-1">{course.title}</h2>
    
            {/* Star Ratings */}
           
    
            <p className="text-orange-500 font-bold mt-2">$98</p>
            <div className="flex items-center text-gray-500 text-sm mt-2">
              <span className="mr-3">⏳ 22hr 30min</span>
              <span className="mr-3">📚 34 Courses</span>
              <span>🛒 250 Sales</span>
            </div>
          </div>
          <div className="px-5 pb-5">
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
              Join Course
            </button>
          </div>
        </div>
    
  )
}

export default Card
