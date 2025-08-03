import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  { label: "HOME", href: "#home" },
  {
    label: "COMMITTEES",
    href: "#committees",
    hasDropdown: true,
    subItems: ["Technical", "Organizing", "Advisory"],
  },
  {
    label: "AUTHORS",
    href: "#authors",
    hasDropdown: true,
    subItems: ["Call for Papers", "Guidelines", "Templates"],
  },
  {
    label: "PROGRAMS",
    href: "#programs",
    hasDropdown: true,
    subItems: ["Keynotes", "Schedule", "Workshops"],
  },
  { label: "AWARDS", href: "#awards" },
  { label: "REGISTRATION", href: "#registration" },
  { label: "SPONSORSHIP", href: "#sponsorship" },
  { label: "IN & AROUND GOA", href: "#goa" },
  { label: "STAY", href: "#stay" },
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
            <Link to="/" className="flex items-center">
              <img
                src="https://csjmu.ac.in//wp-content/themes/csjmutheme/imgs-copyrighted/csjmu-logo-main.png"
                className="mr-3 h-12"
                alt="Logo"
              />
            </Link>

            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center lg:order-2 space-x-2">
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2"
              >
                Get started
              </Link>
            </div>

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
      <nav className="sticky top-0 z-50 bg-[#C21717] text-[#FEFBFB] font-bold text-sm uppercase tracking-wide">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Desktop navbar */}
          
            {/* Desktop navbar */}
            <div className="hidden lg:flex justify-center items-center h-[50px] space-x-6">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group cursor-pointer">
                  {/* Menu item */}
                  <div className="flex items-center gap-1 hover:text-yellow-300">
                    <a href={item.href}>{item.label}</a>
                    {item.hasDropdown && <FaChevronDown className="text-xs mt-[1px]" />}
                  </div>
            
                  {/* Desktop dropdown - fixed part */}
                  {item.hasDropdown && (
                    <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col bg-[#C21717] text-white rounded shadow-lg z-50 min-w-[200px]">
                      {item.subItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
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
