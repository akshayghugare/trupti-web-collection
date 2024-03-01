import React, { useState } from 'react';
import LoginSignup from '../components/LoginSignup';
import DeliveryAddress from '../components/DeliveryAddress';
import OrderSummary from '../components/OrderSummary';
import PaymentOption from '../components/PaymentOption';
import ConfirmOrder from '../components/ConfirmOrder';
import { useNavigate } from 'react-router-dom';

const ConfirmOrderPage = () => {
    const navigate = useNavigate()
    const [isConfirmed, setIsConfirmed] = useState(false);
  
  const handleCancel = () => {
    // Implement cancellation logic if needed
    navigate(`/men/shirts`)
  };

  const handleConfirm = () => {
    // Implement confirmation logic if needed
    setIsConfirmed(true);
  };

  return (
    <div className="flex justify-center items-start p-8">
      <div className="w-1/2">
        <LoginSignup />
        <DeliveryAddress />
        <OrderSummary />
        <PaymentOption />
        {!isConfirmed ? (
          <ConfirmOrder onCancel={handleCancel} onConfirm={handleConfirm} />
        ) : (
          <p className="text-2xl font-bold text-green-500">Order Confirmed!</p>
        )}
      </div>
    </div>
  );
};

export default ConfirmOrderPage;