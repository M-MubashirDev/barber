import { useNavigate } from "react-router-dom";

function Location() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: "url('locationbg.webp')",
        minHeight: "calc(100vh - 82.8px)",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
      className="bg-no-repeat flex flex-col text-center lg:text-start text-white shadow-[inset_0_-100px_50px_0px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-full mx-auto mt-[5%] flex flex-col items-center lg:items-start w-[90%]">
        <p className="leading-[39.01px] md:font-[500] text-[24px] sm:text-[29px] md:text-[32px]">
          BOOKING PAGE
        </p>
        <h1 className="text-[48px] sm:text-[54px] md:text-[64px] leading-[78.02px] font-[500] md:font-[700]">
          LOCK IN YOUR LOOK
        </h1>
        <p className="text-[18px] sm:text-[20px] mb-14 mt-12 md:mt-0 md:mb-12">
          Let’s face it—clean matters. We’ve raised the bar on hygiene, ensuring{" "}
          <span className="md:block">
            every tool, station, and surface sparkles like your fresh fade.
          </span>
        </p>
        <h2 className="font-[500] md:font-extrabold uppercase text-[36px] sm:text-[38px] md:text-[40px] md:mb-2 mb-6 leading-[48.76px]">
          Choose Your Location
        </h2>
        <button
          onClick={() => navigate("professional")}
          className="relative font-semibold uppercase md:text-[28px] text-[20px] sm:text-[22px] lg:text-[32px] max-w-fit p-6 mb-4 md:py-6 md:px-28 bg-brown-primary leading-[37.5px] rounded-[20px] text-white overflow-hidden group hover:!shadow-brown-primary"
        >
          {/* Expanding Background Effect */}
          <span className="absolute top-1/2 left-1/2 w-0 h-0 transition-all duration-700 ease-out bg-[#4b2e2e] rounded-full group-hover:w-[300%] group-hover:h-[300%] transform -translate-x-1/2 -translate-y-1/2"></span>
          {/* Text Content */}
          <span className="relative z-10">
            220 N Walnut St <span className="lg:block">Bloomington, IN</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Location;
