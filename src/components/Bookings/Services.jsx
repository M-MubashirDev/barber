import { useLocation } from "react-router-dom";
import Duration from "./Duration";
import LinksBar from "./LinksBar";
import OrderSummery from "./OrderSummery";

function Services() {
  const { pathname } = useLocation();
  console.log([pathname]);
  return (
    <section className=" font-extrabold text-[48px] max-w-[1440px] justify-center  gap-3  grid lg:grid-cols-[1fr_auto] md:grid  mx-auto w-[90%] leading-[58.51px]">
      <div className="max-w-fit ">
        <LinksBar />
        <h1 className="booking-h1">Choose Services</h1>
        <div className="grid  lg:grid-cols-[20rem_20rem_20rem] md:grid-cols-[20rem_20rem] gap-4 justify-start">
          <Duration heading="Senior Haircut (60+)" time="20 mins" price="30" />
          <Duration heading="Senior Haircut (60+)" time="20 mins" price="34" />
          <Duration heading="Senior Haircut (60+)" time="20 mins" price="34" />
          <Duration heading="Senior Haircut (60+)" time="20 mins" price="30" />
          <Duration heading="Senior Haircut (60+)" time="20 mins" price="30" />
        </div>
        <button className="font-semibold mt-8  bg-brown-primary min-w-52 min-h-12 text-[16px] leading-[19.5px] rounded-[10px] text-white">
          CHOOSE TIME
        </button>
      </div>
      <div>
        <OrderSummery />
      </div>
    </section>
  );
}

export default Services;
// import { useLocation } from "react-router-dom";
// import Duration from "./Duration";
// import LinksBar from "./LinksBar";
// import OrderSummery from "./OrderSummery";

// function Services() {
//   const { pathname } = useLocation();
//   console.log([pathname]);

//   return (
//     <section className="font-extrabold text-[48px] grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 mx-auto w-[90%] min-w-[320px]">
//       <div>
//         <LinksBar />
//         <h1 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[38px] sm:leading-[50px] md:leading-[58.51px]">
//           Choose Services
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-4">
//           <Duration heading="Senior Haircut (60+)" time="20 mins" price="30" />
//           <Duration heading="Senior Haircut (60+)" time="20 mins" price="34" />
//           <Duration heading="Senior Haircut (60+)" time="20 mins" price="34" />
//           <Duration heading="Senior Haircut (60+)" time="20 mins" price="30" />
//           <Duration heading="Senior Haircut (60+)" time="20 mins" price="30" />
//         </div>
//         <button className="font-semibold mt-8 bg-brown-primary w-full sm:w-auto px-4 py-2 text-[14px] sm:text-[16px] rounded-[10px] text-white">
//           CHOOSE TIME
//         </button>
//       </div>
//       <div>
//         <OrderSummery />
//       </div>
//     </section>
//   );
// }

// export default Services;
