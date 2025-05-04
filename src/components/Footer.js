import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import instaLogo from "../images/instagramicon.png";

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-200 border-t border-b py-30 text-center">
                {/* <div className="footer max-w-full mx-auto px-4 sm:px-6"> */}

                    {/* Top Area: Center-Aligned Blocks */}
                    <div className="flex flex-col items-center justify-center gap-5 py-8 md:py-12 border-t border-gray-200">

                        {/* Company Info (Centered) */}
                        <div className="w-full flex flex-col items-center text-center">
                            <div className="box-border border border-black border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-400 rounded-lg xl:w-80 shadow-lg">
                                <h3 className="font-extrabold text-3xl text-gray-900 mb-4">Yugam HR Solutions</h3>
                                <div className='text-md font-medium text-gray-600'>
                                    <p>234, ED 1477 Mettangattu Valasu, Valliarachal, Kangeyam,</p>
                                    <p>Tiruppur,</p>
                                    <p>Tamil Nadu - 638105.</p>
                                    </div>
                                    </div>
                                    </div>


                        {/* Social Media Links (Centered) */}
                        <div className="w-full flex flex-col items-center text-center">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">FOLLOW US</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <a href="https://www.instagram.com/yugamhr_solutions?igsh=cjdkdzd2d3NwbTI3"
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-[#013289] hover:text-gray-900 flex items-center space-x-2">
                                        <img 
                                            src={instaLogo} 
                                            alt="Instagram Logo" 
                                            className="h-6 w-6" />
                                        <span>Instagram</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Copyright Section */}
                    <div className="flex justify-center items-center text-center mx-auto px-4">
                        <div className="text-sm text-gray-600 font-semibold py-2">
                            Copyright &copy; {new Date().getFullYear()}{" "}
                            <HashLink to="#" className="hover:text-gray-900">Yugam HR Solutions</HashLink>. All rights reserved.
                        </div>
                    </div>

                {/* </div> */}
            </footer>
        </>
    );
};

export default Footer;

