import { ArrowRight } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
const Navbar = () => {
    const navigate = useNavigate();
    const { user} = useUser();
    const { openSignIn } = useClerk();


  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl  flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
      {/* <img src="/a.jpg" alt="logo" className='w-24 object-contain cursor-pointer'
      onClick={() => navigate("/")}
      /> */}
      <h1 className='text-blue-500 hover:text-blue-400 cursor-pointer text-2xl font-bold' onClick={() => navigate("/")}>Think AI</h1>

      {user ? 
      <UserButton /> : ( 
         <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5 bg-blue-700 hover:bg-blue-600'>Get started <ArrowRight className='w-4 h-4'/></button>
      )}
    </div>
  )
}

export default Navbar
