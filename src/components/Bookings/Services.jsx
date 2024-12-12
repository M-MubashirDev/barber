// import { useLocation } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Duration from "./Duration";
import LinksBar from "./LinksBar";
import OrderSummery from "./OrderSummery";
import { useServices } from "./Hooks/useServices";
import Spinner from "../Spinner";
import { useState } from "react";
// import { useContextMain } from "./Hooks/useContext";

function Services() {
  // const { setMainData } = useContextMain();
  // const { pathname } = useLocation();
  // const navigate = useNavigate();
  const { serviceData, isPending } = useServices();
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentSelectedId, setIsCurrentSelectedId] = useState([]);
  const [totalTime, setotalTime] = useState(0);
  const [obj, setObj] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  function SumNum(number) {
    if (!Number.isNaN(Number(number))) return Number(number);
    const hourMatch = number.match(/(\d+)\s*hour/);
    const minMatch = number.match(/(\d+)\s*min/);
    const hour = hourMatch ? parseInt(hourMatch) : 0;
    const min = minMatch ? parseInt(minMatch) : 0;
    return hour * 60 + min;
  }
  function Clicking(val) {
    // Calculate the new values
    let newSelectedIds, newTotalPrice, newTotalTime;
    const mins = SumNum(val.time);

    if (currentSelectedId.includes(val._id)) {
      newSelectedIds = currentSelectedId.filter((check) => check !== val._id);
      newTotalPrice = totalPrice - Number(val.price);
      newTotalTime = mins ? totalTime - mins : totalTime;
    } else {
      newSelectedIds = [...currentSelectedId, val._id];
      newTotalPrice = totalPrice + Number(val.price);
      newTotalTime = mins ? totalTime + mins : totalTime;
    }

    setIsCurrentSelectedId(newSelectedIds);
    setTotalPrice(newTotalPrice);
    setotalTime(newTotalTime);

    setObj({
      ...obj,
      totalPrice: newTotalPrice,
      currentSelectedId: newSelectedIds,
      totalTime: newTotalTime,
    });
  }
  function submitServer() {
    if (!currentSelectedId.length) return;
    navigate("time");
  }
  const oderSummery = serviceData?.filter((val) =>
    obj?.currentSelectedId?.includes(val._id)
  );
  ///serssion storage
  sessionStorage.setItem(
    "selectedServices",
    JSON.stringify({ oderSummery, obj })
  );

  if (!id) navigate("/");
  if (isPending) return <Spinner />;
  return (
    <section className=" font-extrabold text-[48px] max-w-[1440px] justify-center  gap-3  grid lg:grid-cols-[1fr_auto] md:grid  mx-auto w-[90%] leading-[58.51px]">
      <div className="max-w-fit ">
        <LinksBar />
        <h1 className="booking-h1">Choose Services</h1>
        <div className="grid  lg:grid-cols-[20rem_20rem_20rem] md:grid-cols-[20rem_20rem] gap-4 justify-start">
          {serviceData.map((val) => (
            <Duration key={val._id} data={val} Clicking={() => Clicking(val)} />
          ))}
        </div>
        <button
          onClick={submitServer}
          className="font-semibold mt-8  bg-brown-primary min-w-52 min-h-12 text-[16px] leading-[19.5px] rounded-[10px] text-white"
        >
          CHOOSE TIME
        </button>
      </div>
      <div>
        {currentSelectedId.length && oderSummery ? <OrderSummery /> : ""}
      </div>
    </section>
  );
}

export default Services;
