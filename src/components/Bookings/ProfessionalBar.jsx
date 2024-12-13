/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfessionalBar({ data }) {
  // Manage active state
  const [isActive, setIsActive] = useState(false);
  const { image, availability, name, _id } = data;
  const navigate = useNavigate();

  const handleClick = () => {
    setIsActive(!isActive);
    if (!_id) return;
    navigate(`services/${_id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`uppercase flex   items-center gap-6 cursor-pointer border-[#4F4F4F] border-[0.5px] hover:bg-[#523939] hover-styling hover:text-white rounded-[100px] px-2 py-2 
        ${isActive ? "bg-[#523939] text-white" : ""}`} // Apply styles based on active state
    >
      <img
        src={image}
        alt="barber"
        className="max-w-20 max-h-20 w-20 h-20 rounded-[50%]"
      />
      <div>
        <p className="font-semibold text-[16px] sm:text-[20px] uppercase leading-[29.26px]">
          {name}
        </p>
        <p className="font-semibold text-[14px] sm:text-[18px] leading-[24.38px] text-left">
          availabilty:
          <span className="italic font-medium text-left">
            {availability ? "NOT AVALAIBLE" : availability}
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default ProfessionalBar;
