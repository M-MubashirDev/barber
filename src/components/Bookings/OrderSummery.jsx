// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// // import { Tips, TipsInput } from "./Tips";

// /* eslint-disable react/prop-types */
// function OrderSummery({
//   reservationsData,
//   setReservationData,
//   onOpen,
//   formatTime12Hour,
// }) {
//   const [tip, setTip] = useState(""); //it only select the tip from the form field
//   const [finalTip, setFinalTip] = useState(""); // the final tip it can be from btn or from field
//   const [tipId, setTipId] = useState(""); // current selected tip id
//   const [tipDollar, setTipDollar] = useState(0); // converted finaltip into the dollars
//   const { id } = useParams();
//   const {
//     obj: { totalPrice, totalTime },
//     oderSummery,
//   } = JSON.parse(sessionStorage.getItem("selectedServices"));
//   const professinols = JSON.parse(sessionStorage.getItem("professionaldata"));
//   const currentProfessionals = professinols
//     ?.filter((val) => val._id === id)
//     .at(0); // filter current professional
//   const { name, image } = currentProfessionals;
//   // console.log(totalPrice, totalTime, oderSummery, currentProfessionals);
//   function TipInMoney(tip) {
//     const calc = (totalPrice / 100) * tip;
//     setTipDollar(calc);
//   }
//   function tipSubmit(e) {
//     e.preventDefault();
//     setFinalTip(tip);
//     TipInMoney(tip);
//     setTip("");
//     setTipId("");
//   }
//   function tipButtonSubmit(val) {
//     if (val == tipId) {
//       setFinalTip("");
//       setTipId("");
//       TipInMoney(0);
//       return;
//     }
//     // console.log(val === tipId, val, tipId);
//     setFinalTip(val);
//     setTipId(val);
//     TipInMoney(val);
//   }
//   function summerySubmit() {
//     onOpen(true);
//     setReservationData({
//       ...reservationsData,
//       subTotal: Number(totalPrice),
//       grandTotal: (Number(totalPrice) + Number(tipDollar)).toFixed(1),
//       tip: tipDollar,
//     });
//   }
//   useEffect(() => {
//     // console.log(reservationsData);
//   }, [finalTip, tipId, tipDollar, reservationsData]);
//   return (
//     <div className="min-h-[80vh] flex flex-col gap-2   my-14 pl-4 pr-6 shadow-lg  md:pl-6 md:pr-8 py-6 bg-[#ECECEC] min-w-fit  rounded-[20px]">
//       <h1 className="font-semibold text-[32px] mb-6 text-center text-brown-primary leading-[39.01px]">
//         Order Summary
//       </h1>
//       <p className="font-medium text-brown-primary text-[20px] leading-[24.38px]">
//         Professional:{" "}
//       </p>
//       <div className="flex gap-2 mb-2 items-center">
//         <img
//           src={image || "imgCircle.png"}
//           alt="barber"
//           className="min-w-12 min-h-12 w-12 h-12   rounded-[50%]"
//         />
//         <p className="font-semibold capitalize     text-[16px] leading-[19.5px]">
//           {name}
//         </p>
//       </div>
//       <div className="mb-2">
//         <p className="font-medium mb-1 text-brown-primary text-[20px] leading-[24.38px]">
//           Services:
//         </p>
//         {oderSummery?.map((val) => (
//           <React.Fragment key={val._id}>
//             <p className="font-medium text-[16px] mb-[2px]  items-center flex flex-row    gap-1 md:gap-0 justify-between leading-[19.5px]">
//               <span>{val.title}</span>{" "}
//               <span className="font-semibold px-4 text-brown-primary text-[18px] leading-[21.94px]">
//                 ${val.price}
//               </span>
//             </p>
//           </React.Fragment>
//         ))}
//       </div>
//       <div className="mb-2">
//         <p className="font-medium mb-1 text-brown-primary text-[20px] leading-[24.38px]">
//           Total Services Time:
//         </p>
//         <p className="font-medium text-[16px]  flex justify-between leading-[19.5px]">
//           {totalTime} Min
//         </p>
//       </div>
//       {reservationsData?.date && (
//         <div className="mb-2">
//           <p className="font-medium mb-1 text-brown-primary text-[20px] leading-[24.38px]">
//             Date:
//           </p>
//           <p className="font-medium text-[16px]  flex justify-between leading-[19.5px]">
//             {reservationsData.date}
//           </p>
//         </div>
//       )}
//       {reservationsData?.time && (
//         <div className="mb-2">
//           <p className="font-medium mb-1 text-brown-primary text-[20px] leading-[24.38px]">
//             Time:
//           </p>
//           <p className="font-medium text-[16px]  flex justify-between leading-[19.5px]">
//             {formatTime12Hour(reservationsData.time)}
//           </p>
//         </div>
//       )}
//       {/* {finalTip && (
//         <div className="">
//           <p className="font-medium mb-1 text-brown-primary flex justify-between  text-[20px] leading-[24.38px]">
//             <span>Tips</span>{" "}
//             <span className="font-semibold px-4 text-brown-primary text-[18px] leading-[21.94px]">
//               {finalTip}%
//             </span>
//           </p>
//         </div>
//       )} */}
//       {reservationsData?.time && (
//         <>
//           <p className="font-medium mb-1 text-brown-primary flex justify-between  text-[20px] leading-[24.38px]">
//             <span>Tips</span>{" "}
//             <span className="font-semibold px-4 text-brown-primary text-[18px] leading-[21.94px]">
//               {tipDollar ? tipDollar.toFixed(1) : "__"}$
//             </span>
//           </p>
//           <div className="flex mb-2  justify-evenly">
//             {["20", "25", "30", "35", "40"].map((val) => (
//               <>
//                 <button
//                   onClick={() => tipButtonSubmit(val)}
//                   className={` font-normal w-9 h-9 sm:w-10 sm:h-10 border-brown-primary border-[0.5px] text-center flex  justify-center items-center rounded-[50%]  sm:text-sm text-[12px]  ${
//                     tipId === val
//                       ? "bg-brown-primary text-white"
//                       : "bg-white text-brown-primary"
//                   }`}
//                 >
//                   {val}%
//                 </button>
//               </>
//             ))}
//             <form onSubmit={tipSubmit}>
//               <input
//                 type="number"
//                 placeholder="__%"
//                 className="bg-white font-normal w-9 h-9 sm:w-10 sm:h-10 border-brown-primary border-[0.5px] text-center flex   justify-center items-center rounded-[50%] sm:text-sm text-[12px] placeholder:text-brown-primary
//               [appearance:textfield]
//               [&::-webkit-inner-spin-button]:appearance-none
//               [&::-webkit-outer-spin-button]:appearance-none
//               [-moz-appearance:textfield]"
//                 value={tip}
//                 onChange={(e) => setTip(e.target.value)}
//               />
//             </form>
//           </div>
//         </>
//       )}
//       <div className="flex flex-col  items-center pt-12  text-brown-primary mt-auto ">
//         <div className="flex justify-between items-center min-w-full">
//           <h2 className="font-bold text-[20px] leading-[24.38px]">Sub TOTAL</h2>
//           <span className="font-bold lg:text-[40px] md:text-[35px] sm:text-[30px] text-[26px] leading-[48.76px]">
//             ${tipDollar ? totalPrice + tipDollar : totalPrice}
//           </span>
//         </div>
//         {reservationsData?.time && (
//           <button
//             onClick={() => summerySubmit()}
//             className="bg-brown-primary rounded-[10px] min-w-full h-12 mt-4 text-white text-[16px] leading-[19.5px] font-semibold"
//           >
//             Proceed To Payment
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default OrderSummery;
/////////////
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
function OrderSummery({
  reservationsData,
  setReservationData,
  onOpen,
  formatTime12Hour,
}) {
  const [tip, setTip] = useState(""); // Current value in the input field
  const [finalTip, setFinalTip] = useState(""); // Final tip percentage
  const [tipId, setTipId] = useState(""); // Currently selected tip button ID
  const [tipDollar, setTipDollar] = useState(0); // Tip amount in dollars

  const { id } = useParams();
  const {
    obj: { totalPrice, totalTime },
    oderSummery,
  } = JSON.parse(sessionStorage.getItem("selectedServices")) || {};

  const professinols =
    JSON.parse(sessionStorage.getItem("professionaldata")) || [];
  const currentProfessionals = professinols.find((val) => val._id === id) || {};
  const { name, image } = currentProfessionals;

  /**
   * Convert tip percentage to dollar amount
   * @param {number} tipPercentage - Tip percentage (e.g., 20 for 20%)
   */
  function TipInMoney(tipPercentage) {
    const calc = (totalPrice / 100) * tipPercentage;
    setTipDollar(calc);
  }

  /**
   * Handle custom tip input changes
   * @param {object} e - Event object
   */
  function handleTipChange(e) {
    const value = e.target.value;
    // Allow only numbers between 0 and 100
    if (value === "" || (Number(value) >= 0 && Number(value) <= 100)) {
      setTip(value);
      setFinalTip(value);
      setTipId(""); // Clear any selected tip button
      TipInMoney(Number(value));
    }
  }

  /**
   * Handle tip button selection
   * @param {string} val - Tip percentage as string (e.g., "20")
   */
  function tipButtonSubmit(val) {
    if (val === tipId) {
      // If the same button is clicked again, deselect it
      setFinalTip("");
      setTipId("");
      setTipDollar(0);
      return;
    }
    setFinalTip(val);
    setTipId(val);
    setTip((value) => {
      // Clear the custom tip input
      setTip("");
      return val;
    });
    TipInMoney(Number(val));
  }

  /**
   * Proceed to payment with the selected tip
   */
  function summerySubmit() {
    onOpen(true);
    setReservationData({
      ...reservationsData,
      subTotal: Number(totalPrice),
      grandTotal: (Number(totalPrice) + Number(tipDollar)).toFixed(1),
      tip: tipDollar,
    });
  }

  useEffect(() => {
    // Optional: Log the current tip details for debugging
    console.log("Final Tip:", finalTip, "Tip Dollar:", tipDollar);
  }, [finalTip, tipDollar]);

  return (
    <div className="min-h-[80vh] flex flex-col gap-2 my-14 pl-4 pr-6 shadow-lg md:pl-6 md:pr-8 py-6 bg-[#ECECEC] min-w-fit rounded-[20px]">
      <h1 className="font-semibold text-[32px] mb-6 text-center text-brown-primary leading-[39.01px]">
        Order Summary
      </h1>
      <p className="font-medium text-brown-primary text-[20px] leading-[24.38px]">
        Professional:
      </p>
      <div className="flex gap-2 mb-2 items-center">
        <img
          src={image || "imgCircle.png"}
          alt="professional"
          className="min-w-12 min-h-12 w-12 h-12 rounded-[50%]"
        />
        <p className="font-semibold capitalize text-[16px] leading-[19.5px]">
          {name}
        </p>
      </div>
      <div className="mb-2">
        <p className="font-medium mb-1 text-brown-primary text-[20px] leading-[24.38px]">
          Services:
        </p>
        {oderSummery?.map((val) => (
          <React.Fragment key={val._id}>
            <p className="font-medium text-[16px] mb-[2px] flex flex-row justify-between leading-[19.5px]">
              <span>{val.title}</span>
              <span className="font-semibold px-4 text-brown-primary text-[18px] leading-[21.94px]">
                ${val.price}
              </span>
            </p>
          </React.Fragment>
        ))}
      </div>
      <div className="mb-2">
        <p className="font-medium mb-1 text-brown-primary text-[20px] leading-[24.38px]">
          Total Services Time:
        </p>
        <p className="font-medium text-[16px] flex justify-between leading-[19.5px]">
          {totalTime} Min
        </p>
      </div>
      {reservationsData?.date && (
        <div className="mb-2">
          <p className="font-medium mb-1 text-brown-primary text-[20px] leading-[24.38px]">
            Date:
          </p>
          <p className="font-medium text-[16px] flex justify-between leading-[19.5px]">
            {new Date(reservationsData.date).toDateString()}
          </p>
        </div>
      )}
      {reservationsData?.time && (
        <div className="mb-2">
          <p className="font-medium mb-1 text-brown-primary text-[20px] leading-[24.38px]">
            Time:
          </p>
          <p className="font-medium text-[16px] flex justify-between leading-[19.5px]">
            {formatTime12Hour(reservationsData.time)}
          </p>
        </div>
      )}
      {reservationsData?.time && (
        <>
          <p className="font-medium mb-1 text-brown-primary flex justify-between text-[20px] leading-[24.38px]">
            <span>Tips</span>
            <span className="font-semibold px-4 text-brown-primary text-[18px] leading-[21.94px]">
              {tipDollar ? tipDollar.toFixed(1) : "__"}$
            </span>
          </p>
          <div className="flex mb-2 justify-evenly">
            {/* Tip Buttons */}
            {["20", "25", "30", "35", "40"].map((val) => (
              <button
                key={val}
                onClick={() => tipButtonSubmit(val)}
                className={`font-normal w-9 h-9 sm:w-10 sm:h-10 border-brown-primary border-[0.5px] text-center flex justify-center items-center rounded-[50%] sm:text-sm text-[12px] ${
                  tipId === val
                    ? "bg-brown-primary text-white"
                    : "bg-white text-brown-primary"
                }`}
              >
                {val}%
              </button>
            ))}

            {/* Custom Tip Input */}
            <input
              type="number"
              placeholder="__%"
              className="bg-white font-normal w-9 h-9 sm:w-10 sm:h-10 border-brown-primary border-[0.5px] text-center flex justify-center items-center rounded-[50%] sm:text-sm text-[12px] placeholder:text-brown-primary  
                [appearance:textfield]
                [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-outer-spin-button]:appearance-none
                [-moz-appearance:textfield]"
              value={tip}
              onChange={handleTipChange}
            />
          </div>
        </>
      )}
      <div className="flex flex-col items-center pt-12 text-brown-primary mt-auto">
        <div className="flex justify-between items-center min-w-full">
          <h2 className="font-bold text-[20px] leading-[24.38px]">Sub TOTAL</h2>
          <span className="font-bold lg:text-[40px] md:text-[35px] sm:text-[30px] text-[26px] leading-[48.76px]">
            $
            {tipDollar
              ? (Number(totalPrice) + Number(tipDollar)).toFixed(1)
              : totalPrice}
          </span>
        </div>
        {reservationsData?.time && (
          <button
            onClick={summerySubmit}
            className="bg-brown-primary rounded-[10px] min-w-full h-12 mt-4 text-white text-[16px] leading-[19.5px] font-semibold"
          >
            Proceed To Payment
          </button>
        )}
      </div>
    </div>
  );
}

export default OrderSummery;
