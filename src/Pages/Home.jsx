import React from 'react'
import Navbar from '../Components/UI/Navbar'
import back from '/back.png'
import { FaSearch } from "react-icons/fa";
import Button from '../Components/UI/Button';
import objects from '/objects.png'
import data from '../DummyData/data';
import bulb from '/bulb.png'
import Group from '/Group.png'
import Card from '../Components/UI/Card';
import cardData from '../DummyData/carddata';
import objects1 from '/objects1.png'
import hearts1 from '/hearts 1.png'
import jgsaw from '/jigsaw 1.png'
const Home = () => {
  return (
    <div >
      <div className='w-full h-[1150px]  border-2 border-red-600 bg-[#FDF8EE] sm:h-[1060px] md:h-[700px] md:w-full'>


        <Navbar />

        <div className="relative md:flex items-center justify-evenly w-full h-[570px] mt-2 sm:w-full border-2 border-black">
          <img src={back} alt="" className="absolute top-0 left-0 w-[120%] h-full" />
          <div className="p-2 md:w-[585px]">
            <p className='text-[70px]'>The <span className='text-[#FFA135]'>smart</span></p>
            <p className='text-[70px]'>Choice For <span className='text-[#FFA135]' >Future</span></p>
            <p className='text-2xl'>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses.</p>

            <div className='bg-white rounded-[120px] flex h-[80px]'>
              <FaSearch className='relative left-4 top-7 text-[25px]' />
              <input type="text"
                className='w-full h-full pl-8 focus:outline-none'
                placeholder='Search for a location'
              />

              <Button text="continue" className="bg-[#4D2C5E] text-white rounded-[30px] relative -left-2 top-5 cursor-pointer w-[220px] h-[40px]" />
            </div>
          </div>

          <div className='border-2 border-black md:w-[600px] h-[503px]'>
            <img src={objects} alt="" className='md:w-full h-full' />
          </div>
        </div>

        {/* blue div */}
      </div>



      <div className='w-full h-[950px] relative bottom-10 rounded-[23px]  sm:w-full sm:h-[570px] md:w-full  md:h-[277px] bg-[#4D2C5E]  md:bottom-10  md:m-auto md:rounded-2xl md:flex md:items-center justify-center text-white sm:relative mb-4'>

{
  data.map((item,index)=>(

 
        <div className='flex flex-col items-center gap-y-7  border-2 border-green-500 mb-4 sm:w-full sm:flex-row sm:items-center sm:justify-center sm:gap-x-5'>
  
          <div className='w-[80px] h-[80px] border-2 border-black rounded-[23px] flex items-center justify-center mt-3 sm:w-[120px] sm:h-[80px] sm:mb-16'>
          <img src={item.iconSrc} alt="" />
          </div>
         
         <div className='border-2 border-black w-full h-[180px] text-center p-2 sm:h-[150px] md:h-[220px]'>
           <h1 className='text-[28px]'>{item.title}</h1>
           <p className='text-xl sm:text-[20px]'>{item.descriptions}</p>
         </div>
        </div>
   ))
}      
      </div>


    <div className='w-full h-[350px] border-2 border-blue-400 flex flex-col items-center justify-center md:flex-row md:justify-evenly md:h-[200px]'>
      <div className='w-[100px] h-[100px] border-2 border-black' >
<img src={bulb} alt="" />
      </div>
      <div className='flex flex-col items-center'>

    
      <h1 className='text-[50px]'>Our Track</h1>
      <p className='text-[20px] pl-20 md:pl-0'>Lorem Ipsum is simply dummy text of the printing.</p>
      </div>
      <div className='w-[100px] h-[100px] border-2 border-black' >
<img src={Group} alt="" />
      </div>
    </div>



<div className='w-full border-2 border-black mt-2 flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:p-6'>
{
  cardData.map((course,index)=>(
    <Card course={course}/>
  ))
}

</div>


<div className='w-full h-[950px] relative border-2 border-amber-300 mt-4 bg-[#FDF8EE] md:flex md:justify-evenly md:w-full md:h-[700px] '>
<img src={back} alt="" className="absolute top-0 left-0 w-[120%] h-full object-center" />

<div className='border-2 border-black md:h-[685px] md:w-[716px]'>
<img src={objects1} alt="" className='' />
</div>




<div className='flex flex-col items-center justify-center p-4 border-2 border-green-500 gap-y-4 md:h-[685px] md:w-[706px]'>
<div className='hidden md:block md:w-[586px] md:border-2 border-black md:relative left-8 md:overflow-hidden'>
<p className='md:text-[69px] '>Premium <span className='text-orange-500'>Learning</span></p>
<p className='md:text-[69px] '>Experience</p>
  </div>
<div className='flex gap-x-4' >
  
  <div className='w-[100px] h-[100px] bg-[#4D2C5E] rounded-[23px] flex items-center justify-center'>
    <img src={hearts1} alt="" className='' />
  </div>
   <div>
   <p className='text-[20px] md:hidden'>Premium <span className='text-orange-500'>Learning</span></p>
   <p className='text-[20px] md:hidden'>Experience</p>
    <h1 className='text-[18px] font-bold'>Easily Accessible</h1>
    <p className='text-[18px]'>Learning Will fell Very Comfortable With Courslab.</p>
   </div>
   </div>

   <div className='flex gap-x-4' >
  <div className='w-[100px] h-[100px] bg-[#4D2C5E] rounded-[23px] flex items-center justify-center'>
    <img src={jgsaw} alt="" className='' />
  </div>
   <div>
    <h1 className='text-[18px] font-bold'>Easily Accessible</h1>
    <p className='text-[18px]'>Learning Will fell Very Comfortable With Courslab.</p>
   </div>
   </div>
   {/* seoncd one */}

   
</div>






</div>


    </div>

  )
}

export default Home
