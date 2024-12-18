function HygeinePromise() {
  return (
    <section
      style={{
        backgroundImage: "url('backgroundbar.webp')",
      }}
      className="bg-no-repeat text-white bg-cover px-4  bg-center py-12 "
    >
      <div className="  py-12 flex flex-col gap-6 m-0  lg:text-left text-center place-content-center  max-w-[1440px] mx-auto w-[90%]">
        {/* Title and description */}
        <div>
          <p className="italic-p text-center lg:!text-start">
            CLEAN IS THE NEW COOL
          </p>
          <h1 className="h1-heading text-white text-center md:text-left">
            HYGIENE THAT SETS THE BAR HIGH
          </h1>
        </div>
        <p className="text-center primary-p lg:text-left">
          Let’s face it—clean matters. We’ve raised the bar on hygiene, ensuring
          <span className="lg:block">
            every tool, station, and surface sparkles like your fresh fade.
          </span>
        </p>

        {/* Promise box */}
        <div className="bg-[#86868652] shadow-[0px_1px_4px_1px_#86868652] lg:max-w-[50%] gap-4 flex flex-col mt-6 text-start  px-8 py-8  rounded-3xl">
          <h1 className="font-[700px] text-[32px] leading-[39.01px] ">
            OUR PROMISE
          </h1>
          <ul className="flex primary-p flex-col gap-2">
            <li>Tools are sanitized after every use—no exceptions.</li>
            <li>Chairs and stations are cleaned between every client.</li>
            <li>
              We follow every health guideline to keep you safe and relaxed.
            </li>
          </ul>
        </div>

        {/* Additional Text */}
        <p className="py-4 text-center font-semibold text-[20px] leading-[24.38px] md:text-left">
          Feel good knowing you’re in a space that’s as fresh as your cut.
        </p>
      </div>
    </section>
  );
}

export default HygeinePromise;
