import { FaSearch, FaMicrophone } from "react-icons/fa";
import { useEffect, useState } from "react";
import csjmulogo from "../assets/csjmulogo.png";
import icraecct from "../assets/ICRAECCT.png";

import Naac from "../assets/NaacA++.jpg";
import finallogo from "../assets/finalLogo.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      {/* Header container - fixed at top, full width, fixed height */}
      <div
        id="container"
        className="absolute top-0 left-0 z-50 w-full h-[190px] bg-white text-white  shadow-md flex items-center justify-center"
      >
        {/* Search box wrapper */}
       
      
      <div className="w-1/2 flex justify-center items-center bg-gray-100">
        <img src={finallogo} alt="Image 1" className="w-50 h-50 object-contain" />
      </div>
      
    
        
      </div>
      <Navbar />
    </>
  );
}
