import React from "react";

// import kws from "../images/clients/kws.png";
// import geps from "../images/clients/geps.png";
// import dvara from "../images/clients/dvara.png";
// import adityaBirla from '../images/clients/AdityBirla.png';
import moti from "../images/clients/MotilalOswal.png";
import kinara from "../images/clients/Kinara.png";
import apacfin from "../images/clients/APACFinance.png";
import hdfcsales from "..//images/clients/HDFCSales.png";
import truhomefin from "..//images/clients/TruHomeFinanace.png"

const Clients = () => {
  const logos = [moti, kinara, apacfin,hdfcsales,truhomefin];

  return (
    <div className="mt-8 bg-gray-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Key Clients
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          {/* <h2 className="mt-4 mx-4 text-center text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900">
            Some of our clients.
          </h2> */}
        </div>

        <div className="px-4 sm:px-8 pb-8">
          {/* Center-aligned layout */}
          <div className="flex flex-wrap justify-center gap-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center p-4 transition-transform duration-300 ease-in-out hover:scale-150"
              >
                <img
                  src={logo}
                  alt={`client-${index}`}
                  className="h-28 w-28 sm:h-32 sm:w-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;