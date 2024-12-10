import CalendarComp from "./Calendar";
import LinksBar from "./LinksBar";
import OrderSummery from "./OrderSummery";
function Time() {
  return (
    <section className=" font-extrabold text-[48px] max-w-[1440px] justify-center  gap-3  grid lg:grid-cols-[1fr_auto] md:grid  mx-auto w-[90%] leading-[58.51px]">
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
