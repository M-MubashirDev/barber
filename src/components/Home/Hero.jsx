import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('heroBack.webp')",
        minHeight: "calc(90vh - 150px)",
      }} // Ensure the URL is correct
      className="bg-no-repeat flex flex-col text-center justify-center bg-cover bg-center "
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
        <button className="border sm:place-self-center lg:place-self-start  font-roboto font-semibold border-brown-primary rounded-[10px] text-[14px] sm:text-[16px] px-12 py-2 bg-brown-primary text-white hover:bg-[#4b2e2e] hover:text-[#f5f5f5] hover-styling">
          <NavLink to="/bookings">BOOK AN APPOINTMENT</NavLink>
        </button>
      </div>
    </section>
  );
}

export default Hero;
