import { React, useEffect, useState } from 'react';
import { IoIosSunny } from 'react-icons/io'; // For filled sunny icon
import { IoSunnyOutline } from 'react-icons/io5'; // For the outlined version
import { FaMoon, FaRegMoon } from 'react-icons/fa'; // Moon icons
import { format } from 'date-fns';
import axios from 'axios';
import { BaseUrl } from '../Config/config';
function Pages() {
  const [isDay, setIsDay] = useState(true);

const [Data, setData] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date()); 



  const handleday = () => {
    setIsDay(!isDay);
  };


  const handleSubmit = () => {
    console.log("selectedDate",selectedDate);
    
    const Details = {
     Data,
     Date: selectedDate,
     Time:1

    }
    axios.post(BaseUrl+'/journal',Details)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    console.log(Data);
    
  }, [Data])
  
 
  return (
    <div className="bg-[#efd5a4] h-screen flex flex-col">
      <div className="flex justify-between items-center">
  <div className="flex justify-start"><div className="px-4">
    <input 
    type="date" 
    id="floating_standard" 
    value={format(selectedDate, 'yyyy-MM-dd')} 
    onChange={(e)=>{setSelectedDate(format(e.target.value,'yyyy-MM-dd'))}} 
    class="block py-2.5 px-0 w-full text-sm text-[#976841] bg-transparent border-0 border-b-2 border-transparent appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer" 
    placeholder=" " 
    />
    {/* <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Floating standard</label> */}
</div></div>
  <span className="flex justify-end p-2">
    {isDay ? (
      <div className="flex items-center space-x-2">
        <span>
          <IoIosSunny color="#4c2512" size={32} onClick={handleday} />
        </span>
        <span>
          <FaRegMoon color="#4c2512" size={24} onClick={handleday} />
        </span>
      </div>
    ) : (
      <div className="flex items-center space-x-2">
        <span>
          <IoSunnyOutline color="#4c2512" size={32} onClick={handleday} />
        </span>
        <span>
          <FaMoon color="#4c2512" size={24} onClick={handleday} />
        </span>
      </div>
    )}
  </span>
</div>

      {/* Text area filling the central portion */}
      <div className="flex-grow p-4">
  <textarea
    className="w-full h-full p-2 border-2 border-[#efd5a4] bg-[#efd5a4] placeholder-[#976841] rounded-md focus:outline-none leading-[2.5] resize-none"
    placeholder="Dear Diary...."
    onChange={(e)=>{setData(e.target.value)}}
    style={{
      boxShadow: '0 0 0 0 #4c2512 inset',
      backgroundImage: 'linear-gradient(to bottom, transparent 95%, #4c2512 0%)',
      backgroundSize: '100% 40px',
      fontFamily: '"Dancing Script", cursive',
      fontSize: '24px',
      
      lineHeight: '40px' // Matches the background size for perfect alignment
    }}
  />
</div>





      {/* Submit button at the bottom, full width */}
      <div className="p-4">
        <button className="w-full bg-[#4c2512] text-white py-2 rounded-md" onClick={handleSubmit} style={{fontFamily: '"Dancing Script", cursive',}}>
         Add to Journal
        </button>
      </div>
    </div>
  );
}

export default Pages;
