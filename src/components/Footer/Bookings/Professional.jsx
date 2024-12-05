import { NavLink } from "react-router-dom";
import ProfessionalBar from "./ProfessionalBar";

function Professional() {
  return (
    <section className="max-w-[1440px] mx-auto w-[90%]">
      <ul className="uppercase flex gap-[5px] text-[16px] italic font-medium leading-[19.5px] text-left underline-from-font decoration-skip-none mt-[5%]">
        <li>
          <NavLink to="booking">location</NavLink>
        </li>
        <li>
          <NavLink to="professional">professional</NavLink>
        </li>
        <li>
          <NavLink to="services">services</NavLink>
        </li>
        <li>
          <NavLink to="time">time</NavLink>
        </li>
      </ul>
      <h1 className="uppercase font-[900] text-5xl text-brown-primary leading-[58.51px] mb-4">
        Choose a professional
      </h1>
      <ProfessionalBar />
    </section>
  );
}

export default Professional;
