// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import LinksBar from "./LinksBar";
// import OrderSummery from "./OrderSummery";
// import Spinner from "../UI/Spinner";
// import PaymentModal from "./PaymentModal";
// import CalendarComp from "./Calendar"; // <-- We'll create this file below.
// import { useTime } from "./Hooks/useTime"; // <-- your custom hook that fetches `timeData`
// import { useShopTiming } from "./Hooks/useShopTiming";

// /**
//  * Given a date range `{ from, to }`, generate an array of "YYYY-MM-DD" strings
//  * for each calendar day from `from` up to and including `to`.
//  */
// function getDateRangeAsArray(from, to) {
//   const result = [];
//   const start = new Date(from);
//   const end = new Date(to);
//   if (start > end) return result;

//   let current = new Date(start);
//   while (current <= end) {
//     const y = current.getFullYear();
//     const m = String(current.getMonth() + 1).padStart(2, "0");
//     const d = String(current.getDate()).padStart(2, "0");
//     result.push(`${y}-${m}-${d}`);
//     current.setDate(current.getDate() + 1);
//   }
//   return result;
// }

// /**
//  * Transform your `inquiries` array into an array of blocked slots with:
//  *   { date: "YYYY-MM-DD", startTime: "HH:MM", endTime: "HH:MM" }
//  * for each unavailable time or day.
//  */
// function buildBlockedSlots(inquiries) {
//   const blocked = [];
//   inquiries.forEach((inq) => {
//     // 1) If there's a manualBookingDetails => block that exact date/time
//     if (
//       inq?.manualBookingDetails?.date &&
//       inq?.manualBookingDetails?.startTime &&
//       inq?.manualBookingDetails?.endTime
//     ) {
//       blocked.push({
//         date: inq.manualBookingDetails.date, // e.g. "2024-12-24"
//         startTime: inq.manualBookingDetails.startTime, // e.g. "16:35"
//         endTime: inq.manualBookingDetails.endTime, // e.g. "17:25"
//       });
//     }

//     // 2) If there's a notAvailable array => block entire days from `from` to `to`
//     const notAvailArr = inq?.professional?.notAvailable || [];
//     notAvailArr.forEach((range) => {
//       const dayStrings = getDateRangeAsArray(range.from, range.to);
//       // For each day in that range, block the entire day from 00:00 -> 23:59
//       dayStrings.forEach((dayStr) => {
//         blocked.push({
//           date: dayStr,
//           startTime: "00:00",
//           endTime: "23:59",
//         });
//       });
//     });
//   });

//   return blocked;
// }

// function Time() {
//   const { timeData, isPending } = useTime(); // get API for the time data
//   const { shopTime, pendingShopeTiming } = useShopTiming();
//   const { id } = useParams();
//   const professionalData = JSON.parse(
//     sessionStorage.getItem("professionaldata")
//   )?.find((val) => val._id === id);
//   // const timeData = console.log(timeData, "😁😁😁");
//   const { image, name, notAvailable, _id } = professionalData;
//   const inquiries = timeData?.inquiries || [];
//   const navigate = useNavigate();
//   // For Payment Modal
//   const [isPayment, setIsPayment] = useState(false);

//   // For Calendar
//   const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
//   const [selectedDay, setSelectedDay] = useState(null);

//   // For Reservation
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
//   const [reservationsData, setReservationData] = useState({});

//   // Example: session data about selected services
//   const currentSelectedServices = JSON.parse(
//     sessionStorage.getItem("selectedServices")
//   );
//   const { obj } = currentSelectedServices || {}; // e.g. { currentSelectedId, totalTime }
//   const { currentSelectedId, totalTime } = obj || {};

//   // Example: professional data from session
//   useEffect(() => {
//     // If no selected services, redirect
//     if (!obj || !Object.keys(obj).length) {
//       navigate("*");
//     }
//   }, [navigate, obj]);

//   // if (!professionalData || ) {
//   //   return <Spinner />;
//   // }

//   console.log(notAvailable);

//   // Build the final "timeSlots" array from `inquiries`
//   // each element => { date: "YYYY-MM-DD", startTime: "HH:MM", endTime: "HH:MM" }
//   const blockedSlots = buildBlockedSlots(inquiries);
//   // console.log(blockedSlots);
//   /**
//    * Convert "HH:MM" to a 12-hour format with AM/PM
//    */
//   function formatTime12Hour(time) {
//     if (!time || typeof time !== "string") return time;
//     const [hourStr, minuteStr] = time.split(":");
//     let hour = parseInt(hourStr, 10);
//     const minute = minuteStr || "00";
//     let suffix = "AM";

//     if (hour === 0) {
//       hour = 12; // midnight
//       suffix = "AM";
//     } else if (hour === 12) {
//       suffix = "PM";
//     } else if (hour > 12) {
//       hour -= 12;
//       suffix = "PM";
//     }

//     return `${hour}:${minute} ${suffix}`;
//   }

//   // After user clicks a time slot
//   function handleSelectTimeSlot({ idx, currentlyReserved }) {
//     setSelectedTimeSlot(idx);

//     const reservationData = {
//       services: currentSelectedId,
//       totalServiceTime: totalTime,
//       professional: _id,
//       date: selectedDay, // e.g. "Tue Dec 24 2024" or you can store ISO
//       time: currentlyReserved.startTime || currentlyReserved.start,
//     };
//     setReservationData(reservationData);
//   }

//   // Show spinner if still loading or missing data
//   if (!obj || !Object.keys(obj).length || isPending || pendingShopeTiming) {
//     return <Spinner />;
//   }

//   return (
//     <section className="font-extrabold text-[32px] max-w-[1440px] flex flex-col lg:flex-row justify-between py-6 items-center gap-6 mx-auto w-full px-4 sm:px-6 lg:px-8 leading-[38px]">
//       {/* LEFT SIDE */}
//       <div className="flex flex-col items-center lg:items-start w-full lg:w-2/3">
//         <LinksBar />
//         <h1 className="booking-h1 text-4xl sm:text-5xl lg:text-6xl text-center lg:text-left mb-6">
//           Choose Date & Time
//         </h1>

//         <div className="max-w-full">
//           <CalendarComp
//             timeSlots={blockedSlots} // pass date-based blocked slots
//             select={{ selectedDay, setSelectedDay }}
//             available={{ availableTimeSlots, setAvailableTimeSlots }}
//             // totalTime={totalTime} // used as the slot duration
//             // shopTime={[
//             //   { day: "Monday", time: "09:00-18:00" },
//             //   { day: "Tuesday", time: "09:00-18:00" },
//             //   { day: "Wednesday", time: "09:00-18:00" },
//             //   { day: "Thursday", time: "09:00-22:00" },
//             //   { day: "Friday", time: "09:00-18:00" },
//             //   { day: "Saturday", time: "09:00-20:00" },
//             //   { day: "Sunday", time: "09:00-20:00" },
//             // ]}
//             shopTime={shopTime}
//           />
//         </div>

//         {/* PROFESSIONAL INFO */}
//         <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 mt-6">
//           <img
//             src={image || "imgCircle.png"}
//             className="rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover"
//             alt="professional"
//           />
//           <div className="text-center sm:text-left">
//             <h2 className="text-2xl capitalize sm:text-3xl font-semibold leading-tight">
//               {name}
//             </h2>
//             <p className="text-lg sm:text-xl font-semibold leading-snug mt-2">
//               Total Time Of Your Services:{" "}
//               <span className="italic font-medium">{totalTime} Min</span>
//             </p>
//           </div>
//         </div>

//         {/* TIME SLOTS FOR THE SELECTED DAY */}
//         {selectedDay && (
//           <div className="mt-6 w-full">
//             <h3 className="text-2xl font-bold mb-4  text-center text-brown-primary lg:text-left ">
//               Available Times:
//             </h3>

