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
import profiles from '../DummyData/studentdata';
import StudentCard from '../Components/UI/StudentCard';
import testimonials from '../DummyData/testimonial';
import Testimonial from '../Components/UI/Testimonial';
import NavImage from '/nav.png'

const Home = () => {
  return (
    <div >
      <div className='w-full h-[1150px]   border-red-600 bg-[#FDF8EE] sm:h-[1060px] md:h-[700px] md:w-full'>


        <Navbar />

        <div className="relative md:flex items-center justify-evenly w-full h-[570px] mt-2 sm:w-full  ">
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

          <div className='  md:w-[600px] h-[503px]'>
            <img src={objects} alt="" className='md:w-full h-full' />
          </div>
        </div>

        {/* blue div */}
      </div>



      <div className='w-full h-[950px] relative bottom-10 rounded-[23px]  sm:w-full sm:h-[570px] md:w-full  md:h-[290px] bg-[#4D2C5E]  md:bottom-10  md:m-auto md:rounded-2xl md:flex md:items-center justify-center text-white sm:relative mb-4'>

{
  data.map((item,index)=>(

 
        <div className='flex flex-col items-center gap-y-7   border-green-500 mb-4 sm:w-full sm:flex-row sm:items-center sm:justify-center sm:gap-x-5'>
  
          <div className='w-[80px] h-[80px]   rounded-[23px] flex items-center justify-center mt-3 sm:w-[120px] sm:h-[80px] sm:mb-16'>
          <img src={item.iconSrc} alt="" />
          </div>
         
         <div className='  w-full h-[180px] text-justify p-2 sm:h-[150px] md:h-[220px] overflow-hidden'>
           <h1 className='text-[28px]'>{item.title}</h1>
           <p className='text-xl  sm:text-[20px]'>{item.descriptions}</p>
         </div>
        </div>
   ))
}      
      </div>


    <div className='w-full h-[350px]  border-blue-400 flex flex-col items-center justify-center md:flex-row md:justify-evenly md:h-[200px]'>
      <div className='w-[100px] h-[100px]  ' >
<img src={bulb} alt="" />
      </div>
      <div className='flex flex-col items-center'>

      <h1 className='text-[50px]'>Our Track</h1>
      <p className='text-[20px] pl-20 md:pl-0'>Lorem Ipsum is simply dummy text of the printing.</p>
      </div>
      <div className='w-[100px] h-[100px]  ' >
<img src={Group} alt="" />
      </div>
    </div>



<div className='w-full   mt-2 flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:p-6'>
{
  cardData.map((course,index)=>(
    <Card course={course}/>
  ))
}

</div>


<div className='w-full h-[1000px] relative  border-amber-300 mt-4 bg-[#FDF8EE] md:flex md:justify-evenly md:w-full md:h-[700px] '>
<img src={back} alt="" className="absolute top-0 left-0 w-[120%] h-full object-center" />

<div className='  md:flex-shrink-0'>
<img src={objects1} alt="" className='h-[600px] w-full object-cover md:h-full md:w-[516px]' />
</div>




<div className='flex flex-col items-center justify-center p-4  border-green-500 gap-y-4 md:h-[685px]'>
<div className='hidden md:block md:w-full md:  md:relative left-8 md:overflow-hidden'>
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

<div className='w-full h-[250px]  border-blue-400 flex flex-col items-center justify-center md:flex-row md:justify-evenly md:h-[200px]'>

      <div className='flex flex-col items-center'>

      <h1 className='text-[30px]'>What Students Say</h1>
      <p className='text-[20px] pl-20 md:pl-0'>Lorem Ipsum is simply dummy text of the printing.</p>
      </div>
    </div>


<div className='w-full h-[902px]   flex flex-col gap-y-6 items-center md:w-full  md:flex-row md:h-[380px] md:p-20 md:gap-x-6'>
{
  testimonials.map((Element,index)=>(
<Testimonial

Element={Element}
/>

  ))
}

</div>


{/* professor card ui */}

<div className='w-full   flex flex-col gap-y-4 md:flex-row'>
  {
    profiles.map((professor,index)=>(
  
      <StudentCard professor={professor}/>

    ))
  }

</div>


{/* news letter subscription */}

<div className=' bg-[#4D2C5E] text-center text-white flex flex-col items-center md:m-8 md:rounded-4xl'>

<h1 className='text-xl pb-2 md:text-[40px] mt-6'>Subscribe to Our News Letter</h1>
<p className='text-xl pb-2'>Lorem Ipsum is simply dummy text of the printing.</p>

<div className='w-full h-[180px]  flex items-center justify-center md:w-[610px]'>
<input type="text" 
placeholder='Enter your Email'
className='w-full h-[80px] rounded-[60px] pl-4 bg-white text-black ml-10
 focus:outline-none
'
/>
<Button text="subscribe" className='bg-orange-400 relative w-[160px] h-[55px] rounded-[30px] md:right-30 '/>
</div>
</div>


{/* footer */}

<div className='w-full bg-[#FDF8EE]    flex flex-col gap-y-4 md:flex-row md:p-4 md:items-center'>

<div className='  text-justify flex flex-col items-center p-4'>
  <div className='w-[185px] h-[150px] md:w-[250px] '>
    <img src={NavImage} alt="" className='h-[51px] w-full' />
  </div>
  

  
  <p className='text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
   <p className='text-xl'> Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
   
</div>

<div className='w-full h-[180px]  flex flex-col items-center gap-y-2'>
  <h1 className='text-xl font-bold'>Company</h1>
  <h1 className='text-[20px]'>About</h1>
  <h1 className='text-[20px]'>How to work</h1>
  <h1 className='text-[20px]' >Popular Course</h1>
  <h1 className='text-[20px]' >Service</h1>
</div>

{/**2 */}

<div className='w-full h-[150px]  flex flex-col items-center gap-y-2 md:flex-col'>
  <h1 className='text-xl font-bold'>Courses</h1>
  <h1 className='text-[20px]'>Categories</h1>
  <h1 className='text-[20px]'>Offline Course</h1>
  <h1 className='text-[20px]' >Video Course</h1>
</div>

{/*3 */}
<div className='w-full h-[180px]  flex flex-col items-center gap-y-2'>
  <h1 className='text-xl font-bold'>Support</h1>
  <h1 className='text-[20px]'>FAQ</h1>
  <h1 className='text-[20px]'>Help Center</h1>
  <h1 className='text-[20px]' >Career</h1>
  <h1 className='text-[20px]' >Privacy</h1>
</div>


{/**4 */}
<div className='w-full h-[180px]  flex flex-col items-center gap-y-2'>
  <h1 className='text-xl font-bold'>Contact Info</h1>
  <h1 className='text-[20px]'>0913-705-3875</h1>
  <h1 className='text-[20px]'>ElizabethJ@jourrapide.com</h1>
  <h1 className='text-[20px]' >4808 Skinner Hollow Road</h1>
  <h1 className='text-[20px]'>Days Creek, OR 97429</h1>
</div>

</div>

    </div>

  )
}

export default Home
