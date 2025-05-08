import React from 'react';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-blue-600 font-bold">₹{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;