/* eslint-disable react/prop-types */
import { useState } from "react";

function Duration({ data, Clicking }) {
  const [isActive, setIsActive] = useState(false);
  const { title, time, price } = data;

  // Toggle active state on click
  const handleClick = () => {
    setIsActive(!isActive);
    Clicking();
  };

  return (
    <button
      onClick={handleClick} // Add onClick event to toggle active state
      style={{ "--price": `"$${price}"` }}
      className={`border-[0.5px] rounded-[20px] flex relative min-w-[312px]  h-48 border-[#4F4F4F] shadow-brown-primary hover:shadow-[1px_1px_10px_-2px_#0000007d] transition-shadow 
        ${isActive ? "bg-brown-primary text-white" : ""}`} // Apply active background color
    >
      <div
        className={`after:content-[var(--price)] after:text-center after:justify-center after:flex after:place-items-center  
          after:w-[100px] after:min-h-10 after:absolute after:bottom-6 after:rounded-tl-[20px] after:rounded-bl-[20px] 
          after:right-0 after:font-semibold after:text-[18px] flex flex-col m-6 gap-3 text-start after:leading-[21.94px] 
          ${
            isActive
              ? "after:bg-white after:text-brown-primary"
              : "after:bg-brown-primary after:text-white"
          }`} // Apply active text color
      >
        <h2 className="font-semibold text-[18px] leading-[21.94px]">{title}</h2>
        <p className="uppercase font-semibold text-[18px] leading-[21.94px]">
          time:{" "}
          <span className="font-normal text-[18px] leading-[21.94px]">
            {time}
          </span>
        </p>
      </div>
    </button>
  );
}

export default Duration;
