import { NavLink } from "react-router-dom";
import ProfessionalBar from "./ProfessionalBar";
import LinksBar from "./LinksBar";

function Professional() {
  return (
    <section className="max-w-[1440px]   mx-auto w-[90%]">
      <LinksBar />
      <h1 className="booking-h1">Choose a professional</h1>
      <ProfessionalBar />
    </section>
  );
}

export default Professional;
