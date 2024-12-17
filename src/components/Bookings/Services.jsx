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
  const { serviceData, isPending } = useServices();
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentSelectedId, setIsCurrentSelectedId] = useState([]);
  const [totalTime, setotalTime] = useState(0);
  const [obj, setObj] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  //calc total time in mins
  function SumNum(number) {
    if (!Number.isNaN(Number(number))) return Number(number);
    const hourMatch = number.match(/(\d+)\s*hour/);
    const minMatch = number.match(/(\d+)\s*min/);
    const hour = hourMatch ? parseInt(hourMatch) : 0;
    const min = minMatch ? parseInt(minMatch) : 0;
    return hour * 60 + min;
  }

  //calculattion totals
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
  //onChoose time
  function submitServer() {
    if (!currentSelectedId.length) return;
    navigate("time");
  }
  //abstracting the selected services
  const oderSummery = serviceData?.filter((val) =>
    obj?.currentSelectedId?.includes(val._id)
  );
  //set it in the session storage
  sessionStorage.setItem(
    "selectedServices",
    JSON.stringify({ oderSummery, obj })
  );

  if (!id) navigate("/");
  if (isPending) return <Spinner />;
  return (
    <section className=" font-extrabold px-4  max-w-[1440px] mx-auto w-[90%] leading-[58.51px]">
      {/* <div className="justify-center place-content-center gap-3  grid lg:grid-cols-[80%_18rem] md:grid ">
       */}
      <div className="flex flex-col items-center lg:items-start lg:flex-row ">
        <div className="max-w-fit ">
          <LinksBar />
          <h1 className="booking-h1">Choose Services</h1>
          <div className="grid  lg:grid-cols-[20rem_20rem_20rem] md:grid-cols-[20rem_20rem]  gap-4 justify-start">
            {serviceData.map((val) => (
              <Duration
                key={val._id}
                data={val}
                Clicking={() => Clicking(val)}
              />
            ))}
          </div>
          <button
            onClick={submitServer}
            className="font-semibold mt-8  bg-brown-primary min-w-52 min-h-12 text-[16px] leading-[19.5px] rounded-[10px] text-white"
          >
            CHOOSE TIME
          </button>
        </div>
        <div className="min-w-fit  place-self-center">
          {currentSelectedId.length && oderSummery ? <OrderSummery /> : ""}
        </div>
      </div>
    </section>
  );
}

export default Services;