//             {availableTimeSlots.length > 0 ? (
//               <ul className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-3">
//                 {availableTimeSlots.map((slot, idx) => (
//                   <li
//                     key={idx}
//                     className={`border border-brown-primary hover:shadow-xl px-4 py-2 cursor-pointer rounded-[20px] text-center text-lg font-normal transition-colors duration-200 ${
//                       selectedTimeSlot === idx
//                         ? "bg-brown-primary text-white"
//                         : "bg-white text-brown-primary hover:bg-brown-primary hover:text-white"
//                     }`}
//                     onClick={() =>
//                       handleSelectTimeSlot({
//                         idx,
//                         currentlyReserved: {
//                           startTime: slot.start,
//                           endTime: slot.end,
//                         },
//                       })
//                     }
//                   >
//                     {formatTime12Hour(slot.start)}
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-center justify-self-center xl:justify-self-start shadow-sm max-w-fit text-brown-primary text-[14px] lg:text-[24px] md:text-[20px] sm:text-[16px] xl:text-left">
//                 No available time slots for this day.
//               </p>
//             )}
//           </div>
//         )}
//       </div>

//       {/* RIGHT SIDE: ORDER SUMMARY */}
//       <div className="lg:min-w-[30%] lg:justify-start lg:place-self-start">
//         <OrderSummery
//           onOpen={setIsPayment}
//           setReservationData={setReservationData}
//           reservationsData={reservationsData}
//           formatTime12Hour={formatTime12Hour}
//         />
//       </div>

//       {/* PAYMENT MODAL */}
//       <PaymentModal
//         isOpen={isPayment}
//         onClose={setIsPayment}
//         setReservationData={setReservationData}
//         reservationsData={reservationsData}
//       />
//     </section>
//   );
// }

// export default Time;
//////////////////////
// Time.js
// Time.js
// Time.js
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import LinksBar from "./LinksBar";
import OrderSummery from "./OrderSummery";
import Spinner from "../UI/Spinner";
import PaymentModal from "./PaymentModal";
import CalendarComp from "./Calendar";
import { useTime } from "./Hooks/useTime"; // Custom hook to fetch `timeData`
import { useShopTiming } from "./Hooks/useShopTiming";

/**
 * Given a date range `{ from, to }`, generate an array of "YYYY-MM-DD" strings
 * for each calendar day from `from` up to and including `to`.
 */
function getDateRangeAsArray(from, to) {
  const result = [];
  const start = new Date(from);
  const end = new Date(to);
  if (start > end) return result;

  let current = new Date(start);
  while (current <= end) {
    const y = current.getFullYear();
    const m = String(current.getMonth() + 1).padStart(2, "0");
    const d = String(current.getDate()).padStart(2, "0");
    result.push(`${y}-${m}-${d}`);
    current.setDate(current.getDate() + 1);
  }
  return result;
}

/**
 * Validate that startTime is before endTime
 * @param {string} startTime - "HH:MM"
 * @param {string} endTime - "HH:MM"
 * @returns {boolean}
 */
function isValidTimeRange(startTime, endTime) {
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);

  const start = new Date();
  start.setHours(startHour, startMinute, 0, 0);

  const end = new Date();
  end.setHours(endHour, endMinute, 0, 0);

  return start < end;
}

/**
 * Transform your `inquiries` array into an array of blocked slots with:
 *   { date: "YYYY-MM-DD", startTime: "HH:MM", endTime: "HH:MM" }
 * for each unavailable time.
 */
function buildBlockedSlotsFromInquiries(inquiries) {
  const blocked = [];
  inquiries.forEach((inq) => {
    // 1) If there's manualBookingDetails, block that exact date/time
    if (
      inq?.manualBookingDetails?.date &&
      inq?.manualBookingDetails?.startTime &&
      inq?.manualBookingDetails?.endTime
    ) {
      if (
        isValidTimeRange(
          inq.manualBookingDetails.startTime,
          inq.manualBookingDetails.endTime
        )
      ) {
        blocked.push({
          date: inq.manualBookingDetails.date, // e.g., "2024-12-31"
          startTime: inq.manualBookingDetails.startTime, // e.g., "16:35"
          endTime: inq.manualBookingDetails.endTime, // e.g., "17:25"
        });
      } else {
        console.warn(
          `Invalid time range for inquiry ID ${inq._id}: startTime (${inq.manualBookingDetails.startTime}) is after endTime (${inq.manualBookingDetails.endTime}).`
        );
      }
    }
  });
  return blocked;
}

