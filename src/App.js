import React from 'react';
import './styles/tailwind.css'; // Import the Tailwind CSS file

const MyComponent = () => {
  return (
    <header className='flex flex-row justify-between h-40 bg-indigo-950 bg-opacity-50'>
      <div className='text-7xl font-extrabold pt-10 pl-7 text-yellow-400 italic font-serif'>FlavorWagon Express</div>
      <div className='flex flex-row pt-16 pr-10 pl-2 pb-2'>
        <div className='text-xl font-bold text-black font-serif'>HOME</div>
        
        <div className='text-xl font-bold text-black pl-9 pr-7 font-serif'>SIGNUP</div>
        <div className='text-xl font-bold text-black pl-5 pr-6 bg-white rounded-full h-8 w-25 font-serif'>LOGIN</div>
      </div>
    </header>


    
  );
};

export default MyComponent;
