import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import MenPage from '../pages/MenPage';
import WomenPage from '../pages/WomenPage';
import ChildrenPage from '../pages/ChildrenPage';
import Store from '../components/Store';
import LoginPage from '../pages/LoginPage';
import MenShirtPage from '../pages/MenShirtPage';
import MenPantsPage from '../pages/MenPantsPage';
import MenKurtasPage from '../pages/MenKurtasPage';
import ConfirmOrderPage from '../pages/ConfirmOrderPage';

function IndexRoute() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/children" element={<ChildrenPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/men/shirts" element={<MenShirtPage />} />
        <Route path="/men/pants" element={<MenPantsPage/>} />
        <Route path="/men/kurtas" element={<MenKurtasPage/>} />
        <Route path="/confirm-order/:id" element={<ConfirmOrderPage/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default IndexRoute;
