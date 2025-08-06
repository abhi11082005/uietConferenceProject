import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import icraecct from "../assets/icraecct.png";
import naaclogo from "../assets/naaclogo.jpg";

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT CONFERENCE", href: "/about" },
  { label: "SPEAKERS", href: "/speakers" },
  {
    label: "COMMITTEES", 
    href: "/advisory-committee",
    hasDropdown: true,
    subItems: ["steering committee", "advisory committee", " technical program committee"],
  },
  { label: "CONTACT", href: "/contact" },
  { label: "IMPORTANT DATES", href: "/important-dates" },
  { label: "SUBMISSION GUIDELINES", href: "/submission-guidelines" },
  { label: "PUBLICATION", href: "/publication" },
  { label: "IN AND AROUND KANPUR", href: "/kanpur" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
      {/* Top white header */}
      <header className="shadow w-full z-40 bg-white">
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5 flex justify-between items-center">
          <div className="flex justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center ">
              <img
                src="https://csjmu.ac.in//wp-content/themes/csjmutheme/imgs-copyrighted/csjmu-logo-main.png"
                className="mr-3 h-20"
                alt="Logo"
              />
            </Link>
            <Link to="/" className="flex items-center">
              <img
                src={icraecct}
                className="mr-3 h-20"
                alt="Logo"
              />
            </Link>
            <div className="text-center space-y-1">
              <h2 className="text-xl md:text-2xl font-bold text-black">
                Chhatrapati Shahu Ji Maharaj University, Kanpur
              </h2>
              <p className="text-sm md:text-base text-gray-600 italic">
                Uttar Pradesh State University (Formerly Kanpur University, Kanpur)
              </p>
              <span className="inline-block bg-red-700 text-white text-xs font-bold px-3 py-1 rounded">
                UGC Category - I
              </span>
            </div>

            <Link to="/" className="flex items-center">
              <img
                src={naaclogo}
                className="mr-3 h-20"
                alt="Logo"
              />
            </Link>

            {/* Desktop buttons */}
            

            {/* Mobile hamburger */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl text-gray-700 focus:outline-none"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Sticky red nav */}
      <nav className="sticky top-0 z-50 bg-[#1B305C] text-[#FEFBFB] font-bold text-sm uppercase tracking-wide">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Desktop navbar */}
          
            {/* Desktop navbar */}
            <div className="hidden lg:flex justify-center items-center h-[50px] space-x-6">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group cursor-pointer ">
                  {/* Menu item */}
                  <div className="flex items-center gap-1 hover:text-yellow-300">
                    <a href={item.href}>{item.label}</a>
                    {item.hasDropdown && <FaChevronDown className="text-xs mt-[1px]" />}
                  </div>
            
                  {/* Desktop dropdown - fixed part */}
                  {item.hasDropdown && (
                    <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col bg-[#1B305C] text-white rounded shadow-lg z-50 min-w-[200px]">
                      {item.subItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.trim().toLowerCase().replace(/\s+/g, "-")}
                          className=" px-4 py-2 text-sm hover:text-yellow-300"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>



          {/* Mobile navbar (when menuOpen is true) */}
          {menuOpen && (
            <div className="lg:hidden py-3 space-y-2">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-white/30 pb-2">
                  <div
                    className="flex items-center justify-between text-white hover:text-yellow-300"
                    onClick={() =>
                      item.hasDropdown ? toggleDropdown(index) : setMenuOpen(false)
                    }
                  >
                    <a href={item.href}>{item.label}</a>
                    {item.hasDropdown && (
                      <FaChevronDown
                        className={`text-xs transition-transform duration-300 ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Mobile dropdown items */}
                  {item.hasDropdown && openDropdown === index && (
                    <div className="mt-2 pl-4 space-y-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          onClick={() => setMenuOpen(false)}
                          className="block text-sm text-white hover:text-yellow-300"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
