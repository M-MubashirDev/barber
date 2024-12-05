function PerfectMatch() {
  return (
    <section className="bg-white py-6">
      <div className="max-w-[1440px] p-6 flex flex-col gap-12 justify-center items-center mx-auto w-full md:w-[90%]">
        {/* Title and description */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-center md:text-left">
          <div className="text-brown-primary w-full">
            <p className="italic-p">PICK YOUR PERFECT MATCH</p>
            <h1 className="h1-heading">YOUR STYLE, YOUR BARBER</h1>
          </div>
          <p className="md:max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptas sunt praesentium distinctio, harum consequatur tempora
            veniam repudiandae quae sequi, animi doloremque officiis tempore
            possimus expedita deleniti, tenetur optio nulla.
          </p>
        </div>

        {/* Button and description */}
        <div className="flex flex-col md:flex-row py-2 px-4 items-center rounded-[20px] bg-brown-primary text-white gap-4 md:gap-1">
          <button className="border border-white rounded-[20px] px-12 py-2">
            Book Now
          </button>
          <p className="text-center md:text-left">
            To lock in your favorite barber and get ready to turn heads
          </p>
        </div>

        {/* Image and content section */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 items-center md:items-start">
          <img
            src="handsomeMan.png"
            alt="random"
            className="w-full md:w-[40%] object-cover"
          />
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="h1-heading text-brown-primary">
              GET THE LOOK YOU LOVE EVERY TIME
            </h1>
            <p className="md:max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              aliquam laborum aperiam maiores perspiciatis sint natus? Magnam
              ipsa quam tenetur commodi ab illo beatae a? Sed dolorem ab illo
              earum?
            </p>
          </div>
        </div>

        {/* Call to action section */}
        <p className="border border-black py-2 px-8 md:px-32 rounded-[10px] text-center md:text-left">
          CHECK OUT OUR FULL LIST OF BARBERS AND FIND THE PERFECT FIT FOR YOU
        </p>
      </div>
    </section>
  );
}

export default PerfectMatch;
