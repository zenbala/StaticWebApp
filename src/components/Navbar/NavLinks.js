import React from 'react';
import { HashLink } from 'react-router-hash-link';
import instagramLogo from "../../images/instagramicon.png";

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-black-500 hover:text-blue-900" smooth to="/#about">
                About Us
            </HashLink>
            <HashLink className="px-4 font-extrabold text-black-500 hover:text-blue-900" smooth to="/#services">
                Services
            </HashLink>
            {/* <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
                Portfolio
            </HashLink> */}
            <HashLink className="px-4 font-extrabold text-black-500 hover:text-blue-900" to="/contact#contact">
                Contact Us
            </HashLink>

            {/* Instagram Redirection Link */}
            <a
                href="https://www.instagram.com/yugamhr_solutions?igsh=cjdkdzd2d3NwbTI3"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 transition-transform duration-300 ease-in-out hover:scale-110"
            >
                <img 
                    src={instagramLogo} 
                    alt="Follow Us on Instagram" 
                    className="h-6 w-6 rounded-full shadow-lg hover:shadow-xl" 
                />
            </a>
        </>
    );
};

export default NavLinks;