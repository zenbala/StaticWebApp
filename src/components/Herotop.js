import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../images/LogoSamp3.jpg";
import NavBar from "./Navbar/NavBar"; // Ensure Navbar is imported

const HeroTop = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar Fixed at the Top */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 pb-20">
  <NavBar />
</header>

<div className="herotop w-screen min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden pt-[120px] sm:pt-[140px]">
     
        {/* Background Image - Stretches Dynamically */}
        <img 
          src={backgroundImg} 
          alt="Expert HR Solutions" 
          className="absolute inset-0 w-full h-screen sm:h-screen object-cover bg-center bg-cover"
        />

        {/* Overlay - Mobile Adjustments */}
        <div className="absolute inset-0 bg-black opacity-60 sm:opacity-50 w-full h-full"></div>

        {/* Content - Fully Responsive */}
        <div className="herotop-content text-white max-w-screen-lg sm:max-w-screen-md md:max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 relative z-10 flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight">
            Expert HR Solutions <br className="hidden sm:block" />
            That Fuel Business Growth
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 leading-relaxed">
            Recruit, Empower, Succeed.
          </p>
          <button
            className="mt-6 px-4 sm:px-6 py-2 sm:py-3 text-md sm:text-lg md:text-xl font-medium bg-blue-900 hover:bg-blue-800 rounded-lg shadow-md"
            onClick={() => navigate("/contact")}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroTop;