function ContactUs() {
  return (
    <section
      style={{
        backgroundImage: "url('contect.png')",
        minHeight: "calc(100vh - 80.8px)",
      }}
      className="bg-no-repeat flex flex-col items-center justify-center bg-cover w-full"
    >
      <div className="text-white max-w-[1440px] flex flex-col items-center lg:items-start mx-auto w-[90%]">
        {/* Title */}
        <h2 className="font-medium text-[24px] leading-[32px] sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[39.01px]">
          CONTACT US
        </h2>
        <h1 className="font-bold text-[40px] leading-[50px] sm:text-[48px] sm:leading-[60px] lg:text-[64px] lg:leading-[78.02px]">
          Let’s Talk Haircuts
        </h1>

        {/* Paragraph */}
        <p className="primary-p text-[14px] leading-[20px] sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[28px] text-center lg:text-start lg:max-w-[50%]">
          Got a question, need help booking, or just want to say hi? We’re here
          for you. Reach out, and we’ll get back to you faster than a fresh
          fade. Your next great look is just a message away!
        </p>

        {/* Form */}
        <form
          action=""
          className="flex bg-[#86868652] my-6 p-4 sm:p-6 rounded-3xl flex-col gap-4 w-full lg:max-w-[60%]"
        >
          <input
            type="text"
            className="bg-transparent placeholder-white border rounded-[6px] border-white py-2 px-4 sm:py-3 sm:px-6"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="bg-transparent placeholder-white border rounded-[6px] border-white py-2 px-4 sm:py-3 sm:px-6"
            placeholder="Email Address"
          />
          <textarea
            placeholder="Question"
            className="min-h-[5rem] bg-transparent border rounded-[6px] border-white py-2 px-4 sm:py-3 sm:px-6 placeholder-white"
          ></textarea>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
