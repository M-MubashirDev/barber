import { useNavigate, useParams } from "react-router-dom";
import CalendarComp from "./Calendar";
import LinksBar from "./LinksBar";
import OrderSummery from "./OrderSummery";
import { useEffect, useState } from "react";
import Spinner from "../UI/Spinner";
import { useTime } from "./Hooks/useTime";
import PaymentModal from "./PaymentModal";

function Time() {
  const [isPayment, setIsPayment] = useState(false); // for main payment button
  const { timeData, isPending } = useTime(); // get API for the time data
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]); // to get available slots of time from the calendar
  const [selectedDay, setSelectedDay] = useState(null); // the day user selected
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // the current selected time slot
  const [reservationsData, setReservationData] = useState({}); // the id, time select and end etc
  const inquiries = timeData?.inquiries; //
  const timeSlots = inquiries?.map((val) => val.timeSlots); // time slots that are not available from backend
  const { id } = useParams();

  const navigate = useNavigate();
  const currentSelectedServices = JSON.parse(
    // it gives two keys: one selected services and their total
    sessionStorage.getItem("selectedServices")
  );
  const { obj } = currentSelectedServices || {}; // total of selected services
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
  // After the timeSlot is clicked
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

  if (!obj || !Object.keys(obj).length || isPending) return <Spinner />;
  return (
    <section className="font-extrabold text-[32px]  max-w-[1440px] flex flex-col lg:flex-row justify-between py-6 items-center gap-6 mx-auto w-full px-4 sm:px-6 lg:px-8 leading-[38px]">
      {/* Left Side: Calendar and Professional Info */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-2/3">
        <LinksBar />
        <h1 className="booking-h1 text-4xl sm:text-5xl lg:text-6xl text-center    lg:text-left mb-6">
          Choose Date & Time
        </h1>
        <div className="max-w-full">
          <CalendarComp
            timeSlots={timeSlots}
            select={{ selectedDay, setSelectedDay }}
            available={{ availableTimeSlots, setAvailableTimeSlots }}
            totalTime={obj.totalTime}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 mt-6">
          <img
            src={image}
            className="rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover"
            alt="professional image"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl capitalize sm:text-3xl font-semibold leading-tight">
              {name}
            </h2>
            <p className="text-lg sm:text-xl font-semibold leading-snug mt-2">
              Total Time Of Your Services:{" "}
              <span className="italic font-medium">{obj.totalTime} Min</span>
            </p>
          </div>
        </div>
        {selectedDay && (
          <div className="mt-6  w-full">
            <h3 className="text-2xl font-bold mb-4 text-center text-brown-primary sm:text-left">
              Available Times:
            </h3>
            {availableTimeSlots.length > 0 ? (
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {availableTimeSlots.map((slot, idx) => (
                  <li
                    key={idx}
                    className={`border border-brown-primary px-4 py-2 cursor-pointer rounded-[20px] text-center text-lg font-normal transition-colors duration-200 ${
                      selectedTimeSlot === idx
                        ? "bg-brown-primary text-white"
                        : "bg-white text-brown-primary hover:bg-brown-primary hover:text-white"
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
              <p className="text-center text-brown-primary sm:text-left ">
                No available time slots for this day.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Right Side: Order Summary */}
      <div className="lg:min-w-[30%] lg:justify-start lg:place-self-start">
        <OrderSummery
          onOpen={setIsPayment}
          setReservationData={setReservationData}
          reservationsData={reservationsData}
          formatTime12Hour={formatTime12Hour}
        />
      </div>

      {/* Payment Modal */}
      {<PaymentModal isOpen={isPayment} onClose={setIsPayment} />}
    </section>
  );
}

export default Time;
