import { React, useState } from 'react';
import { IoIosSunny } from 'react-icons/io'; // For filled sunny icon
import { IoSunnyOutline } from 'react-icons/io5'; // For the outlined version
import { FaMoon, FaRegMoon } from 'react-icons/fa'; // Moon icons

function Pages() {
  const [isDay, setIsDay] = useState(true);

  const handleday = () => {
    setIsDay(!isDay);
  };

  return (
    <div className="bg-[#efd5a4] h-screen flex flex-col">
      <div className="flex justify-end p-2">
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
      </div>

      {/* Text area filling the central portion */}
      <div className="flex-grow p-4">
  <textarea
    className="w-full h-full p-2 border-2 border-[#efd5a4] bg-[#efd5a4] placeholder-[#976841] rounded-md focus:outline-none leading-[2.5] resize-none"
    placeholder="Start your Journal...."
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
        <button className="w-full bg-[#4c2512] text-white py-2 rounded-md" style={{fontFamily: '"Dancing Script", cursive',}}>
         Add to Journal
        </button>
      </div>
    </div>
  );
}

export default Pages;
