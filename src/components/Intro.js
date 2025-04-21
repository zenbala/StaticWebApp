import React from 'react';
import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-blue-900 font-bold"> Best HR Consultancy with Staffing Solutions</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>As an experienced staffing agency, we’ve had the opportunity to work with diverse clients, allowing us to understand that each company has its own unique values, culture, and expectations from employees. We specialize in creating tailored solutions and sourcing top talent that aligns with your company’s needs. Below are some of the staffing solutions we offer:</p>
                            </div>
                            
                            <div className="flex justify-center items-center px-4 py-6">
                                <ul className="text-left my-3 text-xl text-gray-600 font-semibold space-y-2">
                                    <li>1.Recruitment and staffing</li>
                                    <li>2.Training and development</li>
                                    <li>3.Compensation and Benefits</li>
                                    <li>4.HR Information and Management Systems</li>
                                    <li>5.Health Safety</li>
                                    <li>6.Payroll System</li>
                                </ul>
                            </div>
                            <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Contact us
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;