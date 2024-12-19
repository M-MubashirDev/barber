import { NavLink, useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section
      style={{
        backgroundImage: "url('heroBack.webp')",
        minHeight: "calc(90vh - 150px)",
      }} // Ensure the URL is correct
      className="bg-no-repeat flex flex-col text-center px-4  justify-center bg-cover bg-center "
    >
      <div className="max-w-[1440px]  mx-auto w-[90%] text-white flex flex-col justify-center  sm:items-center  md:items-start h-full space-y-6 mb-12">
        <h1 className="font-montserrat  lg:text-start sm:text-[40px] text-[32px] md:text-[60px] lg:text-[75px] font-black leading-tight">
          GET THE HAIR CUT&ensp;
          <span className="lg:block">THAT TURNS HEADS</span>
        </h1>
        <hr className="border-t   w-100% md:place-self-center lg:place-self-start md:w-[80%] lg:w-[53%] " />
        <p className="font-[600px] font-roboto py-2  sm:text-center sm:place-self-center lg:place-self-start  text-[16px] sm:text-[20-px] md:text-2xl leading-[28.13px]">
          Pick The Barber Who Gets Your Look And Book Your Spot Today
        </p>
        <button
          onClick={() => navigate("/bookings")}
          className="relative inline-flex items-center justify-center  overflow-hidden  font-medium tracking-tighter  group border sm:place-self-center lg:place-self-start   border-brown-primary rounded-[10px] text-[14px] sm:text-[16px] w-50 sm:w-60  lg:w-72 h-11 bg-brown-primary text-white hover:bg-[#4b2e2e] hover:shadow-lg shadow-brown-primary hover:text-white hover-styling"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#4b2e2e]  rounded-full group-hover:w-72 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative">BOOK AN APPOINTMENT</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
