import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import { HashLink } from 'react-router-hash-link';
import companylogo from '../../images/clients/logo.png'; 
import instagramLogo from "../../images/instagramicon.png"; 

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
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
            <div className="flex flex-row justify-between items-center py-2 md:px-12">
                {/* Company Logo */}
                <div className="flex flex-row items-center p-2 pb-8 sm:p-0">
                    <HashLink smooth to="/#hero">
                    <img src={companylogo} alt="Company Logo" className="h-16 w-auto" />
                    </HashLink>
                    </div>


                {/* Navigation Links */}
                <div className="hidden space-x-6 lg:flex justify-center">
                    <NavLinks />
                    </div>


                {/* Instagram Logo in Navbar */}
                {/* <div className="ml-auto">
                    <a 
                        href="https://www.instagram.com/yugamhr_solutions?igsh=cjdkdzd2d3NwbTI3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                    >
                        <img 
                            src={instagramLogo} 
                            alt="Follow Us on Instagram" 
                            className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl"
                        />
                    </a>
                </div> */}

                {/* Mobile Menu Button */}
                <button className="p-2 rounded-lg lg:hidden text-blue-900" onClick={handleClick}>
                    <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                        ) : (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        )}
                    </svg>
                </button>

                {/* Mobile Navigation Menu
                <div className={`fixed transition-transform duration-300 ease-in-out flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${isOpen ? "block" : "hidden"}`}>
                    <div className='flex flex-col space-y-6'>
                        <NavLinks />
                    </div>
                </div> */}
                {/* Mobile Navigation Menu */}
<div
    className={`fixed transition-transform duration-300 ease-in-out flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${
        isOpen ? "block" : "hidden"
    }`}
>
    <div className="flex flex-col items-start text-left space-y-6">
        <NavLinks />
    </div>
</div>
            </div>
        </nav>
    );
};

export default NavBar;