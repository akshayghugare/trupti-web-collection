import React, { useState } from 'react';

const LoginSignup = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('');

  const handleInputChange = (e) => {
    setEmailOrMobile(e.target.value);
  };

  return (
    <div className="p-4 border">
      <h2 className="text-2xl font-bold mb-4">Login / Signup</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email or Mobile:</label>
          <input
            type="text"
            className="w-full border p-2"
            value={emailOrMobile}
            onChange={handleInputChange}
            placeholder="Enter your email or mobile number"
          />
        </div>
        {/* Add more login/signup form fields as needed */}
      </form>
    </div>
  );
};

export default LoginSignup;