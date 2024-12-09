import { NavLink } from "react-router-dom";

function LinksBar() {
  return (
    <ul className="uppercase sm:flex gap-[5px] text-[16px] italic hidden font-medium leading-[19.5px] text-left underline-from-font decoration-skip-none mt-[5%]">
      {[
        { path: "/bookings", label: "location >" },
        { path: "/bookings/professional", label: "professional >" },
        { path: "/bookings/professional/services", label: "services >" },
        { path: "/bookings/professional/services/time", label: "time" },
      ].map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `transition-all ${
                isActive
                  ? "font-bold italic text-[16px] leading-[19.5px]"
                  : "font-medium italic text-[16px] leading-[19.5px]"
              }`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default LinksBar;
