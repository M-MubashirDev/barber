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
    // Process manualBookingDetails
    inq.manualBookingDetails.forEach((detail) => {
      if (
        detail.date &&
        detail.startTime &&
        detail.endTime &&
        isValidTimeRange(detail.startTime, detail.endTime)
      ) {
        blocked.push({
          date: detail.date,
          startTime: detail.startTime,
          endTime: detail.endTime,
        });
      } else {
        console.warn(
          `Invalid time range for inquiry ID ${inq._id} in manualBookingDetails: startTime (${detail.startTime}) is after endTime (${detail.endTime}).`
        );
      }
    });

    // Process onlineBookingDetails
    inq.onlineBookingDetails.forEach((detail) => {
      if (
        detail.date &&
        detail.startTime &&
        detail.endTime &&
        isValidTimeRange(detail.startTime, detail.endTime)
      ) {
        blocked.push({
          date: detail.date,
          startTime: detail.startTime,
          endTime: detail.endTime,
        });
      } else {
        console.warn(
          `Invalid time range for inquiry ID ${inq._id} in onlineBookingDetails: startTime (${detail.startTime}) is after endTime (${detail.endTime}).`
        );
      }
    });
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

  // Filter inquiries to only those matching the current professional ID
  const filteredInquiries = useMemo(
    () => inquiries.filter((inq) => inq.professional._id === id),
    [inquiries, id]
  );

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
