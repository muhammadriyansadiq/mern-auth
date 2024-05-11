import React from 'react'
import { useState } from 'react';
import '../src/App.css'
import { Link } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setemail] =useState()
  const [password,setpassword] =useState() 
  const navigate =  useNavigate()
  const hadlesignin = (e)=>{

    e.preventDefault()
    axios.post("http://localhost:3000/login",
    {
      email,password
    })
    .then((res) => {
      console.log("loginhogya front end  sai hogya")
      navigate("/")
    })
    .catch((err) =>{
      console.log("err",err)
    })
  }


  return (

    <div className=' h-full w-full'>
    <div className=' h-full w-full flex justify-between overflow-hidden max-[768px]:flex-col'>
<div className=' xs:h-[38.75rem] lg:h-[39.635rem] w-4/12  left flex flex-col justify-around max-[768px]:w-full'>
  <div className='flex w-full justify-center items-center max-[768px]:flex-col'>
    <div className=' w-9/12 flex justify-center ml-[1.688rem] items-center max-[768px]:ml-[1px]'>    
      <img src="https://www.apnaconnection.com/public/admin-panel/img/logo.png" alt="" />
    </div>
    <div className=' w-3/12 flex justify-center ml-[0.813rem] mt-[0.25rem]  items-center cursor-pointer'>
      <img className=' w-2/12' src="https://www.apnaconnection.com/public/img/cross.jpg" alt="" />
      </div>
  </div>
  <div className=' flex justify-center w-full lg:translate-y-[2.25rem]'>
    <p className=' w-9/12 flex cursor-pointer items-center bg-[#3c5a9a] text-white p-[0.625rem] rounded-lg max-[320px]:p-[0.375rem] max-[320px]:w-10/12'>
    <span></span><span className=' ml-[29px]'>Register With Facebook</span>
    </p>
  </div>
  <div className=' flex justify-center w-full lg:translate-y-[1.875rem]'>
    <p className=' w-9/12 flex cursor-pointer items-center bg-[#dd4b39] text-white p-[0.625rem] rounded-lg max-[320px]:p-[0.375rem] max-[320px]:w-10/12'>
    <span></span><span className=' ml-[29px]'>Register With Google</span>
    </p>
  </div>  

  <div className=' w-full flex justify-center items-center mt-[2.5rem]'>
    <p className=' w-4/12 bg-slate-300 h-[1px] flex justify-center items-center max-[320px]:w-5/12'></p><p className=' text-[#767575] flex justify-center items-center h-[1px] w-1/12'>Or</p><p className='bg-slate-300 w-4/12 flex justify-center items-center h-[1px] max-[320px]:w-5/12'></p>
  </div>

  
<form onSubmit={hadlesignin}>
  <div className='  flex justify-center w-full  '>
<div className=' rounded-s-lg w-1/12 flex items-center justify-center border-y-[1px]  border-s-[1px] border-solid h-[2.5rem]'>
</div>
<input type="email" 
    aria-label='name'
    onChange={(e)=>setemail(e.target.value)}
placeholder='Email'
 className=' rounded-e-lg w-8/12 border-y-[1px]  border-e-[1px] border-solid focus:outline-none  focus:border-s-[2px] focus:border-[#2363ab] focus:border-e-[2px] focus:border-y-[2px] max-[768px]:w-9/12'/>
  </div>

  <div className=' flex justify-center w-full  mt-[10px] mb-8'>
<div className='rounded-s-lg w-1/12 flex items-center justify-center border-y-[1px]  border-s-[1px] border-solid h-[2.5rem]'>
</div>
<input type="text" 
      aria-label='password'
      onChange={(e)=>setpassword(e.target.value)}

placeholder='Password'
 className=' rounded-e-lg w-8/12 border-y-[1px]  border-e-[1px] border-solid focus:outline-none  focus:border-s-[2px] focus:border-blue-600 focus:border-e-[2px] focus:border-y-[2px] max-[768px]:w-9/12'/>
  </div>

  <button type='submit' className=' xs:mt-[29px] flex justify-center w-full'>
   <p   className='w-9/12 ' ><p className=' flex cursor-pointer items-center justify-center bg-[#2555A0] text-white p-[0.625rem] rounded-lg'>
    <span className=' font-bold'>Login</span>
    </p>
    </p> 
  </button>
  </form>

  <div className=' xs:mt-[0px] w-full flex justify-center'>
    <p className=' text-sm'>New Apna Connection<Link to={'/register'} className="text-[#2363ab]"> Sign Up!</Link></p>
  </div>
  <p className=' text-center hidden md:block  lg:translate-y-[4.9rem] '>© 2024 Apna Connection</p>

</div>

<div className=' xs:hidden lg:block h-full w-8/12 right '>
    <img className=' w-full h-[43.9rem]' src="https://www.apnaconnection.com/public/admin-panel/img/login_banner.jpg" alt="" />

</div>

    </div>
    </div>
    
  )
}

export default Login