// Header component
import React from 'react';

export default function Header() {
  return (
    <header className='flex items-center justify-between mb-6'>
      <h1 className='text-2xl font-bold'>Task Planner</h1>
      <button className='bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-400'>
        Settings
      </button>
    </header>
  );
}