import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <section
        style={{
          backgroundImage: "url('heroBack.png')",
          minHeight: "calc(90vh - 150px)",
        }} // Ensure the URL is correct
        className="bg-no-repeat flex flex-col justify-center bg-cover bg-center "
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
          <button className="border font-[600px] border-[#523939] rounded-[10px]  px-12 py-2 bg-[#523939] text-white hover:bg-[#6a4b4b] transition-colors">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </section>
      <section className="bg-[#523939] p-4  pb-8 ">
        <div className="flex flex-col min-h-fit max-w-[1440px] mx-auto w-[90%]  gap-8 lg:gap-2">
          <div className="bg-white md:max-w-[70%] rounded-[20px] max-w-fit  max-h-fit   p-4  self-center justify-self-center lg:translate-y-[-50%]   ">
            <blockquote className="flex flex-col gap-3 text-2xl border-l-8 border-[#523939] pl-2 leading-relaxed   font-montserrat font-normal text-black ">
              From the moment I walked in, the Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Reiciendis iusto id aliquid suscipit
              nt sequi iste, vitae magnam et quam ipsam. Saepe, asdsddd das asd
              deserunt!
              <br />
              <cite>__Steve Jobs</cite>
            </blockquote>
          </div>
          <div className="flex flex-col lg:flex-row lg:mt-[-4rem] items-center justify-center font-montserrat bg-white ">
            <img
              src="hairstyles.png"
              className="lg:max-w-[40%] w-min"
              alt="logo styles"
            />
            <div className="ml-8 p-6">
              <div className="text-[#523939]  ">
                <p className="italic-p">WHERE EVERY CUT TELLS A STORY</p>
                <h1 className=" border-[#523939] h1-heading inline-block  mb-6 pb-4 border-b-[5px]   ">
                  STEP INTO STYLE
                </h1>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo consectetur pariatur iure repellat minima saepe
                deleniti earum. Deserunt minus repudiandae hic officiis
                doloribus vitae, optio et. Maxime, repudiandae impedit? Quos?
                doloribus vitae, optio et. Maxime, repudiandae impedit? Quos?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-6">
        <div className="max-w-[1440px] p-6 flex flex-col gap-12 justify-center items-center mx-auto w-full md:w-[90%]">
          {/* Title and description */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-center md:text-left">
            <div className="text-[#523939] w-full">
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
          <div className="flex flex-col md:flex-row py-2 px-4 items-center rounded-[20px] bg-[#523939] text-white gap-4 md:gap-1">
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
              <h1 className="h1-heading text-[#523939]">
                GET THE LOOK YOU LOVE EVERY TIME
              </h1>
              <p className="md:max-w-[500px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus aliquam laborum aperiam maiores perspiciatis sint
                natus? Magnam ipsa quam tenetur commodi ab illo beatae a? Sed
                dolorem ab illo earum?
              </p>
            </div>
          </div>

          {/* Call to action section */}
          <p className="border border-black py-2 px-8 md:px-32 rounded-[10px] text-center md:text-left">
            CHECK OUT OUR FULL LIST OF BARBERS AND FIND THE PERFECT FIT FOR YOU
          </p>
        </div>
      </section>
      {/* <section
        style={{
          backgroundImage: "url('backgroundbar.png')",
        }}
        className="bg-no-repeat text-white bg-cover bg-center "
      >
        <p className="italic-p">CLEAN IS THE NEW COOL</p>
        <h1 className="h1-heading">HYGIENE THAT SETS THE BAR HIGH</h1>
        <p>
          Let’s face it—clean matters. We’ve raised the bar on hygiene, ensuring
          every tool, station, and surface sparkles like your fresh fade.
        </p>
        <div className="bg-[#86868652] flex flex-col">
          <h1>OUR PROMISE</h1>
          <ul>
            <li>Tools are sanitized after every use—no exceptions.</li>
            <li>Chairs and stations are cleaned between every client.</li>
            <li>
              We follow every health guideline to keep you safe and relaxed.
            </li>
          </ul>
          <p>
            Feel good knowing you’re in a space that’s as fresh as your cut.
          </p>
        </div>
      </section> */}
      {/* <section
        style={{
          backgroundImage: "url('backgroundbar.png')",
        }}
        className="bg-no-repeat text-white bg-cover bg-center py-12"
      >
        <div
          className="max-w-[1440px] px-6 py-12 w-[90%] flex flex-col
        gap-4 m-6 text-left"
        >
          <p className="italic-p">CLEAN IS THE NEW COOL</p>
          <h1 className="h1-heading ">HYGIENE THAT SETS THE BAR HIGH</h1>
          <p>
            Let’s face it—clean matters. We’ve raised the bar on hygiene,
            ensuring every tool, station, and surface sparkles like your fresh
            fade.
          </p>
          <div className="bg-[#86868652] max-w-fit  gap-4 flex flex-col mt-6 px-4 min-w-[50%] py-6 items-start rounded-lg">
            <h1 className="h1-heading ">OUR PROMISE</h1>
            <ul className="flex flex-col gap-2">
              <li>Tools are sanitized after every use—no exceptions.</li>
              <li>Chairs and stations are cleaned between every client.</li>
              <li>
                We follow every health guideline to keep you safe and relaxed.
              </li>
            </ul>
          </div>
          <p className="py-4">
            Feel good knowing you’re in a space that’s as fresh as your cut.
          </p>
        </div>
      </section> */}
      <section
        style={{
          backgroundImage: "url('backgroundbar.png')",
        }}
        className="bg-no-repeat text-white bg-cover bg-center py-12"
      >
        <div className="w-full px-6 py-12 flex flex-col gap-6 m-0 text-left max-w-full mx-auto">
          {/* Title and description */}
          <p className="italic-p text-center md:text-left">
            CLEAN IS THE NEW COOL
          </p>
          <h1 className="h1-heading text-center md:text-left">
            HYGIENE THAT SETS THE BAR HIGH
          </h1>
          <p className="text-center md:text-left">
            Let’s face it—clean matters. We’ve raised the bar on hygiene,
            ensuring every tool, station, and surface sparkles like your fresh
            fade.
          </p>

          {/* Promise box */}
          <div className="bg-[#86868652] md:max-w-[60%] gap-4 flex flex-col mt-6 px-4 py-6 items-start rounded-lg">
            <h1 className="h1-heading text-center md:text-left">OUR PROMISE</h1>
            <ul className="flex flex-col gap-2">
              <li>Tools are sanitized after every use—no exceptions.</li>
              <li>Chairs and stations are cleaned between every client.</li>
              <li>
                We follow every health guideline to keep you safe and relaxed.
              </li>
            </ul>
          </div>

          {/* Additional Text */}
          <p className="py-4 text-center md:text-left">
            Feel good knowing you’re in a space that’s as fresh as your cut.
          </p>
        </div>
      </section>
      <section className="py-12 px-4 bg-[#523939]">
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
              <p className="text-sm text-gray-500">
                Graphic Designer @Coinbase
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-left flex flex-col">
            <p className="text-gray-700 font-medium mb-6">
              Its intuitive design and powerful features make it indispensable.
              I cant imagine going back to life before it!
            </p>
            <div className="mt-auto">
              <p className="text-gray-800 font-semibold">Emma Roberts</p>
              <p className="text-sm text-gray-500">Chief Executive @Spotify</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
/////////////
