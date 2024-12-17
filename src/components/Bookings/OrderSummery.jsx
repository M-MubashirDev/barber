import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Tips, TipsInput } from "./Tips";

/* eslint-disable react/prop-types */
function OrderSummery({ reservationsData, onOpen, formatTime12Hour }) {
  const [tip, setTip] = useState("");
  const [finalTip, setFinalTip] = useState("");
  const [tipId, setTipId] = useState("");
  const [tipDollar, setTipDollar] = useState("");
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
  // console.log(totalPrice, totalTime, oderSummery, currentProfessionals);
  function TipInMoney(tip) {
    if (!tip && totalPrice) return;
    const calc = (totalPrice / 100) * tip;
    setTipDollar(calc);
    console.log(tipDollar);
  }
  function tipSubmit(e) {
    e.preventDefault();
    setFinalTip(tip);
    TipInMoney(tip);
    setTip("");
    setTipId("");
  }
  function tipButtonSubmit(val) {
    setFinalTip(val);
    setTipId(val);
    TipInMoney(val);

    console.log(finalTip);
  }
  useEffect(() => {
    console.log(finalTip, tipDollar, tipId);
  }, [finalTip, tipId, tipDollar]);
  return (
    <div className="min-h-[70vh] flex flex-col gap-2   my-14 px-4 py-6 bg-[#ECECEC] min-w-fit  rounded-[20px]">
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
      <div className="mb-2">
        <p className="font-medium text-brown-primary text-[20px] leading-[24.38px]">
          Total Services Time:
        </p>
        <p className="font-medium text-[16px]  flex justify-between leading-[19.5px]">
          {totalTime} Min
        </p>
      </div>
      {reservationsData?.selectedDate && (
        <div className="mb-2">
          <p className="font-medium text-brown-primary text-[20px] leading-[24.38px]">
            Date:
          </p>
          <p className="font-medium text-[16px]  flex justify-between leading-[19.5px]">
            {reservationsData.selectedDate}
          </p>
        </div>
      )}
      {reservationsData?.startTime && (
        <div className="mb-2">
          <p className="font-medium text-brown-primary text-[20px] leading-[24.38px]">
            Time:
          </p>
          <p className="font-medium text-[16px]  flex justify-between leading-[19.5px]">
            {formatTime12Hour(reservationsData.startTime)}
          </p>
        </div>
      )}
      {finalTip && (
        <div className="mb-2">
          <p className="font-medium text-brown-primary flex justify-between  text-[20px] leading-[24.38px]">
            <span>Tips</span>{" "}
            <span className="font-semibold px-4 text-brown-primary text-[18px] leading-[21.94px]">
              {finalTip}%
            </span>
          </p>
        </div>
      )}
      <div className="flex mb-2  justify-evenly">
        {["20", "25", "30", "35", "40"].map((val) => (
          <>
            <button
              onClick={() => tipButtonSubmit(val)}
              className={` font-normal w-9 h-9 sm:w-10 sm:h-10 border-brown-primary border-[0.5px] text-center flex  justify-center items-center rounded-[50%]  sm:text-sm text-[12px]  ${
                tipId === val
                  ? "bg-brown-primary text-white"
                  : "bg-white text-brown-primary"
              }`}
            >
              {val}%
            </button>
          </>
        ))}
        <form onSubmit={tipSubmit}>
          <input
            type="number"
            placeholder="_%"
            className="bg-white font-normal w-9 h-9 sm:w-10 sm:h-10 border-brown-primary border-[0.5px] text-center flex   justify-center items-center rounded-[50%] sm:text-sm text-[12px] placeholder:text-brown-primary  
    [appearance:textfield]
     [&::-webkit-inner-spin-button]:appearance-none
    [&::-webkit-outer-spin-button]:appearance-none
    [-moz-appearance:textfield]"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
        </form>
      </div>
      <div className="flex flex-col  items-center pt-12  text-brown-primary mt-auto ">
        <div className="flex justify-between items-center min-w-full">
          <h2 className="font-bold text-[20px] leading-[24.38px]">Sub TOTAL</h2>
          <span className="font-bold text-[40px] leading-[48.76px]">
            ${tipDollar ? totalPrice + tipDollar : totalPrice}
          </span>
        </div>
        <button
          onClick={() => onOpen(true)}
          className="bg-brown-primary rounded-[10px] min-w-full h-12 mt-4 text-white text-[16px] leading-[19.5px] font-semibold"
        >
          Proceed To Payment
        </button>
      </div>
    </div>
  );
}

export default OrderSummery;
