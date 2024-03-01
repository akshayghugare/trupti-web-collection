import React, { useState } from 'react';

const PaymentOption = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <div className="p-4 border">
      <h2 className="text-2xl font-bold mb-4">Payment Option</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Payment Method:</label>
          <select
            className="w-full border p-2"
            value={selectedPaymentMethod}
            onChange={handlePaymentChange}
          >
            <option value="">Select Payment Method</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
            <option value="card">Debit/Credit Card</option>
            <option value="phonePe">PhonePe</option>
            <option value="paytm">Paytm</option>
            {/* Add more payment options as needed */}
          </select>
        </div>
        {/* Add more payment option form fields as needed */}
      </form>
    </div>
  );
};

export default PaymentOption;