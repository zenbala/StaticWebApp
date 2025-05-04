import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import NavLinks from './NavLinks';
import companylogo from '../../images/clients/logowbg.png';

const NavBar = () => {
    const [top, setTop] = useState(window.scrollY <= 10);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        document.body.classList.toggle("overflow-hidden", !isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setTop(window.scrollY <= 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.classList.remove("overflow-hidden"); // Reset scroll lock
        };
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top ? 'bg-white shadow-lg' : ''}`}>
            <div className="flex flex-row justify-between items-center py-2 md:px-6 lg:px-12">

                {/* Company Logo */}
                <div className="flex items-center p-2 sm:p-0 pl-4">
                    <HashLink smooth to="/#hero">
                        <img src={companylogo} alt="Company Logo" className="h-12 w-auto md:h-14" />
                    </HashLink>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <NavLinks />
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="absolute right-4 top-4 p-3 rounded-lg md:hidden text-blue-900 z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18 16l-6-6-6 6" />
                        ) : (
                            <path fillRule="evenodd" d="M4 5h16M4 12h16M4 19h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu - Opens Below Menu Button */}
            <div className={`absolute top-full left-0 w-full bg-blue-900 shadow-xl transition-transform duration-300 ease-in-out p-6 rounded-lg ${isOpen ? "block" : "hidden"} z-50`}>
                <div className="flex flex-col space-y-4 text-white">
                    <NavLinks />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;