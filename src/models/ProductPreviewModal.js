import React, { useState } from 'react';

const ProductPreviewModal = ({ product, onClose ,handleAddToCart,handleBuyNow}) => {
  const [selectedAngle, setSelectedAngle] = useState(product.angles[0]);
  console.log("product",product)
  const handleAngleClick = (angle) => {
    setSelectedAngle(angle);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
      <div className="relative p-8 bg-gray-300 w-full max-w-4xl m-auto flex-col flex rounded-lg">
        <div className='flex gap-10'>
        <div className="flex items-start justify-between">
          {/* Angle Thumbnails */}
          <div className="flex flex-col space-y-4 mr-4">
            {product.angles.map((angle, index) => (
              <img
                key={index}
                src={angle}
                alt={`Angle ${index + 1}`}
                className={`w-24 h-24  object-cover rounded-md cursor-pointer ${selectedAngle === angle ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => handleAngleClick(angle)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-grow">
            <img
              src={selectedAngle}
              alt="Selected Angle"
              className="rounded-md object-cover h-96 cursor-pointer"
            />
          </div>
        </div>
        {/* Product Details */}
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Name: {product.name}</h2>
          <p className="text-gray-800 mb-2">Price: {product.price}</p>
          <p className="text-gray-800 mb-2">Size: {product.size}</p>
          <p className="text-gray-800 mb-2">Rating</p>
          <p>{"⭐".repeat(product.rating)}</p>
        </div>
        </div>
        <div className="mt-4 flex justify-end">
        <div className="mt-4 flex justify-between items-center gap-5">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => handleBuyNow(product)}
        >
          Buy Now
        </button>
        <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 mr-2"
            onClick={onClose}
          >
            Close
          </button>
      </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewModal;
