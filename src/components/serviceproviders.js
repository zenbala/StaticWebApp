// import React from "react";
// import serviceprov from "../images/LogoSamp5.jpg";

// const ServiceProviders = () => {
//   return (
//     <div className="ServiceProviders" id="ServiceProviders">
//       {/* Outer Container */}
//       <div className="m-auto mx-4 mt-8 lg:mt-4 p-4 lg:p-12 h-5/6">
//         <div className="flex flex-col lg:flex-row items-center justify-between">
//           {/* Left Container: Text Section */}
//           <div className="lg:w-1/2 flex flex-col justify-center text-center mb-8 lg:mb-0">
//             <h1 className="mb-5 text-3xl md:text-5xl font-bold text-blue-900">
//               Industries We Serve
//             </h1>
//             <div className="text-xl font-semibold tracking-tight text-gray-500 space-y-4">
//               <div className="relative">
//                 <span className="bg-gradient-to-r from-blue-200 to-blue-400 p-2 rounded-lg animate-pulse transition-transform transform hover:scale-150 hover:bg-blue-300">
//                   1. Banking
//                 </span>
//               </div>
//               <div className="relative">
//                 <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 p-2 rounded-lg animate-pulse transition-transform transform hover:scale-150 hover:bg-yellow-300">
//                   2. Non-Banking
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right Container: Image Section */}
//           <div className="lg:w-1/2 flex justify-center items-center">
//             <div className="bg-gray-200 p-4 rounded-md shadow-lg">
//               <img
//                 alt="Industries We Serve"
//                 src={serviceprov}
//                 className="rounded-md w-full h-auto"
//                 style={{ width: "450px" }} // Adjust width if needed
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceProviders;


import React from "react";
import serviceprov from "../images/LogoSamp5.jpg";

const ServiceProviders = () => {
  return (
    <div className="ServiceProviders" id="ServiceProviders">
      {/* Outer Container */}
      <div className="m-auto mx-4 mt-8 lg:mt-4 p-4 lg:p-12 h-5/6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Container: Grid Section */}
          <div className="lg:w-1/2 flex flex-col justify-center mb-8 lg:mb-0 text-center">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-blue-900">
              Industries We Serve
            </h1>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative bg-blue-200 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
                <span className="text-xl font-bold text-blue-900">Banking</span>
              </div>
              <div className="relative bg-yellow-200 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
                <span className="text-xl font-bold text-yellow-900">Non-Banking</span>
              </div>
            </div>
          </div>

          {/* Right Container: Image Section */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="bg-gray-200 p-4 rounded-md shadow-lg">
              <img
                alt="Industries We Serve"
                src={serviceprov}
                className="rounded-md w-full h-auto"
                style={{ width: "450px" }} // Adjust width if needed
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviders;

