import React from 'react'
import { FaAnglesRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
function Dashboard() {
    const navigate = useNavigate()

    const handlepages =()=>{
        navigate("/pages")
    }
  return (
    <div className='w-full h-screen bg-[#4c2512]'>
    <div className='flex justify-center items-center h-full w-full'>
      <div className='flex items-center w-full max-w-4xl px-8'>
        <div className='flex-grow text-[#E3C7A6] text-3xl text-center' style={{ fontFamily: '"Dancing Script", cursive' }}>
          Journal
        </div>
        <span className='text-[#E3C7A6] ml-auto'>
          <FaAnglesRight color='#E3C7A6' onClick={handlepages} />
        </span>
      </div>
    </div>
  </div>
  )
}

export default Dashboard