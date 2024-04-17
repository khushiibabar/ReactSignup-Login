import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

function Home() {

  return (
    <>
    <div className='fixed w-full h-screen bg-gray-100'>
      <div className='flex flex-col justify-center ml-8 md:ml-80 mt-96'>
        <div className='pt-2 md:pl-40'>
    <h1 className='text-3xl font-medium'>Welcome to PopX</h1>
    <p className='pt-2 text-zinc-500'>Lorem ipsum dolor sit amet, <br></br>
        consectetur adipisicing elit,</p>
</div>

<div className='md:pl-40'>
    <button className='h-10 px-3 space-y-20 text-sm font-medium text-center text-white rounded-md mt-7 w-96 bg-violet-600 hover:bg-violet-800'
  >
    <NavLink to="/Signup"> Create Account</NavLink>
  
   </button><br></br>
   
    <button className='h-10 px-3 mt-3 space-y-20 text-sm font-medium text-center rounded-md rounded-m bg-violet-300 w-96 hover:bg-violet-200'>
     <NavLink to='/Signin'>Already Registered?Login</NavLink>
      
      </button>
</div>
      </div>
      </div>
    </>
  )
}

export default Home
