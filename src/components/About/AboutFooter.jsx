import Footer from "../Footer/Footer";
import FooterDetails from "../Footer/FooterDetails";

function AboutFooter() {
  return (
    <div className="">
      <Footer>
        <Footer.Heads>Take a Seat, You’re in the Right Place</Footer.Heads>
        <Footer.Para>
          Whether you’re here for a quick trim or a bold new look, we’re ready
          to make it happen. Pick your barber, relax in the chair, and leave
          feeling like the best version of yourself.
        </Footer.Para>
        <Footer.Button>Book Your Appointment Now</Footer.Button>
      </Footer>
      <FooterDetails />
    </div>
  );
}

export default AboutFooter;
