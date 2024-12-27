// import { useLocation } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Duration from "./Duration";
import LinksBar from "./LinksBar";
import OrderSummery from "./OrderSummery";
import { useServices } from "./Hooks/useServices";
import Spinner from "../UI/Spinner";
import { useState } from "react";

function Services() {
  const { serviceData, isPending } = useServices();
  console.log(serviceData);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentSelectedId, setIsCurrentSelectedId] = useState([]);
  const [totalTime, setotalTime] = useState(0);
  const [obj, setObj] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const professionalServices = serviceData?.filter((service) =>
    service.assignedProfessionals?.some(
      (professional) => professional._id === id
    )
  );
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
  // console.log(
  //   "separatedServices:",
  //   oderSummery,
  //   "totalServices",
  //   obj,
  //   serviceData
  // );
  if (!id) navigate("/");
  if (isPending) return <Spinner />;
  if (!professionalServices.length)
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center shadow-lg p-6 rounded-lg bg-gray-50">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#523939] mb-4">
            There are no services for this professional.
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="relative font-montserrat  inline-flex items-center justify-center rounded-[10px]  overflow-hidden  tracking-tighter  group border sm:place-self-center lg:place-self-start   border-brown-primary text-[14px] sm:text-[16px] px-2 sm:w-60 md:w-72 h-11 bg-white text-brown-primary hover:bg-[#4b2e2e] hover:shadow-lg !shadow-brown-primary hover:text-white hover-styling"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#4b2e2e]  rounded-full group-hover:w-72 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
            <span className="relative">Other Professionals</span>
          </button>
        </div>
      </div>
    );
  return (
    <section className="font-extrabold px-4 py-10  max-w-[1440px] mx-auto w-[90%] leading-[58.51px]">
      {/* <div className="justify-center place-content-center gap-3  grid lg:grid-cols-[80%_18rem] md:grid ">
       */}
      <div className="flex flex-col items-center  lg:gap-8 justify-between  lg:items-start lg:flex-row ">
        <div className="max-w-fit flex flex-col lg:items-start items-center">
          <LinksBar />
          <h1 className="booking-h1">Choose Services</h1>
          <div className="grid md:grid-cols-2 gap-4 max-w-80 md:min-w-[40rem] items-center lg:justify-start">
            {professionalServices?.map((val) => (
              <Duration
                key={val._id}
                data={val}
                Clicking={() => Clicking(val)}
              />
            ))}
          </div>
          <button
            onClick={submitServer}
            disabled={!(currentSelectedId.length && oderSummery)}
            className={`font-semibold mt-8  bg-brown-primary ${
              currentSelectedId.length && oderSummery
                ? "cursor-pointer"
                : "cursor-not-allowed"
            } min-w-52 min-h-12 text-[16px] max-w-fit leading-[19.5px] i rounded-[10px] text-white`}
          >
            CHOOSE TIME
          </button>
        </div>
        <div className="lg:min-w-[30%] lg:justify-start lg:place-self-start">
          {currentSelectedId.length && oderSummery ? <OrderSummery /> : ""}
        </div>
      </div>
    </section>
  );
}

export default Services;
