import { NavLink, useNavigate } from "react-router-dom";

function Footer({ children }) {
  return (
    <div className="max-w-[1440px] flex flex-col justify-center lg:pb-16  items-center text-center gap-4 pt-16 mx-auto w-[90%]">
      {children}
    </div>
  );
}

function Logo({ logo }) {
  return <img src={`${logo}`} className=" max-w-[50px]" alt="footer img" />;
}

function Heads({ children }) {
  return (
    // <h1 className="h1-heading text-brown-primary text-2xl sm:text-3xl lg:text-4xl max-w-2xl mx-auto">
    <h1 className="h1-heading  text-brown-primary ">{children}</h1>
  );
}

function Para({ children }) {
  return (
    // <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto">
    <p className="primary-p max-w-3xl mx-auto">{children}</p>
  );
}
function Button({ children }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/bookings")}
      className="relative sm:font-[600] font-[500] px-4 py-2 sm:px-8 sm:py-0 leading-[19.5px] text-white rounded-[8px] hover-white bg-brown-primary text-[12px] sm:text-[14px] md:text-[16px] min-h-12 md:min-w-[70%] overflow-hidden group shadow-md"
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-72 group-hover:h-56"></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
      <span className="relative z-10">{children} &gt;</span>
    </button>
  );
}

Footer.Logo = Logo;
Footer.Heads = Heads;
Footer.Para = Para;
Footer.Button = Button;

export default Footer;
