import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Placement Services</h2>
                                    <p className="text-md font-medium">
                                    Our HR placement services support recruiters in staffing, recruitment, and training. We assist with job postings, career fairs, and agency partnerships, screen candidates through resume reviews, interviews, and background checks, and ensure a seamless onboarding process for new hires.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Contract Staffing</h2>
                                    <p className="text-md font-medium">

Contract staffing is a strategic solution that enables companies to hire temporary employees for specific tasks or durations, offering flexibility, cost control, and access to specialized skills. Contract staffing consultants connect employers with qualified temporary staff, bridging the gap effectively.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Payroll</h2>
                                    <p className="text-md font-medium">
                                    Simplify your company's payroll with our comprehensive services. We ensure accurate, timely payments, manage tax withholdings, and maintain compliance with all regulations. Our efficient solutions reduce administrative tasks, allowing you to focus on core business operations.                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Training and Placement</h2>
                                    <p className="text-md font-medium">
                                    Our Training and Placement service is focused on equipping individuals with the skills necessary for career success. We offer tailored training programs that boost job readiness and meet industry standards. By bridging the gap between education and employment, we provide valuable solutions for both candidates and businesses, fostering growth and success.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
    <div className="m-auto max-w-6xl pl-[2px] pr-[2px] md:p-12 h-5/6">
        <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
            {/* Left Section */}
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center pl-[2px] pr-[2px]">
                {/* <div className="text-blue-900 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                        <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                    </svg>
                </div> */}
                <h3 className="text-3xl text-blue-900 font-bold">
                    <span className="font-black">Why Choose Yugam HR Services?</span>
                </h3>
                <div>
                    <p className="my-3 text-xl text-gray-600 font-semibold text-left">
                        At Yugam HR Services, we are committed to delivering expert HR solutions that drive business success.
                    </p>
                    <ul className="mt-4 list-disc list-inside text-gray-700 text-lg sm:text-xl pl-[2px] pr-[2px]">
                        <li><strong>Expertise in HR Consulting</strong></li>
                        <li><strong>Customized HR Solutions</strong></li>
                        <li><strong>End-to-End HR Support</strong></li>
                        <li><strong>Proven Track Record of Success</strong></li>
                        <li><strong>Focus on Employee Engagement</strong></li>
                    </ul>
                </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center pl-[2px] pr-[2px]">
                {/* <div className="text-blue-900 mb-4 flex justify-center items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                        <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                    </svg>
                </div> */}
                <h3 className="text-3xl text-blue-900 font-bold">
                    We Collaborate for <span className="font-black">HR Excellence</span>
                </h3>
                <div>
                    <p className="my-3 text-xl text-gray-600 font-semibold">
                        Creating impactful teams by matching exceptional talent with your business needs.
                    </p>
                    <ul className="mt-4 list-disc list-inside text-gray-700 text-lg sm:text-xl pl-[2px] pr-[2px]">
                        <li><strong>Partnerships with Industry Leaders</strong></li>
                        <li><strong>Collaboration with Recruitment Agencies</strong></li>
                        <li><strong>End-to-End HR Support</strong></li>
                        <li><strong>Proven Track Record of Success</strong></li>
                        <li><strong>Focus on Employee Engagement</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default Services;