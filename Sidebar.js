import React from 'react';
import { FaHome, FaMapMarkerAlt, FaDirections, FaChartLine } from 'react-icons/fa'; // Import icons

const Sidebar = () => {
  return (
    <aside className="bg-white w-64 p-4 h-30px shadow-lg">
        <h1 className='text-center text-2xl text-yellow-300'>PRAIORITIZE</h1>
        <h2 className='text-center text-lg border-b-2 border-yellow-300 pb-2 mb-4'>Move Your Organization</h2>
      <div className="flex items-center mb-8">
        <img src="./img/download.jpg" alt="Logo" className="h-12 w-12 rounded-full border-2 border-gray-200" />
        <div className="ml-4">
          <h2 className="text-sm font-bold">[FIRST NAME]</h2>
          <p className="text-xs text-gray-500">[ROLE]</p> 
          <p className="text-xs text-gray-500">[TEAM]</p>
        </div>
      </div>
      <nav className="space-y-4">
        <a href="#" className="flex items-center space-x-3 text-gray-dark hover:text-yellow-primary">
        <FaHome className="text-lg"/>
        <span>WHERE AM I NOW?</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-dark hover:text-yellow-primary">
        <FaMapMarkerAlt className="text-lg" />
        <span>WHERE TO GO?</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-dark hover:text-yellow-primary">
        <FaDirections className="text-lg" />
        <span>HOW TO GET THERE?</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-dark hover:text-yellow-primary">
        <FaChartLine className="text-lg" />
        <span>AM I ON TRACK?</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
