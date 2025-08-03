import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const menuItems = [
  { label: "HOME", href: "/" },
  { label: "COMMITTEES", href: "#committees", hasDropdown: true },
  { label: "AUTHORS", href: "#authors", hasDropdown: true },
  { label: "PROGRAMS", href: "#programs", hasDropdown: true },
  { label: "AWARDS", href: "#awards" },
  { label: "REGISTRATION", href: "#registration" },
  { label: "SPONSORSHIP", href: "#sponsorship" },
  { label: "IN & AROUND GOA", href: "#goa" },
  { label: "STAY", href: "#stay" },
];


  return (
    <nav className="absolute w-full bg-[#2f6337] top-[190px] text-white font-bold text-sm uppercase tracking-wide">
        <div className=" max-w-screen-xl mx-auto flex justify-center items-center h-[50px] space-x-6 px-4">
          {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center gap-1 cursor-pointer hover:text-yellow-300"
          >
            <span>{item.label}</span>
            {item.hasDropdown && <FaChevronDown className="text-xs mt-[1px]" />}
          </a>
        ))}
        </div>
      </nav>
  );
}
