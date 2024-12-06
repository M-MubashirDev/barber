import IconComponent from "../components/About/IconComponent";

function About() {
  return (
    <>
      <div>
        <section
          style={{
            backgroundImage: "url('handsome.png')",
          }}
          className="bg-no-repeat bg-cover  uppercase object-center  text-white"
        >
          <div className="max-w-full    mx-auto w-[90%] md:py-[70px] py-10 flex md:text-left text-center  flex-col justify-center md:px-4">
            <p className="md:text-[32px] text-[18px]   sm:text-[20px]  font-medium leading-[26px] sm:leading-[39.01px]  decoration-skip-ink-none ">
              about us
            </p>
            <h1 className="lg:text-[64px] inline-block md:text-[50px] sm:text-[32px] text-[28px] font-bold leading-[78.02px]     decoration-skip-ink-none ">
              More Than a Barbershop{" "}
              <span className="md:block">It’s Your Space</span>
            </h1>
          </div>
        </section>
        <section className="py-10 ">
          <div className=" flex flex-col gap-16 max-w-full mx-auto  w-[90%]">
            <div className="flex flex-col-reverse   gap-6 lg:flex-row lg:text-start text-center justify-center items-center lg:gap-12 ">
              <img
                src="children-hairdresser-cutting.png"
                className="lg:max-w-[50%] max-w-full lg:place-self-start"
                alt="cutting hairs"
              />
              <div>
                <h1 className="mb-6  about-H1">
                  Welcome to Bloomington’s Favorite Barbershop
                </h1>
                <p className="about-p">
                  In the heart of our vibrant town, there’s a chair with your
                  name on it—a place where every cut is more than just a
                  service. It’s a connection, a moment to unwind, and a chance
                  to feel your best.
                </p>
              </div>
            </div>
            <div className="flex  flex-col gap-6 lg:flex-row lg:text-start text-center justify-center items-center">
              <div className="lg:max-w-[60%]">
                <p className="font-medium text-brown-primary uppercase italic text-[16px] leading-[19.5px]">
                  Our Belief
                </p>
                <h1 className="mb-6  about-H1">Great Style is Personal</h1>
                <p className="place-self-center about-p">
                  In the heart of our vibrant town, there’s a chair with your
                  name on it—a{" "}
                  <span className="max-w-[30%]">
                    place where every cut is more than just a service. It’s a
                    connection, a moment to unwind, and a chance to feel your
                    best.
                  </span>
                </p>
              </div>
              <img
                src="barber-styling.png"
                className="lg:max-w-[50%]  max-w-full"
                alt="hair styling"
              />
            </div>
            <div className="place-self-center  text-center">
              <h1 className="about-H1 mb-2 md:mb-4">Why We’re Different</h1>
              <p className="about-p">
                Here, it’s not just about hair. It’s about relationships.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-12 place-self-center ">
              <IconComponent src="listen.png" text="We Listen" />
              <IconComponent src="healthcare.png" text="We care" />
              <IconComponent src="ok.png" text="We perfect" />
              {/* </div> */}
            </div>
          </div>
        </section>
        <section> </section>
      </div>
    </>
  );
}

export default About;
