import { useNavigate } from "react-router-dom";

function Location() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: "url('locationbg.png')",
        minHeight: "calc(100vh - 82.8px)",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
      className="bg-no-repeat flex flex-col text-center md:text-start text-white shadow-[inset_0_-100px_50px_0px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-full mx-auto mt-[5%] flex flex-col items-center md:items-start w-[90%]">
        <p className="leading-[39.01px] md:font-[500] text-[29px] md:text-[32px]">
          BOOKING PAGE
        </p>
        <h1 className="text-[58px] md:text-[64px] leading-[78.02px] font-[500] md:font-[700]">
          LOCK IN YOUR LOOK
        </h1>
        <p className="text-[20px] mb-14 mt-16 md:mt-0 md:mb-12">
          Let’s face it—clean matters. We’ve raised the bar on hygiene, ensuring{" "}
          <span className="md:block">
            every tool, station, and surface sparkles like your fresh fade.
          </span>
        </p>
        <h2 className="font-[500] md:font-extrabold uppercase text-[40px] md:mb-2 mb-8 leading-[48.76px]">
          Choose Your Location
        </h2>
        <button
          onClick={() => navigate("professional")}
          className="font-semibold uppercase text-[32px] max-w-fit p-6   md:py-6 md:px-28 bg-brown-primary leading-[37.5px] rounded-[20px]"
        >
          220 N Walnut St <br /> Bloomington, IN
        </button>
      </div>
    </div>
  );
}

export default Location;
