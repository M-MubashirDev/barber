function StepIntoStule() {
  return (
    <section className="bg-brown-primary p-4 text-center md:text-start  pb-8 ">
      <div className="flex flex-col min-h-fit max-w-[1440px] mx-auto w-[90%]  gap-8 lg:gap-2">
        <div className="bg-white md:max-w-[70%] rounded-[20px] max-w-fit  max-h-fit   p-4  self-center justify-self-center lg:translate-y-[-50%]   ">
          <blockquote className="flex flex-col gap-3 text-2xl border-l-8 border-brown-primary pl-2 leading-relaxed   font-montserrat font-normal text-black ">
            From the moment I walked in, the Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Reiciendis iusto id aliquid suscipit
            nt sequi iste, vitae magnam et quam ipsam. Saepe, asdsddd das asd
            deserunt!
            <br />
            <cite className="text-start">__Steve Jobs</cite>
          </blockquote>
        </div>
        <div className="flex flex-col lg:flex-row lg:mt-[-4rem] items-center justify-center font-montserrat bg-white ">
          <img
            src="hairstyles.png"
            className="lg:max-w-[40%] w-min"
            alt="logo styles"
          />
          <div className="ml-8 p-6">
            <div className="text-brown-primary  ">
              <p className="italic-p">WHERE EVERY CUT TELLS A STORY</p>
              <h1 className=" border-brown-primary h1-heading inline-block  mb-6 pb-4 border-b-[5px]   ">
                STEP INTO STYLE
              </h1>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo consectetur pariatur iure repellat minima saepe deleniti
              earum. Deserunt minus repudiandae hic officiis doloribus vitae,
              optio et. Maxime, repudiandae impedit? Quos? doloribus vitae,
              optio et. Maxime, repudiandae impedit? Quos?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepIntoStule;
