import React from 'react';
import { HashLink } from 'react-router-hash-link';
import instagramLogo from "../../images/instagramicon.png";
import { FaInfoCircle, FaCogs, FaEnvelope } from "react-icons/fa";


const NavLinks = () => {
    return (
        <>
            {/* About Section */}
            <>
            <div className="py-2 sm:py-3">
            <span className="flex items-center space-x-2">
            <FaInfoCircle className="h-5 w-5 text-white md:hidden" />
                <HashLink className="px-4 font-extrabold text-black-500 hover:text-blue-900" smooth to="/#about">
                    About Us
                </HashLink>
                </span>
                <div className="border-b border-gray-300 sm:hidden"></div> {/* Border visible only on mobile */}
            </div>
            </>

            {/* Services Section */}
            <div className="py-2 sm:py-3">
                <span className="flex items-center space-x-2">
                    <FaCogs className="h-5 w-5 text-black-500 md:hidden" /> {/* Example icon, only visible on mobile */}
                    <HashLink className="px-4 font-extrabold text-black-500 hover:text-blue-900" smooth to="/#services">
                    Services
                    </HashLink>
                    </span>
                    <div className="border-b border-gray-300 sm:hidden"></div> {/* Border visible only on mobile */}
                    </div>


            {/* Contact Section */}
            <div className="py-2 sm:py-3">
                <span className="flex items-center space-x-2">
                    <FaEnvelope className="h-5 w-5 text-black-500 md:hidden" />
                    <HashLink className="px-4 font-extrabold text-black-500 hover:text-blue-900" to="/contact#contact">
                    Contact Us
                    </HashLink>
                    </span>
                    <div className="border-b border-gray-300 sm:hidden"></div> {/* Border visible only on mobile */}
            </div>

            {/* Instagram Section */}
            <div className="py-2 sm:py-3 flex flex-row items-center justify-start space-x-3">
                <a
                    href="https://www.instagram.com/yugamhr_solutions?igsh=cjdkdzd2d3NwbTI3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                >
                    <img 
                        src={instagramLogo} 
                        alt="Follow Us on Instagram" 
                        className="h-6 w-6 rounded-full shadow-lg hover:shadow-xl" 
                    />
                </a>
                <span className="px-4 font-extrabold text-black-500 hover:text-blue-900 sm:hidden">Follow Us</span>
            </div>
        </>
    );
};

export default NavLinks;