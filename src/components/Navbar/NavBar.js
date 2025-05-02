import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link'; 
import NavLinks from './NavLinks'; 
import companylogo from '../../images/clients/logo.png'; 
import instagramLogo from '../../images/instagramicon.png'; 

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const debounce = (func, delay) => {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => func.apply(this, args), delay);
            };
        };

        const scrollHandler = debounce(() => {
            setTop(window.pageYOffset <= 10);
        }, 100);

        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top ? 'bg-white shadow-lg' : ''}`}>
            <div className="flex flex-row justify-between items-center py-2 md:px-6 lg:px-12">

                {/* Company Logo with Left Padding for Mobile */}
                <div className="flex flex-row items-center p-2 sm:p-0 pl-4">
                    <HashLink smooth to="/#hero">
                        <img src={companylogo} alt="Company Logo" className="h-12 w-auto md:h-14" />
                    </HashLink>
                </div>

                {/* Navigation Links with Right Padding for Mobile */}
                <div className="hidden md:flex md:space-x-4 lg:space-x-6 pr-34">
                    <NavLinks />
                </div>

                {/* Mobile Menu Button */}
                <button className="p-2 rounded-lg md:hidden text-blue-900" onClick={handleClick}>
                    <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18 16l-6-6-6 6" />
                        ) : (
                            <path fillRule="evenodd" d="M4 5h16M4 12h16M4 19h16" />
                        )}
                    </svg>
                </button>

                {/* Mobile Navigation Menu */}
                <div className={`absolute left-0 top-16 w-full bg-white shadow-xl transition-transform duration-300 ease-in-out p-6 ${isOpen ? "block" : "hidden"}`}>
                    <div className="flex flex-col space-y-4">
                        <NavLinks />
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;