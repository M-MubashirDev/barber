import { NavLink, useNavigate } from "react-router-dom";

function MenuList({ setIsOpen }) {
  const navigate = useNavigate();
  return (
    <>
      <li onClick={() => (setIsOpen ? setIsOpen(false) : "")}>
        <NavLink className="hover:text-[#322424]" to="/">
          HOME
        </NavLink>
      </li>
      <li onClick={() => (setIsOpen ? setIsOpen(false) : "")}>
        <NavLink className="hover:text-[#322424]" to="about">
          ABOUT US
        </NavLink>
      </li>
      <li onClick={() => (setIsOpen ? setIsOpen(false) : "")}>
        <NavLink
          // onClick={() => (setIsOpen ? setIsOpen(false) : "")}
          className="hover:text-[#322424] "
          to="contact"
        >
          CONTACT US
        </NavLink>
      </li>

      <li onClick={() => (setIsOpen ? setIsOpen(false) : "")}>
        <button
          onClick={() => navigate("/bookings")}
          className="relative font-montserrat  inline-flex items-center justify-center rounded-[10px]  overflow-hidden  tracking-tighter  group border sm:place-self-center lg:place-self-start   border-brown-primary text-[14px] sm:text-[16px] px-2 sm:w-60 md:w-72 h-11 bg-white text-brown-primary hover:bg-[#4b2e2e] hover:shadow-lg !shadow-brown-primary hover:text-white hover-styling"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#4b2e2e]  rounded-full group-hover:w-72 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
          <span className="relative">BOOK AN APPOINTMENT</span>
        </button>
      </li>
    </>
  );
}

export default MenuList;
