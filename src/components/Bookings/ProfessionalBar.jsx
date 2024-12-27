/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfessionalBar({ data }) {
  // Manage active state
  const [isActive, setIsActive] = useState(false);
  const {
    image = "/imgCircle.png",
    availability,
    name,
    notAvailable,
    _id,
  } = data;
  console.log(image);
  const { to, from } = notAvailable[0] || [];
  const checkFrom = new Date(from);
  const checktoday = new Date();
  const check = checkFrom > checktoday;
  // console.log(check, availability);
  const handleClick = () => {
    setIsActive(!isActive);
    if (!_id) return;
    navigate(`services/${_id}`);
  };
  const navigate = useNavigate();

  function formatDate(dateString) {
    const inputDate = new Date(dateString); // Parse the input date
    inputDate.setDate(inputDate.getDate() + 1); // Add 1 day

    // Format the result to show only the day and month
    const options = { month: "short", day: "numeric" }; // Example: "Dec 30"
    return inputDate.toLocaleDateString("en-US", options);
  }
  return (
    <div
      onClick={handleClick}
      // ${
      //   !availability ? "pointer-events-none cursor-not-allowed opacity-50" : ""
      // }
      className={`relative uppercase flex items-center sm:gap-6 gap-2 hover:text-white    shadow-[0_4px_8px_rgba(0, 0, 0, 0.7)] transition-shadow cursor-pointer border-[#4F4F4F] border-[0.5px] rounded-[100px] px-2 py-2 overflow-hidden 
      ${isActive ? "bg-[#523939] text-white" : "text-[#523939]"}
      group`}
    >
      {/* Pseudo-element for expanding background */}
      <span className="absolute inset-0 bg-[#523939] scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-center z-0"></span>

      {/* Content */}
      <img
        src={image}
        // src="/imgCircle.png"
        alt="barber"
        className="z-10 max-w-20 max-h-20 w-20 h-20 rounded-full object-cover"
      />
      <div className="z-10">
        <p className="font-semibold text-[16px] sm:text-[20px] uppercase leading-[29.26px]">
          {name}
        </p>
        <p className="font-semibold text-[14px] sm:text-[18px] leading-[24.38px] text-left">
          Availability:
          <span className="italic font-medium text-left">
            {availability || check
              ? "today"
              : formatDate(to) === "Invalid Date"
              ? "not available"
              : formatDate(to)}
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default ProfessionalBar;
