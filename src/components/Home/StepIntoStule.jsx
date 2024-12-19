function StepIntoStule() {
  return (
    <section className="bg-brown-primary p-4 text-center lg:text-start  pb-8 ">
      <div className="flex flex-col min-h-fit max-w-[1440px] mx-auto w-[90%]  gap-8 lg:gap-2">
        <div className="bg-white md:max-w-[75%] rounded-[20px] max-w-fit  max-h-fit   p-4  self-center justify-self-center lg:translate-y-[-50%]   ">
          <div className="flex">
            <div className="sm:min-w-2 min-w-1 bg-brown-primary rounded-t-[10px] rounded-b-[10px] min-h-full mx-auto"></div>
            <blockquote className="flex flex-col gap-5 text-[18px] text-start  sm:text-2xl  pl-4 leading-[29.26px]   font-normal text-black ">
              From the moment I walked in, the vibe was welcoming and laid-back.
              My barber took the time to listen to exactly what I wanted,
              offering helpful suggestions along the way. The result? A perfect
              haircut that I’ve been getting compliments on ever since!
              <br />
              <cite className="font-medium flex items-center gap2  italic text-base leading-[19.5px]">
                <hr className="border-t-[1px] align-top min-w-9 border-brown-primary" />
                <span>&ensp;Bteve Jobs</span>
              </cite>
            </blockquote>
          </div>
        </div>
        {/* border-l-8 border-brown-primary */}
        <div className="flex flex-col lg:flex-row lg:mt-[-4rem] items-center justify-center font-montserrat bg-white ">
          <img
            src="hairstyles.png"
            className="lg:max-w-[40%] w-min"
            alt="logo styles"
          />
          <div className="md:ml-8  py-6 px-4 md:px-6">
            <div className="text-brown-primary  ">
              <p className="italic-p">WHERE EVERY CUT TELLS A STORY</p>
              <h1 className=" border-brown-primary h1-heading inline-block mb-6  md:mb-12  lg:mb-16  underline-offset-[8px] md:underline-offset-[25px] lg:underline-offset-[30px] mt-1  underline ">
                STEP INTO STYLE
              </h1>
            </div>
            <p className="primary-p">
              You’re here for more than a haircut—you’re here for a fresh start.
              At Hot Rod’s, we do more than just trim and shave. We make you
              feel sharp, confident, and ready to take on the world. Whether
              it’s a clean fade, a classic cut, or a beard trim with serious
              edge, we’ve got you covered.
              <span className="block mt-5">
                Because looking good isn’t just about the style—it’s about how
                it makes you feel.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepIntoStule;
