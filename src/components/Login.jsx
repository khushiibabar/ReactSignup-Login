import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

  const account = useNavigate();

  const [inpval, setInpVal] = useState({
    email: "",
    password: "",
    
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
      
const getUserArr = localStorage.getItem("useryoutube");
console.log(getUserArr);
      
  const {email,password} = inpval;
  
  
   if (email === "") {
    alert("email field is required")
  } else if (!email.includes("@")) {
    alert("please enter valid email address")
  } 
   else if (password === "") {
    alert("password field is required")
  } else if (password.length < 5) {
    alert("password greater than five")
  }  
  else {
   
if(getUserArr && getUserArr.length) {
  const userdata = JSON.parse(getUserArr);
  const userlogin = userdata.filter((el, k) => {
    return el.email === email && el.password === password
  }) ;
  
  if(userlogin.length === 0) {
    alert("invalid details")
  } else {
    console.log("user login successfully")
    account("/accountsetting")
  }
}
    
  }
}
//Json.parse mtlb apne data ko object me convert kr diya
// el.email mtlb jo email hume localstorage de rha he(Signup krte wakt jo email dali thi vo email he ye)
// or email mtlb jo ab hum login me de rhe he 
// yha dono ko match kr rhe he
  return (
    <>
    <div className='fixed w-full h-screen bg-gray-100 '>
      <div className='flex flex-col justify-center ml-8 md:ml-80'>
        <div className='pt-2 md:pl-40'>
    <h1 className='text-2xl font-medium'>Signin to your<br></br>PopX Account</h1>
    <p className='pt-2 text-zinc-500'>Lorem ipsum dolor sit amet, <br></br>
        consectetur adipisicing elit,</p>
</div>

<div className='mt-3 md:pl-40'>
  <input type='email' onChange={getData} name='email'
   placeholder='Enter email address'
  className='px-4 py-2 bg-gray-100 border rounded-md outline-none border-zinc-300 bg-yellow w-96'
  />
</div>
<div className='mt-1 md:pl-40'>
  <input type='email' onChange={getData} name='password' 
   placeholder='Enter password'
  className='px-4 py-2 bg-gray-100 border rounded-md outline-none border-zinc-300 bg-yellow w-96'
  />
</div>
<div className='md:pl-40'>
    <button className='h-10 px-3 mt-4 space-y-20 text-sm font-medium text-center text-white rounded-md w-96 bg-violet-600 hover:bg-violet-800'
  type='submit' onClick={addData}
  >Login</button><br></br>
</div>
      </div>
      </div>
    </>
  )
}

export default Login
