import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Nihal Fashion</h1>
      <div className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link to="/products" className="text-gray-700 hover:text-blue-500">Products</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;