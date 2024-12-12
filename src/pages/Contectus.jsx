import { useState } from "react";
import { useContect } from "../components/Contextus/useContect";
import Spinner from "../components/Spinner";

function ContactUs() {
  const { postContect, isPending } = useContect();

  // State to store form values
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    question: "",
  });

  // State to store validation message
  const [validationMessage, setValidationMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Handle form submission
  const submit = (e) => {
    e.preventDefault();

    const { fullname, email, question } = formValues;

    // Validation
    if (!fullname || !email || !question) {
      setValidationMessage("Please fill in all fields before submitting.");
      return;
    }

    setValidationMessage(""); // Clear validation message
    postContect({ data: formValues }); // Call the postContect function with form values
  };

  if (isPending) return <Spinner />;

  return (
    <section
      style={{
        backgroundImage: "url('contect.webp')",
        minHeight: "calc(100vh - 80.8px)",
      }}
      className="bg-no-repeat flex flex-col text-center items-center justify-center bg-cover w-full"
    >
      <div className="text-white max-w-[1440px] flex flex-col items-center lg:items-start mx-auto w-[90%]">
        {/* Title */}
        <h2 className="font-medium text-[20px] leading-[32px] sm:text-[24px] sm:leading-[36px] lg:text-[32px] lg:leading-[39.01px]">
          CONTACT US
        </h2>
        <h1 className="font-bold text-[36px] leading-[50px] sm:text-[44px] sm:leading-[60px] lg:text-[64px] lg:leading-[78.02px]">
          Let’s Talk Haircuts
        </h1>

        {/* Paragraph */}
        <p className="primary-p text-center lg:text-start lg:max-w-[50%]">
          Got a question, need help booking, or just want to say hi? We’re here
          for you. Reach out, and we’ll get back to you faster than a fresh
          fade. Your next great look is just a message away!
        </p>

        {/* Form */}
        <form
          onSubmit={submit}
          className="flex bg-[#86868652] my-6 p-4 sm:p-6 rounded-3xl flex-col gap-4 w-full lg:max-w-[60%]"
        >
          {validationMessage && (
            <div className="text-red-500 text-sm font-medium mb-2">
              {validationMessage}
            </div>
          )}
          <input
            type="text"
            name="fullname"
            value={formValues.fullname}
            onChange={handleChange}
            className="bg-transparent outline-none placeholder-white rounded-[6px] border border-white py-2 px-4 sm:py-3 sm:px-6"
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="bg-transparent outline-none placeholder-white border rounded-[6px] border-white py-2 px-4 sm:py-3 sm:px-6"
            placeholder="Email Address"
          />
          <textarea
            name="question"
            value={formValues.question}
            onChange={handleChange}
            placeholder="Question"
            className="min-h-[5rem] outline-none bg-transparent border rounded-[6px] border-white py-2 px-4 sm:py-3 sm:px-6 placeholder-white"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black font-medium py-2 px-4 rounded-lg hover:bg-gray-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
