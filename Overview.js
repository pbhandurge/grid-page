import React from 'react';
import { FaStar, FaPalette, FaRocket, FaBullseye, FaListAlt, FaUsers } from 'react-icons/fa';

const Overview = () => {
  return (
    <section className="bg-gray-light p-2 mt-0 rounded-lg shadow-lg mb-4">
      <div className='rounded-lg bg-gray-400 p-1 px-4'>
        <h2 className="text-white text-lg font-semibold">YOUR OVERVIEW</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 mb-2">
        <div className="bg-white rounded-lg shadow h-48 flex flex-col justify-between mb-2">
          <h3 className="text-black text-xs mb-2 bg-yellow-400 rounded p-2 text-center flex items-center justify-center">
            <FaStar className="mr-2" /> MY SCORE
          </h3>
          <div className="text-3xl font-bold text-center">6.1</div>
          <p className="text-xs text-gray-500 bg-yellow-300 rounded pt-2 pb-2 text-center">AVERAGE SCORE IS 5.6</p>
        </div>
        <div className="bg-white rounded-lg shadow h-48 flex flex-col justify-between">
          <h3 className="text-black text-xs mb-2 bg-yellow-400 rounded p-2 text-center flex items-center justify-center">
            <FaPalette className="mr-2" /> MY COLOR PROFILE
          </h3>
          <div className="h-16 w-16 rounded-full bg-yellow-light flex items-center justify-center mx-auto">
            <img src="./img/logo.png" alt="Color Profile" className="h-12 w-12" />
          </div>
          <p className="text-xs text-gray-500 bg-yellow-300 rounded pt-2 pb-2 text-center">MAIN COLOR: YELLOW</p>
        </div>
        <div className="bg-white rounded-lg shadow h-48 flex flex-col justify-between">
          <h3 className="text-black text-xs mb-2 bg-yellow-400 rounded p-2 text-center flex items-center justify-center">
            <FaRocket className="mr-2" /> MY AMBITION
          </h3>
          <div className="text-3xl font-bold text-center">7.5</div>
          <p className="text-xs text-gray-500 bg-yellow-300 rounded pt-2 pb-2 text-center">AMBITION GAP: 1.4</p>
        </div>
        <div className="bg-white rounded-lg shadow h-48 flex flex-col justify-between">
          <h3 className="text-black text-xs mb-2 bg-yellow-400 rounded p-2 text-center flex items-center justify-center">
            <FaBullseye className="mr-2" /> MY TARGET
          </h3>
          <div className="text-3xl font-bold text-center">10 
            <p className='text-center'>Questions</p>
          </div>
          <p className="text-xs text-gray-500 bg-yellow-300 rounded pt-2 pb-2 text-center">2 Questions Left Open</p>
        </div>
        <div className="bg-white rounded-lg shadow h-48 flex flex-col justify-between">
          <h3 className="text-black text-xs mb-2 bg-yellow-400 rounded p-2 text-center flex items-center justify-center">
            <FaListAlt className="mr-2" /> MY PRIORITY LIST
          </h3>
          <div className="text-3xl font-bold text-center">6 
            <p className='text-center'>To-Dos</p>
          </div>
          <p className="text-xs text-gray-500 bg-yellow-300 rounded pt-2 pb-2 text-center">10% Completed</p>
        </div>
        <div className="bg-white rounded-lg shadow h-48 flex flex-col justify-between">
          <h3 className="text-black text-xs mb-2 bg-yellow-400 rounded p-2 text-center flex items-center justify-center">
            <FaUsers className="mr-2" /> MY BUDDIES
          </h3>
          <div className="text-3xl font-bold text-center">6
            <p className='text-center'>Buddies</p>
          </div>
          <p className="text-xs text-gray-500 bg-yellow-300 rounded pt-2 pb-2 text-center">Can Give You Advice</p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
