import { useState } from "react";
import Navlist from "./Navlist"; // Import the MenuList component
import { MdOutlineCancel } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white max-w-[1440px] md:px-6 mx-auto py-2 w-full">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="logo.png" alt="logo" className="h-16" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-brown-primary font-semibold text-[16px] leading-[1.8]">
          <Navlist />
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brown-primary hover:text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 right-0 w-full h-full bg-white text-brown-primary font-semibold text-[16px] leading-[1.8] z-50 shadow-lg">
          <div className="flex flex-col items-end bg-white text-black bg-opacity-30 backdrop-blur-lg w-[75%] md:w-[300px] p-4">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brown-primary fixed top-4 right-4 hover:text-black focus:outline-none"
            >
              <MdOutlineCancel size={40} />
            </button>

            {/* Menu List */}
            <ul className="flex flex-col gap-6 mt-12">
              <Navlist />
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
