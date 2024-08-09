import React from 'react';
import { FaBars, FaArrowRight, FaChartLine } from 'react-icons/fa'; 

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 shadow">
    
      <div className="flex items-center justify-between mb-4">
       
        <div className="flex flex-col">
          <h1 className="text-black font-bold text-lg mb-2"><span className='text-yellow-400'>PERSONAL</span> VIRTUAL CONSULTANT</h1>
          <span className="text-gray-500">THIS IS THE ASSESSMENT TITLE - LONG TITLES WILL BE...</span>
        </div>

        
        <div className="flex items-center mx-4">
          <button className="bg-yellow-light text-black  py-2 px-4 rounded flex items-center">
            <FaChartLine className="mr-2" />
            JOURNEY
          </button>
          <button className="bg-yellow-400 text-gray-dark py-2 px-4 rounded flex items-center">
            <FaArrowRight className="mr-2" /> 
            DASHBOARD
          </button>
        </div>

       
        <button className="text-yellow-400 p-2 rounded">
          <FaBars className="text-3xl" />
        </button>
      </div>

    
      <div className="border-b border-yellow-300 mb-4"></div>

     
      <div className="flex items-center">
      
        <p className="w-1/2 text-gray-700 pr-4">
          <p>Hi,</p>
          Here is a paragraph of text. This content should provide additional information or context for the user. 
          Make sure to format it to fit within the allocated space.
          <p>Here is a paragraph of text. This content should provide additional information or context for the user. 
          Make sure to format it to fit within the allocated space.</p>
          <p>Happy too!</p>
        </p>

       
        <div className="w-1/2 flex items-center">
          <img src="./img/img1.jpg" alt="Image" className="w-full h-auto max-w-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;
