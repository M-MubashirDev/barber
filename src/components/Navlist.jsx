import { NavLink } from "react-router-dom";

function MenuList() {
  return (
    <>
      <li>
        <NavLink className="hover:text-[#52393989]" to="/">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#523939cd]" to="about">
          ABOUT US
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#523939cd]" to="contact">
          CONTACT US
        </NavLink>
      </li>
      <li className="font-montserrat border-[0.5px] border-brown-primary rounded-[10px] py-1 px-10 ">
        <NavLink className="hover:text-[#523939cd]" to="bookings">
          BOOK AN APPOINTMENT
        </NavLink>
      </li>
    </>
  );
}

export default MenuList;
