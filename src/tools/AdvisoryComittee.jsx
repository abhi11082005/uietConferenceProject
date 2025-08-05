import React from "react";

export default function AdvisoryCommittee() {
  return (
    <div className="relative  text-white min-h-screen p-8">
      {/* Committee Title */}
      <div className="relative w-full h-[300px] overflow-hidden">
  {/* Background video */}
  <video
    autoPlay
    muted
    loop
    className="absolute w-full h-full object-cover"
    src="https://res.cloudinary.com/djasn9mmy/video/upload/samples/elephants.mp4"
  />

  {/* Overlay for text */}
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <h1 className="text-white text-4xl font-extrabold tracking-wide uppercase text-center">
      Advisory Committee
    </h1>
  </div>
</div>


     
      
      {/* Main Content */}
    <div className="bg-white text-black rounded-lg shadow-md p-10">
      {/* INTERNATIONAL ADVISORY COMMITTEE: */}
      <h2 className="text-2xl font-semibold mb-6">INTERNATIONAL ADVISORY COMMITTEE:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
      ["Prof (Dr.) Valentina Emilia Balas", "Aurel Vlaicu University of Arad / Academy of Romanian Scientists, ROMANIA"],
      ["Prof. Simanta Mitra", "Iowa State University, USA"],
      ["Prof. (Dr.) Marius M. Balas", "Aurel Vlaicu University of Arad, Romania"],
      ["Prof. Syed Akhter Hossain", "Faculty of Science & Information Technology (FSIT), Daffodil International University (DIU), Bangladesh"],
      ["Prof (Dr.) Sergei Levashkin", "Artificial Intelligence Research Lab, Povolzhskiy State University of Telecommunications and Informatics, Russia"],
      ["Dr. Hari Mohan Pandey", "Computer Science Department (Data Science and AI), Bournemouth University, UK"],
      ["Dr. Muhammad Anshari bin Ali", "Universiti Brunei Darussalam, Brunei"],
      ["Dr. Flavius Petcut", "Aurel Vlaicu University of Arad, Romania"],
      ["Dr. Hameed Mutlag Farhan", "Altinbas University, Turkey"],
      ["Dr. Badria Sulaiman Alfurhood", "Department of Computer Sciences, College of Computer and Information Sciences, Princess Nourah bint Abdulrahman University, Saudi Arabia"],
      ["Dr. Vinayakumar Ravi", "Center for Artificial Intelligence, Prince Mohammad Bin Fahd University, Khobar, Saudi Arabia"],
      ["Dr. Naqqash Dilshad", "College of AI Convergence, Department of Computer Science and Engineering, Sejong University, South Korea"],
      ["Dr. Mukhalad Al-nasrwai", "Melbourne Victoria, Australia"],
      ["Yasmin Makki Mohialden", "Computer Science Department, College of Science, Mustansiriyah University, Baghdad-Iraq"],
      ["Dr. Haider M. Al-Juboori", "Dept. of Electronics Engineering and Communications, Faculty of Engineering & Built Environment, South East Technological University, Ireland"],
      ["Dr. Nahed Tawfik", "Computers and Systems Department, Electronics Research Institute, Cairo, Egypt"],
      ["Dr. Nuno Mateus-Coelho", "Lusófona University, Porto, Portugal"],
      ["Dr. Parvez Ali", "Qassim University, Unaizah, Saudi Arabia"],
      ["Dr. Hari Mohan Gaur", "Frankfurt Institute for Advanced Studies, Goethe-University Frankfurt, Germany"],
      ["Dr. Rajeev Kumar Shakya", "Department of Electronics and Communication Engineering, Adama Science and Technology University, Ethiopia"],
      ["Dr. Dzati Athiar Ramli", "School of Electrical & Electronic Engineering, Universiti Sains, Malaysia"],
      ["Dr. Ali Guma", "MUNI University, Uganda"],
      ["Dr. Cornel Barna", "Aurel Vlaicu University of Arad, Romania"],
      ["Dr. Vinay Kumar Kasula", "Department of Information Technology, University of the Cumberlands, Williamsburg, USA"],
      ["Dr. Vitri Tundjungsari", "Computer Science Department, Esa Unggul University Jakarta, Indonesia"],
      ["Rajasekhar Chaganti", "University of Texas at San Antonio"],
      ["Dr. Tim Seleznev", "Far Eastern Federal University, Russia"],
      ["Mr. Ibrahim Hayatu Hassan", "Ahmadu Bello University, Nigeria"],
        ].map(([name, affiliation], idx) => (
          <div key={idx} onClick={() => console.log(`${name} clicked`)} // Replace with your action
          className="cursor-pointer bg-yellow-800 text-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-[1.02] active:scale-[0.98]">
            <h3 className="text-lg font-bold">{name}</h3>
            <p>({affiliation})</p>
          </div>
        ))}
      </div>
  

  {/* NATIONAL ADVISORY COMMITTEE: */}
  <h2 className="text-2xl font-semibold mt-12 mb-6">NATIONAL ADVISORY COMMITTEE:</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
  ["Prof. (Dr.) Phalguni Gupta", "Vice Chancellor, GLA University, Mathura"],
  ["Prof. (Dr.) Pabitra Mitra", "IIT Kharagpur, India"],
  ["Prof. (Dr.) Surya Prakash", "IIT Indore, India"],
  ["Prof. (Dr.) Rajeev Srivastava", "IIT BHU"],
  ["Prof. (Dr.) Arpan Kumar Kar", "Professor, IIT Delhi"],
  ["Prof. (Dr.) Prabodh Bajpai", "IIT Kanpur"],
  ["Prof. (Dr.) Vineet Kansal", "IET Lucknow, India"],
  ["Prof. (Dr.) Manish Gaur", "IIIT Una, India"],
  ["Dr. Ankush Sharma", "IIT Kanpur"],
  ["Dr. Vipul Arora", "IIT Kanpur"],
  ["Dr. Ruchir Gupta", "IIT BHU"],
  ["Dr. Praveen Tripathi", "IIT Guwahati"],
  ["Dr. Raghvendra Kumar Chaudhary", "IIT Kanpur, India"],
  ["Dr. Anshul Verma", "IIT BHU"],
  ["Dr. Durgesh Singh", "IIIT Jabalpur, M.P. India"],
  ["Prof. (Dr.) Brijesh Kumar", "Indira Gandhi Delhi Technical University For Women, Delhi"],
  ["Prof. (Dr.) Ravinder Singh Sawhney", "Guru Nanak Dev University, Amritsar, Punjab, India"],
  ["Prof. (Dr.) Vishal Singh Chandel", "Rajkiya Engineering College, Ambedkar Nagar, U.P. India"],
  ["Prof. (Dr.) Ashok Kumar Shankhwa", "Harcourt Butler Technical University, India"],
  ["Prof. (Dr.) M Hima Bindu", "Department of Computer Science and Applications, North Orissa University, India"],
  ["Prof. (Dr.) Deepa Raj", "School of Information Science and Technology, BBAU Lucknow (A Central University)"],
  ["Dr. Ravindra Nath Katiyar", "BBAU Lucknow (A Central University)"],
  ["Prof. (Dr.) Ajai Jain", "Institute of Engineering and Technology, JK Lakshmipat University, Jaipur"],
  ["Prof. (Dr.) Renu Jain", "Institute of Engineering and Technology, JK Lakshmipat University, Jaipur"],
  ["Prof. (Dr.) R. K. Dwivedi", "Director, Teerthanker Mahaveer University, Moradabad"],
  ["Prof. (Dr.) Brijesh Kumar", "Professor & Director (Planning), IGDTUW, Delhi"],
  ["Dr. Abhay Srivastava", "Space & Atmospheric Science Division (SASD), NESAC, Department of Space, Govt. of India, Meghalaya"],
  ["Dr. Anand Handa", "C3i Hub, IIT Kanpur"],
  ["Prof. (Dr.) Prashant Kumar Mishra", "Pranveer Singh Institute of Technology, Kanpur"],
  ["Prof. (Dr.) Manoj Diwakar", "Graphic Era Deemed to be University, India"],
  ["Dr. Pramod Kumar Yadav", "National Institute of Technology, Srinagar"],
  ["Dr. Deepak Gupta", "MNNIT Allahabad, India"],
  ["Mr. Kural", "Chief Scientist, Central Drug Research Institute, Lucknow, India"],
  ["Dr. Shrawan Kumar", "Indira Gandhi National Tribal University, Regional Campus, Manipur, India"],
  ["Dr. Manoj Kumar Misra", "Director, Allenhouse Institute of Technology, Kanpur"],
  ["Dr. Shrawan Trivedi", "Rajiv Gandhi Institute of Petroleum Technology, Amethi, India"],
  ["Dr. Ajay Narayan Shukla", "Graphic Era Hill University, Dehradun"]
    ].map(([name, affiliation], idx) => (
      <div key={idx} className="bg-yellow-800 text-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-bold">{name}</h3>
        <p>({affiliation})</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
