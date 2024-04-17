import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function SignUp() {

  const account = useNavigate();
  
const [inpval, setInpVal] = useState({
  username: "",
  number: "",
  email: "",
  password: "",
  companyname: "",
  
 })
  const [data, setData] = useState([]);
  console.log(inpval);
  
  const getData = (e) => {
    // console.log(e.target.value);

    const {value, name} = e.target;
    // console.log(value,name);
    
    setInpVal(() => {
      return {
        ...inpval,
        [name]: value 
        
      }
    })
   
  }
 
  const addData = (e) => {
    e.preventDefault();
    
const {username,number,email,password,companyname} = inpval;

if(username === "") {
  alert("username field is required")
} else if (number === "") {
  alert("number field is required")
}
else if (email === "") {
  alert("email field is required")
} else if (!email.includes("@")) {
  alert("please enter valid email address")
} 
 else if (password === "") {
  alert("password field is required")
} else if (password.length < 5) {
  alert("password greater than five")
}   else if (companyname === "") {
  alert("companyname field is required")
}
else {
  console.log("data added successfully");
  
  localStorage.setItem("useryoutube", JSON.stringify([...data,inpval]));
  account("/accountsetting")
  
}

  }

  return (
    <>
     <div className='w-full h-screen bg-gray-100 '>
      <div className='flex flex-col justify-center ml-8 md:ml-80'>
        <div className='pt-2 md:pl-40'>
    <h1 className='text-2xl font-medium'>Create your<br></br>PopX Account</h1>
    <p className='pt-2 text-zinc-500'>Lorem ipsum dolor sit amet, <br></br>
        consectetur adipisicing elit,</p>
</div>
<form>
<div className='mt-3 md:pl-40'>
  <input type='username' placeholder='Enter username' 
  onChange={getData} name='username' 
  className='px-4 py-1 bg-gray-100 border rounded-md outline-none border-zinc-300 bg-yellow w-96'
  ></input>
</div>

<div className='mt-1 md:pl-40'>
  <input type='number' placeholder='Enter phone number'
  onChange={getData} name='number' 
  className='px-4 py-1 bg-gray-100 border rounded-md outline-none border-zinc-300 bg-yellow w-96'
  ></input>
</div>

<div className='mt-1 md:pl-40'>
  <input type='email' placeholder='Enter email address'
  onChange={getData} name='email'
  className='px-4 py-1 bg-gray-100 border rounded-md outline-none border-zinc-300 bg-yellow w-96'
  ></input>
</div>

<div className='mt-1 md:pl-40'>
  <input type='password' placeholder='Enter password'
  onChange={getData} name='password' 
  className='px-4 py-1 bg-gray-100 border rounded-md outline-none border-zinc-300 bg-yellow w-96'
  ></input>
</div>

<div className='mt-1 md:pl-40'>
  <input type='text' placeholder='Enter comapny name'
  onChange={getData} name='companyname' 
  className='py-1 bg-gray-100 border rounded-md outline-none px-7 border-zinc-300 w-96'
  ></input>
</div>

<div className='mt-4 md:ml-36'>
  <p className='pl-5'>Are you in agency?</p>
  <div className='flex items-center justify-start mt-2'>
  <input type='radio' className='h-5 bg-yellow accent-violet-600 w-14'
   onChange={getData} name='radio'
  ></input>
  <label>Yes</label>
  
  <input type='radio' onChange={getData} name='radio'
   className='h-5 w-14 bg-yellow accent-violet-600'></input>
  <label>No</label>
</div>
</div>

<div className='mt-36 md:pl-40'>
    <button className='h-10 px-3 mt-4 space-y-20 text-sm font-medium text-center text-white rounded-md w-96 bg-violet-600 hover:bg-violet-800'
  type='submit' onClick={addData}>Create Account</button><br></br>
</div>

</form>


      </div>
     
      </div>

</>

    
  )
}

export default SignUp
