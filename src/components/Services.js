import React from 'react';
import img from '../images/web.svg';
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';
import hrImage from '../images/LogoSamp4.jpg'; // Correct Image Import

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-2">
            <section data-aos="zoom-in-down">
                <div className="my-2 py-2">
                    <h1 className="mb-5 text-center text-3xl font-bold text-blue-900">
                        What We Do
                    </h1>
                </div>
            </section>

            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                        { image: img, title: 'Placement Services', description: `We assist organizations in staffing, recruitment, and talent development through strategic job postings, career fairs, and candidate screening.` },
                        { image: img2, title: 'Contract Staffing', description: `Hire skilled temporary staff for specific projects or periods with our flexible contract staffing solutions.` },
                        { image: img3, title: 'Payroll', description: `Simplify payroll operations with our accurate, compliant services covering payments, tax withholdings, and statutory obligations.` },
                        { image: img4, title: 'Training and Placement', description: `Equip candidates with job-ready skills through customized training programs aligned with industry standards.` },
                    ].map((service, index) => (
                        <div key={index} className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt={`${service.title} Image`} className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={service.image} />
                                <h2 className="font-semibold my-4 text-2xl text-center">{service.title}</h2>
                                <p className="text-md font-medium">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section with Image Instead of Right Text */}
            <section>
                <div className="m-auto max-w-6xl px-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-2 justify-between lg:text-left" data-aos="zoom-out">
                        {/* Left Section */}
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center px-2">
                            <h3 className="text-3xl text-blue-900 font-bold">
                                <span className="font-black">Why Choose Yugam HR Services?</span>
                            </h3>
                            <div>
                                <p className="my-4 text-2xl text-center text-gray-800">
                                    At Yugam HR Solutions, we are committed to delivering expert HR solutions that drive business success.
                                    </p>
                                    <ul className="mt-4 list-disc list-inside text-gray-800 text-lg sm:text-xl camelcase">
                                        <li>Customized & Scalable HR Solutions</li>
                                        <li>End-to-End Support Across All HR Functions</li>
                                        <li>Proven Recruitment & Retention Success</li>
                                        <li>Focus on Long-Term Client Partnerships</li>
                                        <li>Deep Industry Expertise Across Sectors</li>
                                        </ul>
                                        </div>
                        </div>

                        {/* Right Section - Image */}
                        <div className="lg:w-1/2 flex justify-center items-center px-8 pt-8">
                         <img 
                         src={hrImage} 
                         alt="HR Excellence" 
                         className="w-120 md:w-120 lg:w-80 rounded-lg shadow-lg" 
                         />
                         </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;