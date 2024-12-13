import { useNavigate } from "react-router-dom";
import CalendarComp from "./Calendar";
import LinksBar from "./LinksBar";
import OrderSummery from "./OrderSummery";
import { useEffect } from "react";
import Spinner from "../Spinner";
function Time() {
  const navigate = useNavigate();
  const currentSelectedServices = JSON.parse(
    sessionStorage.getItem("selectedServices")
  );
  const { obj, oderSummery } = currentSelectedServices;
  useEffect(() => {
    if (!obj || !Object.keys(obj).length) {
      navigate("*"); // Redirect to the home page if obj is empty or undefined
    }
  }, [navigate, obj]);
  if (!obj || !Object.keys(obj).length) return <Spinner />;
  return (
    <section className=" font-extrabold text-[48px] max-w-[1440px]   gap-3  flex lg:flex-row flex-col lg:justify-between  mx-auto w-[90%] leading-[58.51px]">
      <div className="max-w-fit ">
        <LinksBar />
        <h1 className="booking-h1">Choose DaTE & TIME</h1>
        {/* change */}
        <div className="overflow-x-auto">
          <CalendarComp />
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

export default Time;
