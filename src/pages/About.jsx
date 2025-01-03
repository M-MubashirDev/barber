import AboutFooter from "../components/About/AboutFooter";
import IconComponent from "../components/About/IconComponent";

function About() {
  return (
    <>
      <div>
        <section
          style={{
            backgroundImage: "url('handsome.webp')",
          }}
          className="bg-no-repeat bg-cover  uppercase object-center  text-white"
        >
          <div className="max-w-full  px-4   mx-auto w-[90%] md:py-[70px] py-10 flex md:text-left text-center  flex-col justify-center md:px-4">
            <p className="md:text-[32px] text-[18px] text-center lg:text-start  leading-1  sm:text-[20px] lg:leading-[26px]  font-medium md:leading-[36px] sm:leading-[20.01px]  decoration-skip-ink-none ">
              about us
            </p>
            <h1 className="lg:text-[64px] inline-block text-center lg:text-start md:text-[50px] sm:text-[32px] text-[20px] font-bold leading-8 sm:leading-[44px] md:leading-[65.02px] lg:leading-[78.02px]     decoration-skip-ink-none ">
              More Than a Barbershop{" "}
              <span className="md:block">It’s Your Space</span>
            </h1>
          </div>
        </section>
        {/* <section className="py-10 w-[90%] max-w-full mx-auto">
          <div className=" flex flex-col gap-16 max-w-fit  px-4  ">
            <div className="flex flex-col-reverse   gap-6 lg:flex-row lg:text-start text-center justify-center items-center lg:gap-12 ">
              <img
                src="children-hairdresser-cutting.webp"
                className="lg:max-w-[50%] max-w-full lg:place-self-start"
                alt="cutting hairs"
              />
              <div>
                <h1 className="mb-6  h1-heading    text-brown-primary">
                  Welcome to Bloomington’s Favorite Barbershop
                </h1>
                <p className="primary-p">
                  In the heart of our vibrant town, there’s a chair with your
                  name on it—a place where every cut is more than just a
                  service. It’s a connection, a moment to unwind, and a chance
                  to feel your best.
                </p>
              </div>
            </div>
            <div className="flex  flex-col gap-6 lg:flex-row lg:text-start text-center justify-center items-center">
              <div className="lg:max-w-[60%]">
                <p className="italic-p text-brown-primary">Our Belief</p>
                <h1 className="mb-6  text-brown-primary h1-heading ">
                  Great Style is Personal
                </h1>
                <p className="place-self-center primary-p ">
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
                src="barber-styling.webp"
                className="lg:max-w-[50%]  max-w-full"
                alt="hair styling"
              />
            </div>
            <div className="place-self-center  text-center">
              <h1 className="h1-heading text-brown-primary mb-2 md:mb-4">
                Why We’re Different
              </h1>
              <p className="primary-p">
                Here, it’s not just about hair. It’s about relationships.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-12 justify-self-center place-self-center ">
              <IconComponent src="listen.png" text="We Listen" />
              <IconComponent src="healthcare.png" text="We care" />
              <IconComponent src="ok.png" text="We perfect" />
            
            </div>
          </div>
        </section> */}
        <section className="py-10 w-[90%]  max-w-full mx-auto">
          <div className="flex flex-col gap-16 max-w-fit px-4">
            {/* Section 1: Image Left, Text Right */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center text-center lg:text-start lg:justify-between lg:gap-12">
              <img
                src="children-hairdresser-cutting.webp"
                className="lg:max-w-[50%] max-w-full lg:flex-1"
                alt="cutting hairs"
              />
              <div className="lg:flex-1">
                <h1 className="mb-6 h1-heading text-brown-primary">
                  Welcome to Bloomington’s Favorite Barbershop
                </h1>
                <p className="primary-p">
                  In the heart of our vibrant town, there’s a chair with your
                  name on it—a place where every cut is more than just a
                  service. It’s a connection, a moment to unwind, and a chance
                  to feel your best.
                </p>
              </div>
            </div>

            {/* Section 2: Text Left, Image Right */}
            <div className="flex flex-col-reverse gap-6 lg:flex-row lg:items-center text-center lg:text-start lg:justify-between lg:gap-12">
              <div className="lg:flex-1">
                <p className="italic-p text-brown-primary">Our Belief</p>
                <h1 className="mb-6 text-brown-primary h1-heading">
                  Great Style is Personal
                </h1>
                <p className="primary-p">
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
                src="barber-styling.webp"
                className="lg:max-w-[50%] max-w-full lg:flex-1"
                alt="hair styling"
              />
            </div>

            {/* Section 3: Centered Text */}
            <div className="place-self-center text-center">
              <h1 className="h1-heading text-brown-primary mb-2 md:mb-4">
                Why We’re Different
              </h1>
              <p className="primary-p">
                Here, it’s not just about hair. It’s about relationships.
              </p>
            </div>

            {/* Section 4: Icon Components */}
            <div className="flex flex-col md:flex-row gap-12 justify-self-center place-self-center">
              <IconComponent src="listen.png" text="We Listen" />
              <IconComponent src="healthcare.png" text="We care" />
              <IconComponent src="ok.png" text="We perfect" />
            </div>
          </div>
        </section>

        <section className="bg-brown-primary  py-12 px-4">
          <div className="bg-white max-w-full flex text-center  items-center justify-center gap-4 flex-col p-10  mx-auto w-[90%]">
            <h1 className="h1-heading text-brown-primary ">
              More Than a Barbershop
            </h1>
            <p className="primary-p mb-6 lg:max-w-[58%] ">
              This is a place where first-time clients become lifelong regulars.
              From the laughter that fills the room to the personalized care in
              every service, we’re building more than great haircuts—we’re
              building a community.
            </p>
            <div className="md:min-w-[35%] min-w-[70%] bg-brown-primary rounded-t-[10px] rounded-b-[10px]  min-h-1 mb-4   mx-auto"></div>
            <div className="flex flex-col text-center lg:text-start xl:flex-row items-center justify-center gap-12">
              <img src="aboutsome.webp" alt="about tools" />
              <div className="text-center  xl:text-start">
                <h1 className="text-brown-primary mb-4  h1-heading ">
                  Your Experience Matters
                </h1>
                <p className="primary-p text-left  md:text-center xl:text-start">
                  We focus on:
                </p>
                <ul className="primary-p text-left  md:text-center list-inside xl:text-start">
                  <li className="list-disc marker:text-sm">
                    A clean and welcoming environment.
                  </li>
                  <li className="list-disc marker:text-sm">
                    Precision and attention to detail in every cut, shave, and
                    trim.
                  </li>
                  <li className="list-disc marker:text-sm">
                    A team of skilled barbers passionate about their craft and
                    your satisfaction.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <AboutFooter />
      </div>
    </>
  );
}

export default About;
