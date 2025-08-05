import romanialogo from "../assets/romanialogo.jpg";
import aradlogo from "../assets/aradlogo.png";
import fresnillologo from "../assets/fresnillologo.jpg";
import icraecct from "../assets/icraecct.png";

export default function HeroSection() {
  return (
    
    <div className="bg-white pb-10  text-center text-black border-b shadow-sm rounded-lg">
      

     <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/djasn9mmy/video/upload/samples/elephants.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Text */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-r from-red-600 to-indigo-500 bg-clip-text text-transparent
">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Second International Conference on Recent Advances in Emerging Computing and Communication 
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Technologies for A Sustainable Future
        </h2>
        <p className="text-xl font-medium">
          Conference Date: 11<sup className="bg-gradient-to-r from-red-600 to-indigo-500 bg-clip-text">th</sup> & 13<sup className="bg-gradient-to-r from-red-600 to-indigo-500 bg-clip-text">th</sup> April, 2026  (Tentative)
        </p>
      </div>

      {/* Logos Row */}
      <div className="absolute bottom-0 w-full z-10 py-4 bg-black/30 backdrop-blur-sm overflow-hidden">
  <div className="flex w-max animate-marquee gap-40">
    {/* Repeated Logos for Seamless Loop */}
    {[romanialogo, aradlogo, fresnillologo , icraecct, romanialogo, aradlogo, fresnillologo , icraecct,romanialogo, aradlogo, fresnillologo , icraecct,romanialogo, aradlogo, fresnillologo , icraecct,romanialogo, aradlogo, fresnillologo , icraecct,romanialogo, aradlogo, fresnillologo , icraecct,romanialogo, aradlogo, fresnillologo , icraecct,].map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt={`Logo ${index}`}
        className="h-12 md:h-14"
      />
    ))}
  </div>
</div>



      
    </div>
      


      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6 bg-white text-center">
      {/* Title */}
      <div className="border p-4 rounded-md">
        
        <h2 className="text-xl md:text-2xl font-bold text-red-600 mt-1">
          (ICRAECTSF) - 2026 Hybrid Mode
        </h2>
      </div>

      {/* Organizers */}
      <div className="text-blue-900 font-bold rounded-md">
        <p>Jointly organized by:</p>
      </div>

      {/* Departments */}
      <div className="border p-4 text-left space-y-1 rounded-md flex flex-col items-center ">
        <ul className="list-disc list-inside text-[1rem] text-gray-800 ">
          <li>Department of Computer Application</li>
          <li>Department of Computer Science & Engineering</li>
          <li>Department of Electronics and Communication Engineering</li>
          <li>
            <span className="text-red-600 font-semibold">
              School of Engineering and Technology (UIET)
            </span>
            ,
          </li>
        </ul>
      </div>

      {/* University Info */}
      <div className="border rounded-md p-4 space-y-2 ">
        <h3 className=" font-bold text-red-700 text-2xl">
          Chhatrapati Shahu Ji Maharaj University, Kanpur (Venue Partner)
        </h3>
        <p className="text-gray-700 text-xl">UGC Category - I</p>
        <p className="text-gray-700 text-md">
          Uttar Pradesh State University (Formerly Kanpur University, Kanpur, India)
        </p>
        <p className="text-red-600 font-semibold text-md">in Association with</p>
        <p className="text-red-700 font-bold text-xl">
          Aurel Vlaicu University of Arad, Romania
        </p>
        <p className="text-red-700 font-bold text-md">And</p>
        <p className="text-red-700 font-bold text-xl">
          TECNM INSTITUTO TECNOLOGICO SUPERIOR DE FRESNILLO, Mexico
        </p>
      </div>

      {/* Conference Date */}
      <div className="bg-yellow-300 text-black px-4 py-2 inline-block rounded-md mt-4 font-semibold ">
        Conference Date: 11<sup>th</sup> & 13<sup>th</sup> April, 2026  (Tentative)
      </div>
    </div>
    </div>);
}
