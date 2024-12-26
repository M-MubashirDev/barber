function Testimonial() {
  return (
    <section className="py-12 px-4  bg-brown-primary">
      <div className="max-w-[1440px]  mx-auto w-[90%]">
        <h3 className="h1-heading text-white mb-1 text-center">
          A Barbershop That Feels Like Home
        </h3>
        <p className="primary-p text-white container w-[80%] mt-3 mx-auto mb-8 text-center ">
          Ever walked into a place and felt it was made just for you? That’s our
          vibe. From the friendly banter to the perfect playlist, we make your
          time in the chair more than a service—it’s a break from the world.
        </p>
        <h2 className="text-white lg:mt-16 md:mt-10 sm:mt-8  sm:text-2xl md:text-3xl text-center font-bold text-[32px] leading-[39.01px] mb-4">
          WHAT CLIENTS SAY
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Top Row Testimonials */}
          <div className="bg-white p-6 rounded-lg shadow-md text-left flex flex-col ">
            <p className="text-[#4F4F4F] primary-p mb-6">
              &quot;The team went above and beyond to ensure my issue was
              resolved quickly and efficiently. Truly outstanding!&quot;
            </p>
            <div className="mt-auto">
              <p className="font-extrabold text-[20px] leading-[24.38px] text-[#4F4F4F]">
                Jessica Devis
              </p>
              <p className="text-[#4F4F4F] primary-p">
                Full Stack Developer @Netflix
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-left flex flex-col">
            <p className="text-[#4F4F4F] primary-p mb-6">
              &quot;It have broadened my horizons and helped me advance my
              career. The community is incredibly supportive.&quot;
            </p>
            <div className="mt-auto">
              <p className="font-extrabold text-[20px] leading-[24.38px] text-[#4F4F4F]">
                Marcell Glock
              </p>
              <p className="text-[#4F4F4F] primary-p">
                Graphic Designer @Coinbase
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-left flex flex-col">
            <p className="text-[#4F4F4F] primary-p mb-6">
              &quot;Its intuitive design and powerful features make it
              indispensable. I cant imagine going back to life before it!&quot;
            </p>
            <div className="mt-auto">
              <p className="font-extrabold text-[20px] leading-[24.38px] text-[#4F4F4F]">
                Emma Roberts
              </p>
              <p className="text-[#4F4F4F] primary-p">
                Chief Executive @Spotify
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
