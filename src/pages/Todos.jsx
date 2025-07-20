import React, { useState } from 'react';
import Sidebar from '../componenet/Sidebar';
import { Outlet } from 'react-router-dom';
import { AlignJustify } from 'lucide-react';

const Todos = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen md:flex">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className="p-4 w-full z-10">
        {/* Toggle Button (only for mobile) */}
        <button
          className="flex items-center gap-1 md:hidden bg-blue-600 text-white px-4 py-2 rounded mb-4"
          onClick={() => setIsOpen(true)} >
          <AlignJustify className='w-4 h-4'/> Menu
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default Todos;
