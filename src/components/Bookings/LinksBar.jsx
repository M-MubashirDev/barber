import { NavLink, useLocation, useParams } from "react-router-dom";

function LinksBar() {
  const { pathname } = useLocation();
  // console.log(pathname.endsWith("/professional"));
  const { id } = useParams();
  return (
    <ul className="uppercase sm:flex gap-[5px] text-[16px] italic hidden font-medium leading-[19.5px] text-left underline-from-font decoration-skip-none mt-[5%]">
      <li>
        <NavLink
          className={({ isActive }) =>
            `transition-all ${
              isActive && pathname.endsWith("/bookings")
                ? "font-bold italic text-[16px] leading-[19.5px]"
                : "font-medium italic text-[16px] leading-[19.5px]"
            }`
          }
          to="/bookings"
        >
          location &gt;
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `transition-all ${
              isActive && pathname.endsWith("/bookings/professional")
                ? "font-bold italic text-[16px] leading-[19.5px]"
                : "font-medium italic text-[16px] leading-[19.5px]"
            }`
          }
          to="/bookings/professional"
        >
          professional &gt;
        </NavLink>
      </li>
      {/* <button disabled={true}> */}
      <li>
        <NavLink
          className={({ isActive }) =>
            `transition-all 
             ${
               !isActive || !id || !pathname.includes("/bookings/professional")
                 ? "pointer-events-none cursor-not-allowed opacity-50"
                 : ""
             }
             ${
               isActive &&
               pathname.endsWith(`/bookings/professional/services/${id}`)
                 ? "font-bold italic text-[16px] leading-[19.5px]"
                 : "font-medium italic text-[16px] leading-[19.5px]"
             }`
          }
          to={`/bookings/professional/services/${id}`}
        >
          services &gt;
        </NavLink>
      </li>
      {/* </button> */}
      <li>
        <NavLink
          className={({ isActive }) =>
            `transition-all 
                  ${
                    !isActive ||
                    !id ||
                    !pathname.includes(`/bookings/professional/services/${id}`)
                      ? "pointer-events-none cursor-not-allowed opacity-50"
                      : ""
                  }
                  ${
                    isActive &&
                    pathname.endsWith(
                      `/bookings/professional/services/${id}/time`
                    )
                      ? "font-bold italic text-[16px] leading-[19.5px]"
                      : "font-medium italic text-[16px] leading-[19.5px]"
                  }`
          }
          to={`/bookings/professional/services/${id}/time`}
        >
          time
        </NavLink>
      </li>
    </ul>
  );
}

export default LinksBar;

{
  /* <NavLink
            to={item.path}
            className={({ isActive }) =>
              `transition-all ${
                isActive
                  ? "font-bold italic text-[16px] leading-[19.5px]"
                  : "font-medium italic text-[16px] leading-[19.5px]"
              }` */
}
