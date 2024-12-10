// import React from "react";

// Compound Component for Footer Section
function FooterText({ children }) {
  return (
    <ul className="flex flex-col max-w-fit   text-white text-start  ">
      {children}
    </ul>
  );
}

// Heading Component
function FooterTextHeading({ children }) {
  return (
    <h1 className="md:font-[700]  font-[500] tracking-[0.2em] max-w-fit mb-[10px] md:text-2xl text-[18px]  text-left underline decoration-white underline-offset-[8px] decoration-[1px] leading-[29.26px]">
      {children}
    </h1>
  );
}
// text-[24px]  leading-[29.26px] tracking-[0.2em] text-left decoration-solid underline-offset-2

// ListItem Component
function FooterTextListItem({ children }) {
  return (
    <li className="sm:font-semibold font-normal sm:text-[17px] text-[14px] leading-[24.38px]">
      {children}
    </li>
  );
}
function Logotext({ src }) {
  return (
    <img src={`${src}`} alt="social media" className="max-w-8 sm:max-w-10" />
  );
}
FooterText.Heading = FooterTextHeading;
FooterText.ListItem = FooterTextListItem;
FooterText.Logotext = Logotext;

export default FooterText;
