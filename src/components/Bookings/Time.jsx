import { useNavigate, useParams } from "react-router-dom";
import CalendarComp from "./Calendar";
import LinksBar from "./LinksBar";
import OrderSummery from "./OrderSummery";
import { useEffect, useState } from "react";
import Spinner from "../UI/Spinner";
import { useTime } from "./Hooks/useTime";
import PaymentModal from "./PaymentModal";

function Time() {
  const [isPayment, setIsPayment] = useState(false); //for main payment button
  const { timeData, isPending } = useTime(); //getapi for the time data
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]); //to get availble slots of time from the calendar
  const [selectedDay, setSelectedDay] = useState(null); //the day user selected
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); //the current selected time slot
  const [reservationsData, setReservationData] = useState({}); //the id,time select and end etc
  const inquiries = timeData?.inquiries; //
  const timeSlots = inquiries?.map((val) => val.timeSlots); //time slots that are not availble from backend
  const { id } = useParams();

  const navigate = useNavigate();
  const currentSelectedServices = JSON.parse(
    //it gives two keys one selected serves and there total
    sessionStorage.getItem("selectedServices")
  );
  const { obj } = currentSelectedServices || {}; //total of selected services
  const { currentSelectedId, totalTime } = obj;
  const professionalData = JSON.parse(
    // data about the current professionals
    sessionStorage.getItem("professionaldata")
  )?.filter((val) => val._id === id)[0];
  // console.log(professionalData, obj);
  useEffect(() => {
    if (!obj || !Object.keys(obj).length) {
      navigate("*");
    }
  }, [navigate, obj]);
  const { image, name, _id } = professionalData;
  console.log(image, name, _id);
  if (!obj || !Object.keys(obj).length || isPending) return <Spinner />;

  // Helper to convert 24-hour time to 12-hour AM/PM format
  function formatTime12Hour(time) {
    if (!time || typeof time !== "string") return time;

    const [hourStr, minuteStr] = time.split(":");
    let hour = parseInt(hourStr, 10);
    const minute = minuteStr || "00";
    let suffix = "AM";

    if (hour === 0) {
      hour = 12; // midnight
      suffix = "AM";
    } else if (hour === 12) {
      suffix = "PM"; // noon
    } else if (hour > 12) {
      hour = hour - 12;
      suffix = "PM";
    }

    return `${hour}:${minute} ${suffix}`;
  }
  // after the timeSlote is click
  function SelectedTimeSlots({ idx, currentlyReserved }) {
    setSelectedTimeSlot(idx);

    const reservationData = {
      services: currentSelectedId,
      totalServiceTime: totalTime,
      professional: _id,
      date: selectedDay,
      time: currentlyReserved.startTime || currentlyReserved.start,
    };
    setReservationData(reservationData);
    // console.log("Reservation data:", reservationData);
    // Here you can handle the reservation logic (e.g., API call)
  }

  return (
    <section className="font-extrabold text-[48px] pb-4 max-w-[1440px] justify-center items-center gap-3 flex lg:flex-row flex-col lg:justify-between mx-auto w-[90%] leading-[58.51px]">
      <div className="max-w-fit flex flex-col justify-center">
        <LinksBar />
        <h1 className="booking-h1 ">Choose Date & Time</h1>
        <div className="overflow-x-auto max-w-fit">
          <CalendarComp
            timeSlots={timeSlots}
            select={{ selectedDay, setSelectedDay }}
            available={{ availableTimeSlots, setAvailableTimeSlots }}
            totalTime={obj.totalTime}
          />
        </div>
        <div className="flex sm:flex-row flex-col md:place-content-start  sm:place-content-center  text-center sm:text-start  gap-2 items-center">
          <img
            src={image}
            className="rounded-[50%] max-h-20 h-20 w-20 max-w-20"
            alt="professional image"
          />
          <div>
            <h2 className="text-[24px] font-semibold leading-[29.26px]">
              {name}
            </h2>
            <p className="md:text-[20px] sm:text-[16px] text-[14px]  font-semibold leading-[24.38px]">
              Total Time Of your Services:{" "}
              <span className="italic font-[500px]">{obj.totalTime} Min</span>
            </p>
          </div>
        </div>
        {selectedDay && (
          <div className="mt-6 ">
            <h3 className="text-2xl font-bold mb-2">Available Times</h3>
            {availableTimeSlots.length > 0 ? (
              <ul className="grid max-w-fit sm:max-w-full   grid-cols-2 md:grid-cols-4 gap-2">
                {availableTimeSlots.map((slot, idx) => (
                  <li
                    key={idx}
                    className={`border border-brown-primary px-4 py-2 mb-2 cursor-pointer rounded-[20px] text-center text-lg font-normal ${
                      selectedTimeSlot === idx
                        ? "bg-brown-primary text-white"
                        : "bg-white text-brown-primary"
                    }`}
                    onClick={() =>
                      SelectedTimeSlots({
                        idx,
                        currentlyReserved: {
                          startTime: slot.start,
                          endTime: slot.end,
                        },
                      })
                    }
                  >
                    {/* Convert slot.start to 12-hour format */}
                    {formatTime12Hour(slot.start)}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No available time slots for this day.</p>
            )}
          </div>
        )}
      </div>

      <div className="max-w-fit justify-self-center min-h-[70vh] lg:w-auto mt-6 lg:mt-0">
        <OrderSummery
          onOpen={setIsPayment}
          setReservationData={setReservationData}
          reservationsData={reservationsData}
          formatTime12Hour={formatTime12Hour}
        />
      </div>
      {<PaymentModal isOpen={isPayment} onClose={setIsPayment} />}
    </section>
  );
}

export default Time;
