import React from 'react';
import './styles/tailwind.css'; // Import the Tailwind CSS file


const MyComponent = () => {
  return (
    <header className='flex flex-row justify-between bg-black text-white text-5xl h-36'>
      <div>name</div>
      <div className='flex flex-row justify-between'>
      <div className='pr-10'>services</div>
      <div className='pr-10'>contact</div>
      <div className='pr-10'>about us</div>
      </div>
    </header>
  );
};

export default MyComponent;
