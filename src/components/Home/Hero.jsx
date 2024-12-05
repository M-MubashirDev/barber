function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('heroBack.png')",
        minHeight: "calc(90vh - 150px)",
      }} // Ensure the URL is correct
      className="bg-no-repeat flex flex-col text-center justify-center bg-cover bg-center "
    >
      <div className="max-w-[1440px] mx-auto w-[90%] text-white flex flex-col justify-center  sm:items-center  md:items-start h-full space-y-6 mb-12">
        <h1 className="font-montserrat text-6xl font-black leading-tight">
          GET THE HAIR CUT
          <br />
          THAT TURNS HEADS
        </h1>
        <hr className="border-t white-black w-100% md:w-[40%] " />
        <p className="font-[600px] py-2 text-2xl leading-7">
          Pick The Barber Who Gets Your Look And Book Your Spot Today
        </p>
        <button className="border font-[600px] border-brown-primary rounded-[10px]  px-12 py-2 bg-brown-primary text-white hover:bg-[#6a4b4b] transition-colors">
          BOOK AN APPOINTMENT
        </button>
      </div>
    </section>
  );
}

export default Hero;
