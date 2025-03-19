import React from 'react'
import NavImage from '/nav.png'
import Button from '../UI/Button'
import { FaBars} from "react-icons/fa";
import useToggle from '../../Hooks/useToggle';
import { FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [IsMenuOpen, ToggleMenu] = useToggle()
  return (
    <div className>

    
    <div className='flex items-center justify-between border-2 border-black'>

      <div className='ml-12 mt-8  mb-2 object-cover  md:h-full md:w-[152px] md:flex md:shrink-0'>
        <img src={NavImage} alt="not" className='w-full h-[52px]' />
      </div>




<div className='hidden md:flex gap-x-6 ml-[55px] mr-2 md:mr-0'>
     <h1 className=' text-[18px] mt-4'>Home</h1>
     <h1 className=' text-[18px] mt-4'>About</h1>
     <h1 className=' text-[18px] mt-4' >Courses</h1>
     <h1 className=' text-[18px] mt-4' >Our Services</h1>
     <h1 className='text-[18px] mt-4' >Contact us</h1>

    </div>

<div className='hidden md:block md:mr-10'>
  <Button text="Sign in" className="bg-[#4D2C5E] rounded-[218px] text-white w-[150px] h-[65px]"/>
</div>

     {
      !IsMenuOpen ? <FaBars className='mt-8 text-4xl mr-2 md:hidden'
      onClick={ToggleMenu}
      />:<FaXmark className='mt-8 text-4xl mr-2 md:hidden'
      onClick={ToggleMenu}
      />
     }
    </div>
    {

    IsMenuOpen ?
    <div className='md:hidden flex flex-col gap-y-4'>
     <h1 className='ml-2 text-4xl mt-4'>Home</h1>
     <h1 className='ml-2 text-4xl mt-4'>About</h1>
     <h1 className='ml-2 text-4xl mt-4' >Courses</h1>
     <h1 className='ml-2 text-4xl mt-4' >Our Services</h1>
     <h1 className='ml-2 text-4xl mt-4' >Contact us</h1>

    </div> :null
}
    </div>
  )
}

export default Navbar
