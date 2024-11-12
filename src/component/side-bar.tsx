import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-blue-300 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold">AlumUnite</h1>
      <div className="flex space-x-6">
        <NavLink to="/" className="hover:text-gray-200">Home</NavLink>
        <NavLink to="/add-user" className="hover:text-gray-200">Add User</NavLink>
        <NavLink to="/manage-users" className="hover:text-gray-200">Manage Users</NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;
