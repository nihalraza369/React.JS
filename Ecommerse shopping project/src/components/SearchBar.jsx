import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex justify-center mt-8">
      <input
        type="text"
        placeholder="Search for pants, shirts, styles..."
        className="w-1/2 p-4 rounded-full shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default SearchBar;