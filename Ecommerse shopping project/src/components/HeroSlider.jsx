import React, { useEffect, useState } from 'react';

const images = [
  'https://source.unsplash.com/1600x600/?fashion,boy',
  'https://source.unsplash.com/1600x600/?clothes,model',
  'https://source.unsplash.com/1600x600/?shirt,boy',
  'https://source.unsplash.com/1600x600/?pant,boy',
  'https://source.unsplash.com/1600x600/?shopping,boy',
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[70vh] relative overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="slider"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
  {images.map((_, index) => (
    <div
      key={index}
      onClick={() => setCurrent(index)}
      className={`w-3 h-3 rounded-full cursor-pointer ${index === current ? 'bg-white' : 'bg-gray-500'}`}
    />
  ))}
</div>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold">Style Starts Here</h2>
      </div>
    </div>
  );
};

export default HeroSlider;
