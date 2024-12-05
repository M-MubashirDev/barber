function HygeinePromise() {
  return (
    <section
      style={{
        backgroundImage: "url('backgroundbar.png')",
      }}
      className="bg-no-repeat text-white bg-cover  bg-center py-12 "
    >
      <div className=" px-6 py-12 flex flex-col gap-6 m-0 text-left  max-w-[1440px] mx-auto w-[90%]">
        {/* Title and description */}
        <div>
          <p className="italic-p text-center md:text-left">
            CLEAN IS THE NEW COOL
          </p>
          <h1 className="h1-heading text-center md:text-left">
            HYGIENE THAT SETS THE BAR HIGH
          </h1>
        </div>
        <p className="text-center md:text-left">
          Let’s face it—clean matters. We’ve raised the bar on hygiene, ensuring
          every tool, station, and surface sparkles like your fresh fade.
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
  );
}

export default HygeinePromise;
