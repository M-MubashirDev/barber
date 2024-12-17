// import { useNavigate, useParams } from "react-router-dom";
// import CalendarComp from "./Calendar";
// import LinksBar from "./LinksBar";
// import OrderSummery from "./OrderSummery";
// import { useEffect, useState } from "react";
// import Spinner from "../Spinner";
// import { useTime } from "./Hooks/useTime";

// function Time() {
//   const { timeData, isPending } = useTime();
//   const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
//   const [selectedDay, setSelectedDay] = useState(null); // Date selected in Calendar
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // Chosen time slot index

//   const inquiries = timeData?.inquiries;
//   const { id } = useParams();
//   const timeSlots = inquiries?.map((val) => val.timeSlots);

//   const navigate = useNavigate();

//   const currentSelectedServices = JSON.parse(
//     sessionStorage.getItem("selectedServices")
//   );
//   const { obj, oderSummery } = currentSelectedServices || {};

//   useEffect(() => {
//     if (!obj || !Object.keys(obj).length) {
//       navigate("*");
//     }
//   }, [navigate, obj]);

//   if (!obj || !Object.keys(obj).length || isPending) return <Spinner />;

//   // This function is called when user selects a time slot
//   function SelectedTimeSlots({ idx, currentlyReserved }) {
//     setSelectedTimeSlot(idx);

//     // Construct reservation data
//     const reservationData = {
//       id: id, // from useParams
//       selectedDate: selectedDay,
//       startTime: currentlyReserved.startTime || currentlyReserved.start,
//       endTime: currentlyReserved.endTime || currentlyReserved.end,
//     };

//     console.log("Reservation data:", reservationData);

//     // Here you can call an API or handle the reservation as needed
//     // e.g., make a POST request to server with reservationData
//   }

//   return (
//     <section className="font-extrabold text-[48px] max-w-[1440px] gap-3 flex lg:flex-row flex-col lg:justify-between mx-auto w-[90%] leading-[58.51px]">
//       <div className="max-w-fit">
//         <LinksBar />
//         <h1 className="booking-h1">Choose Date & Time</h1>
//         <div className="overflow-x-auto max-w-fit">
//           <CalendarComp
//             timeSlots={timeSlots}
//             select={{ selectedDay, setSelectedDay }}
//             available={{ availableTimeSlots, setAvailableTimeSlots }}
//             totalTime={obj.totalTime}
//           />
//         </div>
//         <div>
//           {selectedDay && (
//             <div className="mt-6">
//               <h3 className="text-2xl font-bold mb-2">
//                 Available Times for {selectedDay}:
//               </h3>
//               {availableTimeSlots.length > 0 ? (
//                 <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
//                   {availableTimeSlots.map((slot, idx) => (
//                     <li
//                       key={idx}
//                       className={`border border-brown-primary px-4 py-2 mb-2 cursor-pointer rounded-[20px] text-center text-lg font-normal ${
//                         selectedTimeSlot === idx
//                           ? "bg-brown-primary text-white"
//                           : "bg-white text-brown-primary"
//                       }`}
//                       onClick={() =>
//                         SelectedTimeSlots({
//                           idx,
//                           currentlyReserved: {
//                             startTime: slot.start,
//                             endTime: slot.end,
//                           },
//                         })
//                       }
//                     >
//                       {slot.start}
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No available time slots for this day.</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       <div>
//         <OrderSummery />
//       </div>
//     </section>
//   );
// }

// export default Time;
//////////////
import { useNavigate, useParams } from "react-router-dom";
import CalendarComp from "./Calendar";
import LinksBar from "./LinksBar";
import OrderSummery from "./OrderSummery";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import { useTime } from "./Hooks/useTime";

function Time() {
  const { timeData, isPending } = useTime();
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const inquiries = timeData?.inquiries;
  const { id } = useParams();
  const timeSlots = inquiries?.map((val) => val.timeSlots);

  const navigate = useNavigate();
  const currentSelectedServices = JSON.parse(
    sessionStorage.getItem("selectedServices")
  );
  const { obj, oderSummery } = currentSelectedServices || {};

  useEffect(() => {
    if (!obj || !Object.keys(obj).length) {
      navigate("*");
    }
  }, [navigate, obj]);

  if (!obj || !Object.keys(obj).length || isPending) return <Spinner />;

  function SelectedTimeSlots({ idx, currentlyReserved }) {
    setSelectedTimeSlot(idx);
    const reservationData = {
      id: id,
      selectedDate: selectedDay,
      startTime: currentlyReserved.startTime || currentlyReserved.start,
      endTime: currentlyReserved.endTime || currentlyReserved.end,
    };

    console.log("Reservation data:", reservationData);
    // Here you can handle the reservation logic
  }

  return (
    <section className="font-extrabold text-[48px] max-w-[1440px] gap-3 flex lg:flex-row flex-col lg:justify-between mx-auto w-[90%] leading-[58.51px]">
      <div className="max-w-fit">
        <LinksBar />
        <h1 className="booking-h1">Choose Date & Time</h1>
        <div className="overflow-x-auto max-w-fit">
          <CalendarComp
            timeSlots={timeSlots}
            select={{ selectedDay, setSelectedDay }}
            available={{ availableTimeSlots, setAvailableTimeSlots }}
            totalTime={obj.totalTime}
          />
        </div>

        {selectedDay && (
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-2">
              Available Times for {selectedDay}:
            </h3>
            {availableTimeSlots.length > 0 ? (
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
                    {slot.start}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No available time slots for this day.</p>
            )}
          </div>
        )}
      </div>

      <div className="w-full lg:w-auto mt-6 lg:mt-0">
        <OrderSummery />
      </div>
    </section>
  );
}

export default Time;
