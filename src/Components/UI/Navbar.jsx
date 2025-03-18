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

      <div className='ml-2 mt-8 w-[185px] h-[52px] mb-2 md:ml-30'>
        <img src={NavImage} alt="not" className='w-full h-full' />
      </div>




<div className='hidden md:flex gap-x-6 ml-[55px] mr-2'>
     <h1 className=' text-2xl mt-4'>Home</h1>
     <h1 className=' text-2xl mt-4'>About</h1>
     <h1 className=' text-2xl mt-4' >Courses</h1>
     <h1 className=' text-2xl mt-4' >Our Services</h1>
     <h1 className='text-2xl mt-4' >Contact us</h1>

    </div>

<div className='hidden md:block mr-10'>
  <Button text="Sign in" className="bg-[#4D2C5E] rounded-[218px] text-white w-[180px] h-[40px]"/>
</div>

     {
      !IsMenuOpen ? <FaXmark className='mt-8 text-4xl mr-2 md:hidden'
      onClick={ToggleMenu}
      />:<FaBars className='mt-8 text-4xl mr-2 md:hidden'
      onClick={ToggleMenu}
      />
     }
    </div>
    {

    !IsMenuOpen ?
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
