import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-300 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold">AlumUnite</h1>
        
        {/* Hamburger Icon for Mobile */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-black focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className="hover:text-gray-200">Home</NavLink>
          <NavLink to="/add-user" className="hover:text-gray-200">Add User</NavLink>
          <NavLink to="/manage-users" className="hover:text-gray-200">Manage Users</NavLink>
        </div>
      </div>

      {/* Links for Mobile */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-blue-200 p-4 space-y-2 m-5`}>
        <NavLink to="/" className="block hover:text-gray-200" onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/add-user" className="block hover:text-gray-200" onClick={toggleMenu}>Add User</NavLink>
        <NavLink to="/manage-users" className="block hover:text-gray-200" onClick={toggleMenu}>Manage Users</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
