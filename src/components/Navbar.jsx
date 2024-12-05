import { useState } from "react";
import Navlist from "./Navlist"; // Import the Navlist component
import { MdOutlineCancel } from "react-icons/md";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  console.log(location);
  return (
    <nav className="text-white max-w-[1440px] mx-auto py-5 w-full ">
      <div
        className={`max-w-7xl mx-auto px-4 flex ${
          pathname.includes("/bookings")
            ? "justify-end py-2"
            : "justify-between"
        } items-center`}
      >
        {/* Logo */}
        <div
          className={`flex ${
            pathname.includes("/bookings") && "hidden"
          } items-center`}
        >
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
        <div className="md:hidden fixed top-0 left-0 w-full h-full text-brown-primary font-bold z-50">
          <div className="flex flex-col items-center bg-white bg-opacity-80 backdrop-blur-lg p-6 w-full h-full">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-brown-primary hover:text-black focus:outline-none"
            >
              <MdOutlineCancel size={40} />
            </button>

            {/* Menu List */}
            <ul className="flex flex-col items-center gap-8 mt-12">
              <Navlist />
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
// function NavBarDesktopLinks() {
//   return (
//     <>
//       {" "}
//       <ul className="hidden md:flex items-center space-x-8 text-brown-primary font-semibold text-[16px] leading-[1.8]">
//         <Navlist />
//       </ul>
//     </>
//   );
// }
// function NavBarLogo() {}
export default Navbar;
//
