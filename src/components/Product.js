import React from 'react';

const Product = ({ product, onAddToCart, onBuyNow,onPreview }) => {
  return (
    <div className="border p-4 rounded hover:shadow-lg transition duration-300 ease-in-out">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" onClick={()=>onPreview(product)} />
      <h2 className="text-lg font-bold my-2">Name: {product.name}</h2>
      <p className="text-gray-800">Price: {`₹ ${product.price}`}</p>
      <p className="text-gray-800">Size: {`$${product.size}`}</p>
      <p className="text-gray-800">Rating</p>
      <div className="flex items-center my-2">
        {Array.from({ length: product.rating }, (_, index) => (
          <span key={index} role="img" aria-label="star" className="text-yellow-500 text-xl">
            ⭐
          </span>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => onBuyNow(product)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
