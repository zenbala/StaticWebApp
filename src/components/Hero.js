import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import heroImg from '../images/web-dev.svg';
import herosecimg from '../images/LogoSamp1.jpg';

const Hero = () => {
    return (
        <>
            {/* Include Navbar if needed */}
            <NavBar />

            <div className="hero" id="hero">
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-4 md:p-12 h-5/6" data-aos="zoom-in">
                    <div id="hero" className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        
                        {/* Left Container: Text Section */}
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h2 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">Who We Are</h2>
                            
                            <p className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                                Yugam HR Solutions, based in Tiruppur, offers expert HR consultancy services to help
                                businesses attract, develop, and retain top talent. We specialize in recruitment, onboarding,
                                performance management, training, and labor law compliance. Our customized HR strategies
                                are designed to boost productivity, enhance employee engagement, and drive sustainable growth. 
                                Whether you're a startup or an established company, we tailor solutions to meet your unique needs. 
                                Partner with Yugam HR Solutions to build a skilled, motivated workforce that fuels your success.
                            </p>
                            
                            {/* Enquire Now Button */}
                            <div className="mb-4 md:mb-8">
                                <Link
                                    to="/contact"
                                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                                >
                                    Enquire Now
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Right Container: Image Section */}
                        <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-up" data-aos-delay="700">
                            <div className="bg-gray-200 p-4 rounded-md shadow-lg">
                                <img
                                    alt="Hero Section"
                                    src={herosecimg}
                                    className="rounded-md w-80 md:w-96 lg:w-[450px] h-auto"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;