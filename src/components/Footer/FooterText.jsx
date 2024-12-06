// import React from "react";

// Compound Component for Footer Section
function FooterText({ children }) {
  return <ul className="flex flex-col    text-white text-start">{children}</ul>;
}

// Heading Component
function FooterTextHeading({ children }) {
  return (
    <h1 className="md:font-[700] font-[500] max-w-fit mb-2 text-2xl border-b leading-[29.26px]">
      {children}
    </h1>
  );
}

// ListItem Component
function FooterTextListItem({ children }) {
  return <li>{children}</li>;
}
function Logotext({ src }) {
  return <img src={`${src}`} alt="social media" className="max-w-8" />;
}
FooterText.Heading = FooterTextHeading;
FooterText.ListItem = FooterTextListItem;
FooterText.Logotext = Logotext;

export default FooterText;
