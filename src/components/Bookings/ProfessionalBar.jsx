/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfessionalBar({ data }) {
  // Manage active state
  const [isActive, setIsActive] = useState(false);
  const { image, availability, name, _id } = data;
  const { date, day } = availability[0] || {};
  console.log(formatDate(date), day);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsActive(!isActive);
    if (!_id) return;
    navigate(`services/${_id}`);
  };
  function formatDate(isoString) {
    const date = new Date(isoString);

    const options = { day: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div
      onClick={handleClick}
      className={`relative uppercase flex items-center sm:gap-6 gap-2 hover:text-white  shadow-[0_4px_8px_rgba(0, 0, 0, 0.7)] transition-shadow cursor-pointer border-[#4F4F4F] border-[0.5px] rounded-[100px] px-2 py-2 overflow-hidden 
      ${isActive ? "bg-[#523939] text-white" : "text-[#523939]"}
      group`}
    >
      {/* Pseudo-element for expanding background */}
      <span className="absolute inset-0 bg-[#523939] scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-center z-0"></span>

      {/* Content */}
      <img
        src={image}
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
            {date && day ? `${day}, ${formatDate(date)}` : ""}
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default ProfessionalBar;
