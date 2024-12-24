import { useEffect, useState } from "react";

const CalendarComp = ({
  timeSlots,
  select,
  available,
  totalTime,
  shopTime,
}) => {
  const [currentDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState("current");
  const [blockedTimeSlots, setBlockedTimeSlots] = useState({});
  const [notAvailableDates, setNotAvailableDates] = useState([]);

  const { availableTimeSlots, setAvailableTimeSlots } = available;
  const { selectedDay, setSelectedDay } = select;

  // Only allow clicks within [today, oneMonthFromNow]
  const oneMonthFromNow = new Date(currentDate);
  oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

  // Utility: month name
  function getMonthName(monthIndex, year) {
    const date = new Date(year, monthIndex, 1);
    return date.toLocaleString("default", { month: "long" });
  }

  // Utility: how many days in this month
  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  // Utility: which weekday does the month start on? (0=Sun,1=Mon,...)
  function getStartDay(year, month) {
    return new Date(year, month, 1).getDay();
  }

  function handleMonthSelection(month) {
    setSelectedMonth(month);
    setSelectedDay(null);
    setAvailableTimeSlots([]);
  }

  // Convert "HH:MM" => minutes
  function convertToMinutes(time) {
    if (!time || typeof time !== "string") return null;
    const [hrStr, minStr] = time.split(":");
    const hour = parseInt(hrStr, 10);
    const minute = parseInt(minStr, 10);
    if (isNaN(hour) || isNaN(minute)) return null;
    return hour * 60 + minute;
  }

  // Overlap check
  function isOverlap(slot1, slot2) {
    const s1Start = convertToMinutes(slot1.start);
    const s1End = convertToMinutes(slot1.end);
    const s2Start = convertToMinutes(slot2.startTime);
    const s2End = convertToMinutes(slot2.endTime);

    if ([s1Start, s1End, s2Start, s2End].includes(null)) {
      return false;
    }
    return s1Start < s2End && s1End > s2Start;
  }

  // Generate slots from shopStart -> shopEnd in `totalTime` increments
  function generateTimeSlots(start, slotDuration, end) {
    const slots = [];
    const [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);

    let current = new Date(0, 0, 0, startH, startM);
    const endTime = new Date(0, 0, 0, endH, endM);

    while (current < endTime) {
      const slotStart = current.toTimeString().slice(0, 5);
      current.setMinutes(current.getMinutes() + slotDuration);
      const slotEnd =
        current > endTime ? end : current.toTimeString().slice(0, 5);

      if (slotStart && slotEnd && slotStart !== slotEnd) {
        slots.push({ start: slotStart, end: slotEnd });
      }
    }
    return slots;
  }

  // Filter out blocked times
  function getAvailableTimeSlots(allSlots, blockedSlots) {
    return allSlots.filter(
      (slot) => !blockedSlots.some((blocked) => isOverlap(slot, blocked))
    );
  }

  // Get opening and closing times for the selected day
  function getShopTimesForDay(day) {
    if (Array.isArray(shopTime)) {
      const dayData = shopTime.find((item) => item.day === day);
      if (dayData && dayData.time) {
        const [start, end] = dayData.time.split("-");
        return { shopStart: start, shopEnd: end };
      }
    } else if (typeof shopTime === "object" && shopTime !== null) {
      return { shopStart: shopTime.shopStart, shopEnd: shopTime.shopEnd };
    }
    return { shopStart: "09:00", shopEnd: "18:00" }; // Default times if not found
  }

  // Check if a date is within the not available dates range
  function isDateNotAvailable(date) {
    return notAvailableDates.some(({ from, to }) => {
      const fromDate = new Date(from);
      const toDate = new Date(to);
      return date >= fromDate && date <= toDate;
    });
  }

  // When user clicks a day in the calendar
  function onClickDay(dayNumber, dateObject) {
    const localDateString = dateObject.toLocaleDateString("en-CA");

    if (isDateNotAvailable(dateObject)) {
      return; // Do nothing if the date is not available
    }

    setSelectedDay(dateObject.toDateString());

    const isToday = dateObject.toDateString() === currentDate.toDateString();
    const currentHour = currentDate.getHours();
    const shopDay = dateObject.toLocaleString("default", { weekday: "long" });
    const { shopStart, shopEnd } = getShopTimesForDay(shopDay);
    const shopStartHour = parseInt(shopStart.split(":")[0], 10);

    let startingTime;
    if (isToday && currentHour >= shopStartHour) {
      startingTime = `${currentHour + 1}:00`;
    } else {
      startingTime = shopStart;
    }

    const allSlots = generateTimeSlots(startingTime, totalTime, shopEnd);
    const blockedSlots = blockedTimeSlots[localDateString] || [];
    const availableSlots = getAvailableTimeSlots(allSlots, blockedSlots);
    setAvailableTimeSlots(availableSlots);

    console.log("Clicked dateObj =>", dateObject);
    console.log("Local date =>", localDateString);
    console.log("Blocked =>", blockedSlots);
    console.log("Available =>", availableSlots);
  }

  useEffect(() => {
    if (Array.isArray(timeSlots) && timeSlots.length > 0) {
      const flattened = timeSlots.flat();
      const map = {};

      flattened.forEach((slot) => {
        if (!slot.date || !slot.startTime || !slot.endTime) {
          console.warn("Malformed slot:", slot);
          return;
        }
        if (!map[slot.date]) {
          map[slot.date] = [];
        }
        map[slot.date].push({
          startTime: slot.startTime,
          endTime: slot.endTime,
        });
      });

      setBlockedTimeSlots(map);
    } else {
      setBlockedTimeSlots({});
    }
  }, [timeSlots]);

  useEffect(() => {
    if (Array.isArray(timeSlots) && timeSlots.length > 0) {
      const notAvailable = timeSlots.reduce((acc, inquiry) => {
        if (inquiry?.professional?.notAvailable) {
          acc.push(...inquiry.professional.notAvailable);
        }
        return acc;
      }, []);
      setNotAvailableDates(notAvailable);
    }
  }, [timeSlots]);

  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const nextMonthIndex = (currentMonthIndex + 1) % 12;
  const nextMonthYear =
    currentMonthIndex === 11 ? currentYear + 1 : currentYear;
  const monthIndex =
    selectedMonth === "current" ? currentMonthIndex : nextMonthIndex;
  const year = selectedMonth === "current" ? currentYear : nextMonthYear;

  const daysInMonth = getDaysInMonth(year, monthIndex);
  const startDay = getStartDay(year, monthIndex);

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

  const today = new Date();
  const isCurrentMonth =
    today.getMonth() === monthIndex && today.getFullYear() === year;
  const todayDate = isCurrentMonth ? today.getDate() : null;

  const currentMonthName = getMonthName(currentMonthIndex, currentYear);
  const nextMonthName = getMonthName(nextMonthIndex, nextMonthYear);

  return (
    <div className="min-w-full mx-auto bg-white rounded-lg p-6">
      <div className="flex flex-wrap justify-center gap-4 items-center mb-6 overflow-x-auto ">
        <button
          onClick={() => handleMonthSelection("current")}
          className={`p-2 sm:p-3 border-[0.5px] border-[#523939] min-w-32 sm:min-w-64 rounded-[20px] transition duration-200 font-medium text-base sm:text-xl leading-normal ${
            selectedMonth === "current"
              ? "bg-[#523939] text-white"
              : "bg-white text-[#523939]"
          }`}
          aria-label={`Show ${currentMonthName}`}
        >
          {currentMonthName}
        </button>
        <button
          onClick={() => handleMonthSelection("next")}
          className={`p-2 sm:p-3 border-[0.5px] border-[#523939] min-w-32 sm:min-w-64 rounded-[20px] transition duration-200 font-medium text-base sm:text-xl leading-normal ${
            selectedMonth === "next"
              ? "bg-[#523939] text-white"
              : "bg-white text-[#523939]"
          }`}
          aria-label={`Show ${nextMonthName}`}
        >
          {nextMonthName}
        </button>
      </div>
      <div className="!overflow-x-auto custom-scrollbar">
        <div className="min-w-[500px]">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="font-medium text-sm sm:text-base leading-[19.5px] text-gray-700 text-center whitespace-nowrap"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-4">
            {calendarDays.map((day, index) => {
              if (day === null) {
                return <div key={index} />;
              }
              const dateObj = new Date(year, monthIndex, day);
              const isToday = day === todayDate;
              const isOutOfRange =
                dateObj < today.setHours(0, 0, 0, 0) ||
                dateObj > oneMonthFromNow;
              const isSelectedDay = selectedDay === dateObj.toDateString();
              const isNotAvailable = isDateNotAvailable(dateObj);

              let dateStyle =
                "flex items-center justify-center aspect-square w-10 h-10 sm:w-12 sm:h-12 rounded-full text-sm sm:text-lg font-semibold transition duration-200";
              if (isToday) {
                dateStyle += " bg-[#eeeded] text-[#523939] font-black";
              } else if (isSelectedDay) {
                dateStyle += " bg-blue-300 text-black";
              } else if (isOutOfRange || isNotAvailable) {
                dateStyle +=
                  " bg-[#EAEAEA] text-black cursor-not-allowed opacity-50";
              } else {
                dateStyle +=
                  " bg-white border-[0.5px] border-[#523939] text-black hover:text-white cursor-pointer hover:bg-[#523939]";
              }

              return (
                <div
                  key={index}
                  className={dateStyle}
                  onClick={() => {
                    if (!isOutOfRange && !isNotAvailable) {
                      onClickDay(day, dateObj);
                    }
                  }}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComp;
