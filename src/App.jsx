import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Bookings from "./pages/Bookings";
import Layout from "./components/Layout";
import Contectus from "./pages/Contectus";
import Location from "./components/Bookings/Location";
import Professional from "./components/Bookings/Professional";
import Services from "./components/Bookings/Services";
import Time from "./components/Bookings/Time";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="bookings" element={<Bookings />}>
            <Route index element={<Location />} />
            <Route path="professional" element={<Professional />} />
            <Route path="professional/services" element={<Services />} />
            <Route path="professional/services/time" element={<Time />} />
          </Route>
          <Route path="contact" element={<Contectus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
{
  /* <div
    className="absolute left-1/2 transform -translate-x-1/2 bg-white md:max-w-[70%] rounded-[20px] max-w-fit max-h-fit p-4 shadow-lg"
    style={{
      top: "calc(100% - 50px)", // Adjust to control how much is inside/outside
    }}
  >
    <blockquote className="block text-2xl border-l-8 border-[#523939] pl-2 leading-relaxed font-montserrat font-normal text-black">
      From the moment I walked in, the Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Reiciendis iusto id aliquid suscipit nt
      sequi iste, vitae magnam et quam ipsam. Saepe, asdsddd das asd
      deserunt!
      <br />
      <cite>__Steve Jobs</cite>
    </blockquote>
  </div> */
}
{
  /* <section className="bg-white py-6">
        <div className="max-w-[1440px] p-6 flex flex-col gap-12 justify-center items-center mx-auto w-[90%]">
          <div className="flex justify-center items-center   ">
            <div className="text-[#523939] w-full ">
              <p className="italic-p">PICK YOUR PERFECT MATCH </p>
              <h1 className="h1-heading">YOUR STYLE, YOUR BARBER</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              voluptas sunt praesentium distinctio, harum consequatur tempora
              veniam repudiandae quae sequi, animi doloremque officiis tempore
              possimus expedita deleniti, tenetur optio nulla.
            </p>
          </div>
          <div className="flex py-2 px-4 items-center rounded-[20px] bg-[#523939] text-white gap-1">
            <button className="border border-white rounded-[20px] px-12 py-2">
              Book Now
            </button>
            <p>To lock un your favorite barber and get ready to turn heads</p>
          </div>
          <div className="flex justify-center gap-12">
            <img src="handsomeMan.png" alt="random" />
            <div className="flex flex-col gap-2">
              <h1 className="h1-heading text-[#523939]">
                GET THE LOOK YOU LOVE EVERY TIME
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus aliquam laborum aperiam maiores perspiciatis sint
                natus? Magnam ipsa quam tenetur commodi ab illo beatae a? Sed
                dolorem ab illo earum?
              </p>
            </div>
          </div>
          <p className="border border-black py-2 px-32 rounded-[10px]">
            CHECK OUT OUR FULL LIST OF BARBERS AND FIND THE PERFECT FIT FOR YOU
          </p>
        </div>
      </section> */
}
