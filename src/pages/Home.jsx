import Footer from "../components/Footer/Footer";
import FooterDetails from "../components/Footer/FooterDetails";
import Hero from "../components/Home/Hero";
import HygeinePromise from "../components/Home/HygeinePromise";
import PerfectMatch from "../components/Home/PerfectMatch";
import StepIntoStule from "../components/Home/StepIntoStule";
import Testimonial from "../components/Home/Testimonial";

function Home() {
  return (
    <div>
      <Hero />
      <StepIntoStule />
      <PerfectMatch />
      <HygeinePromise />
      <Testimonial />
      <section className="text-center flex flex-col  bg-white ">
        <Footer>
          <Footer.Logo logo="imagefooter.png" />
          <Footer.Heads>
            <span className="lg:tracking-wider">
              DON&apos;T WAIT LOOK GREAT
            </span>
            <span className="lg:block lg:tracking-tight">
              YOUR LOOK STARTS HERE
            </span>
          </Footer.Heads>
          <Footer.Para>
            The clock’s ticking, and that perfect style isn’t going to cut
            itself. Book with your chosen barber today and walk out feeling
            unstoppable.
          </Footer.Para>
          <Footer.Button>
            {" "}
            Find Your Barber. Book Your Spot. Steal the Show
          </Footer.Button>
        </Footer>
        <FooterDetails />
      </section>
    </div>
  );
}

export default Home;
/////////////
