export default function HeroSection() {
  return (
    <div className="bg-white py-10  text-center text-black border-b shadow-sm">
      <h1 className="text-2xl font-bold uppercase ">
        Second International Conference on Recent Advances in Emerging Computing and Communication 
      </h1>
      <p className="text-red-600 font-semibold mt-1">(ICRAECCT) – 2026 Hybrid Mode</p>
      <p className="mt-2 font-medium">
        Jointly organized by:
        <br />
        Department of Computer Application, CSE, ECE, UIET, CSJMU Kanpur
      </p>
      
      <div className="mt-4 text-red-600 font-bold">Online Presentation Allowed!!</div>
      


      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6 bg-white text-center">
      {/* Title */}
      <div className="border p-4 rounded-md">
        <h1 className="text-2xl md:text-3xl font-bold">
          Technologies for A Sustainable Future
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-red-600 mt-1">
          (ICRAECTSF) - 2026 Hybrid Mode
        </h2>
      </div>

      {/* Organizers */}
      <div className="text-blue-900 font-bold rounded-md">
        <p>Jointly organized by:</p>
      </div>

      {/* Departments */}
      <div className="border p-4 text-left space-y-1 rounded-md">
        <ul className="list-disc list-inside text-[1rem] text-gray-800">
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
      <div className="border rounded-md p-4 space-y-2">
        <h3 className="text-lg font-bold text-red-700">
          Chhatrapati Shahu Ji Maharaj University, Kanpur (Venue Partner)
        </h3>
        <p className="text-gray-700 text-sm">UGC Category - I</p>
        <p className="text-gray-700 text-sm">
          Uttar Pradesh State University (Formerly Kanpur University, Kanpur, India)
        </p>
        <p className="text-red-600 font-semibold text-sm">in Association with</p>
        <p className="text-red-700 font-bold text-sm">
          Aurel Vlaicu University of Arad, Romania
        </p>
        <p className="text-red-700 font-bold text-sm">And</p>
        <p className="text-red-700 font-bold text-sm">
          TECNM INSTITUTO TECNOLOGICO SUPERIOR DE FRESNILLO, Mexico
        </p>
      </div>

      {/* Conference Date */}
      <div className="bg-yellow-300 text-black px-4 py-2 inline-block rounded-md mt-4 font-semibold ">
        Conference Date: 11<sup>th</sup> & 12<sup>th</sup> April, 2025
      </div>
    </div>
    </div>);
}
