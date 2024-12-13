import { NavLink } from "react-router-dom";

function PerfectMatch() {
  return (
    <section className="bg-white py-6 ">
      <div className="max-w-[1440px] py-6 px-4  flex flex-col gap-12 justify-center items-center mx-auto w-full md:w-[90%]">
        {/* Title and description */}
        <div className="flex flex-col pt-12 lg:flex-row justify-center items-center gap-8 md:gap-12 text-center lg:text-left">
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
        <div className="flex flex-col lg:flex-row py-2 px-4 items-center rounded-[20px] bg-brown-primary text-white gap-4 md:gap-1">
          <button className="border border-white hover:border-[#f5f5f5] rounded-[20px] px-12  hover:bg-[#4b2e2e] hover:text-[#f5f5f5] hover-styling py-2">
            <NavLink to="/bookings">Book Now</NavLink>
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
        <button className="border border-brown-primary uppercase hover:bg-[#4b2e2e] hover:text-[#f5f5f5] hover-styling text-brown-primary py-2 px-8 lg:px-32 md:px-28 rounded-[10px] text-center md:text-center font-semibold text-base leading-[19.5px]">
          <NavLink to="/bookings">
            CHECK OUT OUR FULL LIST OF BARBERS AND FIND THE PERFECT FIT FOR YOU
            &gt;
          </NavLink>
        </button>
      </div>
    </section>
  );
}

export default PerfectMatch;
