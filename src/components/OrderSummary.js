import React from 'react';

const OrderSummary = () => {
  return (
    <div className="p-4 border">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Product Detail:</label>
          
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Quantity:</label>
          <input type="number" className="w-full border p-2" placeholder="Enter quantity" />
        </div>
        {/* Add more order summary form fields as needed */}
      </form>
    </div>
  );
};

export default OrderSummary;