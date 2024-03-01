import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoone.png';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? '' : dropdown);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold sticky top-0 z-10 flex items-center justify-between px-4 py-3 md:px-5">
            <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-12 md:h-16 rounded-lg" />
                <span className="hidden md:block text-xl md:text-2xl font-bold">TRUPTI COLLECTION</span>
            </Link>

            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-blue-500 md:bg-transparent md:block md:static md:w-auto`}>
                <div className="flex flex-col md:flex-row gap-3 p-4 md:p-0 md:gap-5 items-center">
                    <div className="relative group">
                        <button className="md:text-white font-semibold" onClick={() => toggleDropdown('men')}>Men</button>
                        {activeDropdown === 'men' && (
                            <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded shadow-lg md:shadow text-black z-20">
                                <Link to="/men/shirts" className="block px-4 py-2 hover:bg-blue-100" onClick={() => toggleDropdown('')}>Shirts</Link>
                                <Link to="/men/pants" className="block px-4 py-2 hover:bg-blue-100" onClick={() => toggleDropdown('')}>Pants</Link>
                                <Link to="/men/kurtas" className="block px-4 py-2 hover:bg-blue-100" onClick={() => toggleDropdown('')}>Kurtas</Link>
                            </div>
                        )}
                    </div>
                    <div className="relative group">
                        <button className="md:text-white font-semibold" onClick={() => toggleDropdown('women')}>Women</button>
                        {activeDropdown === 'women' && (
                            <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded shadow-lg md:shadow text-black z-20">
                                <Link to="/women/dresses" className="block px-4 py-2 hover:bg-blue-100" onClick={() => toggleDropdown('')}>Dresses</Link>
                                <Link to="/women/tops" className="block px-4 py-2 hover:bg-blue-100" onClick={() => toggleDropdown('')}>Tops</Link>
                                <Link to="/women/kurtis" className="block px-4 py-2 hover:bg-blue-100" onClick={() => toggleDropdown('')}>Kurtis</Link>
                            </div>
                        )}
                    </div>
                    <div className="relative group">
                        <button className="md:text-white font-semibold" onClick={() => toggleDropdown('kids')}>Kids</button>
                        {activeDropdown === 'kids' && (
                            <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded shadow-lg md:shadow text-black z-20">
                                <Link to="/kids/boys-clothing" className="block px-4 py-2 hover:bg-blue-100" onClick={() => toggleDropdown('')}>Boys Clothing</Link>
                                <Link to="/kids/girls-clothing" className="block px-4 py-2 hover:bg-blue-100" onClick={() => toggleDropdown('')}>Girls Clothing</Link>
                                <Link to="/kids/baby-clothing" className="block px-4 py-2 hover:bg-blue-100" onClick={() => toggleDropdown('')}>Baby Clothing</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/store" className="md:text-white font-semibold">Store</Link>
                    <div className="flex-1 md:ml-4">
                        <input type="search" placeholder="Search product" className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                    <div className="flex gap-5 items-center">
                        <Link to="/profile" className="md:text-white font-semibold">Profile</Link>
                        <Link to="/wishlist" className="md:text-white font-semibold">Wishlist</Link>
                        <Link to="/bag" className="md:text-white font-semibold">Bag</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
