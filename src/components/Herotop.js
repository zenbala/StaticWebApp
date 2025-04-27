import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import NavBar from "./Navbar/NavBar";

const HeroTop = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <>
      {/* Sticky NavBar */}
      {/*  
      <header className="navbar sticky top-0 z-50 bg-white shadow-md">
        <NavBar />
      </header>  
      */}

      {/* Hero Section */}
      <div className="herotop min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-black">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Content */}
        <div className="herotop-content text-white px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            Expert HR Solutions<br />
            That Fuel Business Growth
          </h1>
          <p className="text-xl mt-4">
            Recruit, Empower, Succeed.
          </p>
          <button
            className="mt-6 px-6 py-3 text-lg font-medium bg-blue-900 hover:bg-blue-800 rounded-lg shadow-md"
            onClick={() => navigate("/contact")} // Redirect on click
          >
            Enquire Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroTop;