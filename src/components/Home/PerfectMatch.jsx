import { useNavigate } from "react-router-dom";

function PerfectMatch() {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-6 ">
      <div className="max-w-[1440px] py-6 px-4  flex flex-col gap-12 justify-center items-center mx-auto w-full md:w-[90%]">
        {/* Title and description */}
        <div className="flex flex-col pt-12 lg:flex-row justify-center items-center gap-5 md:gap-8 lg:gap-12 text-center lg:text-left">
          <div className="text-brown-primary w-full">
            <p className="italic-p">PICK YOUR PERFECT MATCH</p>
            <h1 className="h1-heading">YOUR STYLE, YOUR BARBER</h1>
          </div>
          <p className="lg:max-w-[50%] primary-p">
            Why settle for whoever’s available? Here, it’s personal. Browse our
            roster of skilled barbers, each with a signature style and a knack
            for perfection. Choose your pro, book your spot, and watch your
            vision come to life.
          </p>
        </div>

        {/* Button and description */}
        <div className="flex flex-col  lg:flex-row   py-4 px-3 lg:py-2 lg:px-2 pl-1 pr-3 items-center rounded-[20px] bg-brown-primary text-white gap-4 md:gap-1">
          {/* <button
            onClick={() => navigate("/bookings")}
            className="border  border-white hover:border-[#f5f5f5] hover:font-[570px] rounded-[15px] mr-1 px-12  hover:bg-[#4b2e2e]  hover-styling py-2"
          >
            Book Now
          </button> */}
          <button
            onClick={() => navigate("/bookings")}
            className="relative font-montserrat  inline-flex items-center justify-center  overflow-hidden mr-1 tracking-tighter  group  sm:place-self-center lg:place-self-start    text-[14px] sm:text-[16px] w-[12rem] h-11 bg-brown-primary text-white hover:bg-[#4b2e2e]   hover-styling border rounded-[15px]  border-white"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#4b2e2e]  rounded-full group-hover:w-72 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
            <span className="relative"> Book Now</span>
          </button>
          <p className="text-center  md:text-left">
            To lock in your favorite barber and get ready to turn heads
          </p>
        </div>

        {/* Image and content section */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 md:gap-12 items-center md:items-start">
          <img
            src="handsomeMan.webp"
            alt="Handsome man getting a haircut"
            className="w-full  object-cover"
          />
          {/* //change */}
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h1 className="h1-heading text-brown-primary">
              GET THE LOOK YOU LOVE <span className="lg:block">EVERY TIME</span>
            </h1>
            <p className=" primary-p">
              Every cut tells a story, and we’re here to make sure yours stands
              out. Whether you’re here for a fresh fade, a crisp beard trim, a
              quick buzz, or even a first haircut for your little one, we’ve got
              you covered.
            </p>
          </div>
        </div>

        {/* Call to action section */}
        <button
          onClick={() => navigate("/bookings")}
          className="border border-brown-primary uppercase 
         hover:bg-[#4b2e2e] hover:text-[#f5f5f5] 
         text-brown-primary 
         py-2 px-8 lg:px-32 md:px-28 
         rounded-[10px] text-center font-semibold 
         text-base leading-[19.5px] 
        "
        >
          CHECK OUT OUR FULL LIST OF BARBERS AND FIND THE PERFECT FIT FOR YOU
          --&gt;
        </button>
        {/* <button
          onClick={() => navigate("/bookings")}
          className="relative mx-auto flex items-center justify-center overflow-hidden tracking-tighter group sm:place-self-center text-[16px] sm:text-[16px] w-[12rem] h-10 bg-white leading-[19.5px] border border-brown-primary uppercase 
  hover:bg-[#4b2e2e] hover:text-[#f5f5f5] text-brown-primary 
    lg:w-[70%]  text-center font-semibold rounded-[10px] transition-all duration-500 ease-out"
        >
          <span className="absolute w-0 h-0 transition-all duration-[750ms] ease-in-out bg-[#4b2e2e] rounded-full group-hover:w-72 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
          <span className="relative z-10">
            CHECK OUT OUR FULL LIST OF BARBERS AND FIND THE PERFECT FIT FOR YOU
            --&gt;
          </span>
        </button> */}
      </div>
    </section>
  );
}

export default PerfectMatch;