/**
 * Transform `notAvailable` array into blocked slots
 * @param {Array} notAvailable - Array of { from: "YYYY-MM-DD", to: "YYYY-MM-DD" }
 * @returns {Array} blockedSlots
 */
function buildBlockedSlotsFromNotAvailable(notAvailable) {
  const blocked = [];
  notAvailable.forEach((range) => {
    const dayStrings = getDateRangeAsArray(range.from, range.to);
    dayStrings.forEach((dayStr) => {
      blocked.push({
        date: dayStr,
        startTime: "00:00",
        endTime: "23:59",
      });
    });
  });
  return blocked;
}

function Time() {
  const { id } = useParams(); // Professional ID from URL
  const navigate = useNavigate();

  // Fetch data using custom hooks
  const { timeData, isPending, error: timeError } = useTime(); // Fetch inquiries
  const {
    shopTime,
    pendingShopeTiming,
    error: shopTimeError,
  } = useShopTiming(); // Fetch shop timing

  // Extract professionalData from sessionStorage
  const professionalData = useMemo(() => {
    const data = sessionStorage.getItem("professionaldata");
    if (!data) return null;
    return JSON.parse(data).find((val) => val._id === id);
  }, [id]);

  // State management for Payment Modal
  const [isPayment, setIsPayment] = useState(false);

  // State management for Calendar
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  // State management for Reservation
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [reservationsData, setReservationData] = useState({});

  // Session data about selected services
  const currentSelectedServices = useMemo(() => {
    const data = sessionStorage.getItem("selectedServices");
    if (!data) return null;
    return JSON.parse(data);
  }, []);

  const { obj } = currentSelectedServices || {}; // e.g., { currentSelectedId, totalTime }
  const { currentSelectedId, totalTime } = obj || {};

  useEffect(() => {
    // If no selected services, redirect
    if (!obj || !Object.keys(obj).length) {
      navigate("*");
    }
  }, [navigate, obj]);

  // Handle errors from hooks
  useEffect(() => {
    if (timeError) {
      console.error("Error fetching inquire data:", timeError.message);
      // Optionally, navigate to an error page or show a notification
    }
    if (shopTimeError) {
      console.error("Error fetching shop timing data:", shopTimeError.message);
      // Optionally, navigate to an error page or show a notification
    }
  }, [timeError, shopTimeError]);

  // Show spinner if still loading or missing data

  const { image = "imgCircle.png", name, notAvailable, _id } = professionalData;
  const inquiries = timeData?.inquires || []; // Adjusted based on your data structure
  console.log("Inquiries:😁😁", inquiries);

  // Filter inquiries to only those matching the current professional ID
  const filteredInquiries = useMemo(
    () => inquiries.filter((inq) => inq.professional._id === id),
    [inquiries, id]
  );

  console.log("Filtered Inquiries:", filteredInquiries);

  // Build blockedSlots from inquiries
  const blockedSlotsFromInquiries = useMemo(
    () => buildBlockedSlotsFromInquiries(filteredInquiries),
    [filteredInquiries]
  );

  // Build blockedSlots from notAvailable
  const blockedSlotsFromNotAvailable = useMemo(
    () => buildBlockedSlotsFromNotAvailable(notAvailable),
    [notAvailable]
  );

  // Combine both blockedSlots
  const blockedSlots = useMemo(() => {
    return [...blockedSlotsFromInquiries, ...blockedSlotsFromNotAvailable];
  }, [blockedSlotsFromInquiries, blockedSlotsFromNotAvailable]);

  console.log("Combined Blocked Slots:😁😁", blockedSlots);

  /**
   * Convert "HH:MM" to a 12-hour format with AM/PM
   */
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
      suffix = "PM";
    } else if (hour > 12) {
      hour -= 12;
      suffix = "PM";
    }

    return `${hour}:${minute} ${suffix}`;
  }

  // After user clicks a time slot
  function handleSelectTimeSlot({ idx, currentlyReserved }) {
    setSelectedTimeSlot(idx);

    const reservationData = {
      services: currentSelectedId,
      totalServiceTime: totalTime,
      professional: _id,
      date: selectedDay, // e.g., "2024-12-24"
      time: currentlyReserved.startTime || currentlyReserved.start,
    };
    setReservationData(reservationData);
  }
  console.log(totalTime);

  if (isPending || pendingShopeTiming || !obj || !Object.keys(obj).length) {
    return <Spinner />;
  }

  if (!professionalData) {
    // Handle cases where professionalData is missing
    return <div>Professional not found.</div>;
  }
  return (
    <section className="font-extrabold text-[32px] max-w-[1440px] flex flex-col lg:flex-row justify-between py-6 items-center gap-6 mx-auto w-full px-4 sm:px-6 lg:px-8 leading-[38px]">
      {/* LEFT SIDE */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-2/3">
        <LinksBar />
        <h1 className="booking-h1 text-4xl sm:text-5xl lg:text-6xl text-center lg:text-left mb-6">
          Choose Date & Time
        </h1>

        <div className="max-w-full">
          <CalendarComp
            timeSlots={blockedSlots} // Pass combined blocked slots
            select={{ selectedDay, setSelectedDay }}
            available={{ availableTimeSlots, setAvailableTimeSlots }}
            shopTime={shopTime}
            lastSlot={totalTime}
          />
        </div>

        {/* PROFESSIONAL INFO */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 mt-6">
          <img
            src={image}
            className="rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover"
            alt="professional"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl capitalize sm:text-3xl font-semibold leading-tight">
              {name}
            </h2>
            <p className="text-lg sm:text-xl font-semibold leading-snug mt-2">
              Total Time Of Your Services:{" "}
              <span className="italic font-medium">{totalTime} Min</span>
            </p>
          </div>
        </div>

        {/* TIME SLOTS FOR THE SELECTED DAY */}
        {selectedDay && (
          <div className="mt-6 w-full">
            <h3 className="text-2xl font-bold mb-4 text-center text-brown-primary lg:text-left">
              Available Times:
            </h3>

            {availableTimeSlots.length > 0 ? (
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {availableTimeSlots.map((slot, idx) => (
                  <li
                    key={idx}
                    className={`border border-brown-primary hover:shadow-xl px-4 py-2 cursor-pointer rounded-[20px] text-center text-lg font-normal transition-colors duration-200 ${
                      selectedTimeSlot === idx
                        ? "bg-brown-primary text-white"
                        : "bg-white text-brown-primary hover:bg-brown-primary hover:text-white"
                    }`}
                    onClick={() =>
                      handleSelectTimeSlot({
                        idx,
                        currentlyReserved: {
                          startTime: slot.start,
                          endTime: slot.end,
                        },
                      })
                    }
                  >
                    {formatTime12Hour(slot.start)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center justify-self-center xl:justify-self-start shadow-sm max-w-fit text-brown-primary text-[14px] lg:text-[24px] md:text-[20px] sm:text-[16px] xl:text-left">
                No available time slots for this day.
              </p>
            )}
          </div>
        )}
      </div>

      {/* RIGHT SIDE: ORDER SUMMARY */}
      <div className="lg:min-w-[30%] lg:justify-start lg:place-self-start">
        <OrderSummery
          onOpen={setIsPayment}
          setReservationData={setReservationData}
          reservationsData={reservationsData}
          formatTime12Hour={formatTime12Hour}
        />
      </div>

      {/* PAYMENT MODAL */}
      <PaymentModal
        isOpen={isPayment}
        onClose={setIsPayment}
        setReservationData={setReservationData}
        reservationsData={reservationsData}
      />
    </section>
  );
}

export default Time;
