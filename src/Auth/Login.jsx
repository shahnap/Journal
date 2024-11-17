import axios from 'axios';
import { formatDate, set } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { BaseUrl } from '../Config/config';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login() {
 const [formData, setformData] = useState({

   email: '',
   password: '',
 })
 const navigate=useNavigate()
const handleSubmit = ()=>{
  // axios.post(BaseUrl +'/login', formData)
  // .then((response)=>{
    
  // })
  if(formData.email==='shahna'&&formData.password==='shahna'){
    navigate('/pages')
  }else{
    toast.error('Please Enter Email as shahna And password as shahna')
    console.log("sdcsd",formData.email,formData.password);
    
  }

}  
useEffect(() => {
  console.log("formData.email",formData);
  
}, [formData])

  return (
    <div className="flex min-h-screen "  style={{fontFamily: '"Dancing Script", cursive',fontSize:'1.5rem'}}>
      {/* Left side image (hidden on small screens) */}
      <div className="hidden lg:block lg:w-2/3 bg-cover bg-center" style={{ backgroundImage: "url('https://your-image-url.com')" }}></div>
      
      {/* Right side login form */}
      <div className="flex flex-col justify-center w-full lg:w-1/3 px-8 py-16 bg-[#e6d0a9]">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-[#976841]">Login</h2>

          {/* Form */}
          <form >
            <div className="mb-4">
              <label className="block text-[#976841] text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                onChange={(e) => {
                  setformData((prevFormData) => ({
                    ...prevFormData, // Spread the previous state
                    email: e.target.value, // Update only the password field
                  }));
                }}
                               
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#976841] text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                
                onChange={(e) => {
                  setformData((prevFormData) => ({
                    ...prevFormData, // Spread the previous state
                    password: e.target.value, // Update only the password field
                  }));
                }}
                
                id="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <button 
                type="button"
                onClick={handleSubmit}
                className="w-full bg-[#976841] hover:bg-[#976841] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                Sign In
              </button>
            </div>
          </form>

          {/* Bottom links */}
          <div className="mt-4 text-center">
            <a href="#" className="text-[#976841] hover:underline">Forgot Password?</a>
          </div>
          <div className="mt-4 text-center">
            <span className="text-[#976841]">Don't have an account?</span>{' '}
            <a href="#" className="text-[#976841]  hover:underline"><b>Sign Up</b></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
