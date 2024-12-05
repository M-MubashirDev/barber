function Testimonial() {
  return (
    <section className="py-12 px-4  bg-brown-primary">
      <h3 className="text-2xl sm:text-[40px] font-bold text-white mb-1 text-center text-">
        HERE IS WHAT OUR COSTUMER SAYS
      </h3>
      <p className="text-base sm:text-lg font-medium text-[#FFF] container w-[80%] mt-3 mx-auto mb-8 text-center ">
        Ever walked into a place and felt it was made just for you? That’s our
        vibe. From the friendly banter to the perfect playlist, we make your
        time in the chair more than a service—it’s a break from the world.
      </p>
      <h2 className="text-white sm:text-2xl md:text-3xl text-center mb-4">
        What Clients Say
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Top Row Testimonials */}
        <div className="bg-white p-6 rounded-lg shadow-md text-left flex flex-col">
          <p className="text-gray-700 font-medium mb-6">
            The team went above and beyond to ensure my issue was resolved
            quickly and efficiently. Truly outstanding!
          </p>
          <div className="mt-auto">
            <p className="text-gray-800 font-semibold">Jessica Devis</p>
            <p className="text-sm text-gray-500">
              Full Stack Developer @Netflix
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-left flex flex-col">
          <p className="text-gray-700 font-medium mb-6">
            It have broadened my horizons and helped me advance my career. The
            community is incredibly supportive.
          </p>
          <div className="mt-auto">
            <p className="text-gray-800 font-semibold">Marcell Glock</p>
            <p className="text-sm text-gray-500">Graphic Designer @Coinbase</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-left flex flex-col">
          <p className="text-gray-700 font-medium mb-6">
            Its intuitive design and powerful features make it indispensable. I
            cant imagine going back to life before it!
          </p>
          <div className="mt-auto">
            <p className="text-gray-800 font-semibold">Emma Roberts</p>
            <p className="text-sm text-gray-500">Chief Executive @Spotify</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
