import React from 'react';

const ConfirmOrder = ({ onCancel, onConfirm }) => {
  return (
    <div className="p-4 border">
      <h2 className="text-2xl font-bold mb-4">Confirm Order</h2>
      {/* Display information from LoginSignup, DeliveryAddress, OrderSummary, PaymentOption components */}
      <div className="mb-4"> {/* Display login/signup information */}</div>
      <div className="mb-4"> {/* Display delivery address information */}</div>
      <div className="mb-4"> {/* Display order summary information */}</div>
      <div className="mb-4"> {/* Display payment option information */}</div>

      {/* Buttons for cancel and confirm order */}
      <button className="bg-gray-500 text-white p-2 mr-4" onClick={onCancel}>Cancel</button>
      <button className="bg-blue-500 text-white p-2" onClick={onConfirm}>Confirm Order</button>
    </div>
  );
};

export default ConfirmOrder;