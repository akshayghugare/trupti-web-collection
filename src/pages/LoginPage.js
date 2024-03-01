import React from 'react';
import { FaGoogle, FaPhoneAlt } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] ">
      <div className="p-10 w-[30%] bg-white rounded-lg shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-2xl font-bold mb-10 text-center">Login to Your Account</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********"/>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign Up
          </button>
        </div>
        <hr className="my-6 border-t" />
        <p className="text-center">Or login with</p>
        <div className="flex items-center justify-center mt-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mx-2">
            <FaGoogle className="mr-2" /> Google
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mx-2">
            <FaPhoneAlt className="mr-2" /> Phone
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
