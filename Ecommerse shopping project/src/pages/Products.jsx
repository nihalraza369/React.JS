import React from 'react';
import ProductCard from '../components/ProductCard';

const dummyProducts = [
  { image: 'https://source.unsplash.com/300x200/?boy,shirt', title: 'Cool Shirt', price: 799 },
  { image: 'https://source.unsplash.com/300x200/?boy,pant', title: 'Comfy Pant', price: 999 },
  { image: 'https://source.unsplash.com/300x200/?fashion,boy', title: 'Trendy Look', price: 1099 },
  { image: 'https://source.unsplash.com/300x200/?jeans,boy', title: 'Denim Jeans', price: 1199 },
  { image: 'https://source.unsplash.com/300x200/?kurta,boy', title: 'Traditional Kurta', price: 699 },
];

const Products = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyProducts.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
