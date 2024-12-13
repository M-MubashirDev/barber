import React from "react";
import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
function OrderSummery() {
  const { id } = useParams();
  const {
    obj: { totalPrice, totalTime },
    oderSummery,
  } = JSON.parse(sessionStorage.getItem("selectedServices"));
  const professinols = JSON.parse(sessionStorage.getItem("professionaldata"));
  const currentProfessionals = professinols
    ?.filter((val) => val._id === id)
    .at(0);
  const { name, image } = currentProfessionals;
  console.log(totalPrice, totalTime, oderSummery, currentProfessionals);

  return (
    <div className="min-h-[50vh] flex flex-col   my-14 px-4 py-6 bg-[#ECECEC] min-w-fit  rounded-[20px]">
      <h1 className="font-semibold text-[32px] mb-6 text-center text-brown-primary leading-[39.01px]">
        Order Summary
      </h1>
      <p className="font-medium text-brown-primary text-[20px] leading-[24.38px]">
        Professional:{" "}
      </p>
      <div className="flex gap-2 mb-2 items-center">
        <img
          src={image}
          alt="barber"
          className="min-w-12 min-h-12 w-12 h-12   rounded-[50%]"
        />
        <p className="font-semibold text-[16px] leading-[19.5px]">{name}</p>
      </div>
      <p className="font-medium  text-brown-primary text-[20px] leading-[24.38px]">
        Services:
      </p>
      {oderSummery?.map((val) => (
        <React.Fragment key={val._id}>
          <p className="font-medium text-[16px] mb-3  items-center flex flex-row    gap-1 md:gap-0 justify-between leading-[19.5px]">
            <span>{val.title}</span>{" "}
            <span className="font-semibold px-4 text-brown-primary text-[18px] leading-[21.94px]">
              ${val.price}
            </span>
          </p>
        </React.Fragment>
      ))}
      <p className="font-medium text-brown-primary text-[20px] leading-[24.38px]">
        Total Services Time:
      </p>
      <p className="font-medium text-[16px]  flex justify-between leading-[19.5px]">
        {totalTime} Min
      </p>
      <div className="flex justify-between items-center  text-brown-primary mt-auto ">
        <h2 className="font-bold text-[20px] leading-[24.38px]">Sub TOTAL</h2>
        <span className="font-bold text-[40px] leading-[48.76px]">
          ${totalPrice}
        </span>
      </div>
    </div>
  );
}

export default OrderSummery;
// function OrderSummery() {
//   return (
//     <div className="flex flex-col gap-4 p-4 bg-[#ECECEC] rounded-[20px] min-h-[50vh]">
//       <h1 className="font-semibold text-center text-brown-primary text-[24px] sm:text-[28px] md:text-[32px] leading-[28px] sm:leading-[35px] md:leading-[39.01px]">
//         Order Summary
//       </h1>
//       <p className="font-medium text-brown-primary text-[16px] sm:text-[18px] md:text-[20px]">
//         Professional:
//       </p>
//       <div className="flex items-center gap-2 mb-2">
//         <img src="/imgCircle.png" alt="barber" className="w-10 sm:w-12" />
//         <p className="font-semibold text-[14px] sm:text-[16px]">Ian B.</p>
//       </div>
//       <p className="font-medium text-brown-primary text-[16px] sm:text-[18px] md:text-[20px]">
//         Services:
//       </p>
//       <p className="font-medium flex justify-between text-[14px] sm:text-[16px] md:text-[18px]">
//         <span>HairCut</span>{" "}
//         <span className="font-semibold text-brown-primary">$26</span>
//       </p>
//       <p className="font-medium text-brown-primary text-[16px] sm:text-[18px] md:text-[20px]">
//         Total Services Time:
//       </p>
//       <p className="font-medium text-[14px] sm:text-[16px] flex justify-between">
//         30 Min
//       </p>
//       <div className="flex justify-between items-center text-brown-primary mt-auto">
//         <h2 className="font-bold text-[18px] sm:text-[20px]">Sub TOTAL</h2>
//         <span className="font-bold text-[32px] sm:text-[36px] md:text-[40px]">
//           $26
//         </span>
//       </div>
//     </div>
//   );
// }

// export default OrderSummery;
