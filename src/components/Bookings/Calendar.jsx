/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const CalendarComp = ({ timeSlots, select, available, totalTime }) => {
  const [currentDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState("current");
  const [workingDay, setWorkingDay] = useState([]);
  const [blockedTimeSlots, setBlockedTimeSlots] = useState({});

  const { availableTimeSlots, setAvailableTimeSlots } = available;
  const { selectedDay, setSelectedDay } = select;

  const getMonthName = (monthIndex, year) => {
    const date = new Date(year, monthIndex, 1);
    return date.toLocaleString("default", { month: "long" });
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getStartDay = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handleMonthSelection = (month) => {
    setSelectedMonth(month);
    setSelectedDay(null);
    setAvailableTimeSlots([]);
  };

  const onClickDay = (dayAbbreviation, dayNumber, dateObject) => {
    const selectedDate = dateObject.toDateString();
    setSelectedDay(selectedDate);

    const allSlots = generateTimeSlots("09:00", totalTime, "16:00");
    const blockedSlots = blockedTimeSlots[dayAbbreviation] || [];
    const availableSlots = getAvailableTimeSlots(allSlots, blockedSlots);

    setAvailableTimeSlots(availableSlots);
  };

  const getDayAbbreviation = (year, month, day) => {
    const date = new Date(year, month, day);
    return date.toLocaleString("default", { weekday: "short" });
  };

  const parseDays = (daysString) => {
    const daysOrder = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let result = [];

    if (daysString.includes("-")) {
      const [start, end] = daysString.split("-");
      const startIndex = daysOrder.indexOf(start.trim());
      const endIndex = daysOrder.indexOf(end.trim());

      if (startIndex <= endIndex) {
        for (let i = startIndex; i <= endIndex; i++) {
          result.push(daysOrder[i]);
        }
      } else {
        // Handle wrap-around
        for (let i = startIndex; i < daysOrder.length; i++) {
          result.push(daysOrder[i]);
        }
        for (let i = 0; i <= endIndex; i++) {
          result.push(daysOrder[i]);
        }
      }
    } else if (daysString.includes(",")) {
      const days = daysString.split(",").map((day) => day.trim());
      result = days;
    } else {
      // Single day
      result = [daysString.trim()];
    }

    return result;
  };

  const generateTimeSlots = (
    start = "09:00",
    slotDuration = 60,
    end = "16:00"
  ) => {
    const slots = [];
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);

    let current = new Date(0, 0, 0, startHour, startMinute);
    const endTime = new Date(0, 0, 0, endHour, endMinute);

    while (current < endTime) {
      const slotStart = current.toTimeString().slice(0, 5);
      current.setMinutes(current.getMinutes() + slotDuration);
      let slotEnd = current.toTimeString().slice(0, 5);

      if (current > endTime) {
        slotEnd = end;
      }

      if (slotStart && slotEnd && slotStart !== slotEnd) {
        slots.push({ start: slotStart, end: slotEnd });
      }
    }

    return slots;
  };

  const getAvailableTimeSlots = (allSlots, blockedSlots) => {
    return allSlots.filter((slot) => {
      return !blockedSlots.some((blocked) => isOverlap(slot, blocked));
    });
  };

  const isOverlap = (slot1, slot2) => {
    const slot1Start = convertToMinutes(slot1.start);
    const slot1End = convertToMinutes(slot1.end);
    const slot2Start = convertToMinutes(slot2.startTime);
    const slot2End = convertToMinutes(slot2.endTime);

    if (
      slot1Start === null ||
      slot1End === null ||
      slot2Start === null ||
      slot2End === null
    ) {
      return false;
    }

    return slot1Start < slot2End && slot1End > slot2Start;
  };

  const convertToMinutes = (time) => {
    if (!time || typeof time !== "string") {
      console.warn(`Invalid time value: ${time}`);
      return null;
    }
    const [hour, minute] = time.split(":").map(Number);
    if (isNaN(hour) || isNaN(minute)) {
      console.warn(`Invalid time format: ${time}`);
      return null;
    }
    return hour * 60 + minute;
  };

  useEffect(() => {
    if (timeSlots && timeSlots.length > 0) {
      const daysSet = new Set();
      const flattenedTimeSlots = timeSlots.flat();
      const blockedSlotsMap = {};

      flattenedTimeSlots.forEach((slot) => {
        if (!slot || !slot.day || !slot.startTime || !slot.endTime) {
          console.warn(`Malformed slot detected and skipped:`, slot);
          return;
        }

        const parsedDays = parseDays(slot.day);
        parsedDays.forEach((day) => {
          daysSet.add(day);
          if (!blockedSlotsMap[day]) {
            blockedSlotsMap[day] = [];
          }
          blockedSlotsMap[day].push({
            startTime: slot.startTime,
            endTime: slot.endTime,
          });
        });
      });

      setWorkingDay(Array.from(daysSet));
      setBlockedTimeSlots(blockedSlotsMap);
    } else {
      setWorkingDay([]);
      setBlockedTimeSlots({});
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
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const today = new Date();
  const isCurrentMonth =
    today.getMonth() === monthIndex && today.getFullYear() === year;
  const todayDate = isCurrentMonth ? today.getDate() : null;

  const currentMonthName = getMonthName(currentMonthIndex, currentYear);
  const nextMonthName = getMonthName(nextMonthIndex, nextMonthYear);

  return (
    <div className="min-w-full mx-auto bg-white rounded-lg p-6">
      {/* Header */}
      <div className="flex flex-wrap justify-center gap-4 items-center mb-6 overflow-x-auto">
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

      {/* Wrap days and dates in the same scroll container */}
      <div className="!overflow-x-auto">
        <div className="min-w-[500px]">
          {/* Days of the Week */}
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

          {/* Dates */}
          <div className="grid grid-cols-7 gap-4">
            {calendarDays.map((day, index) => {
              if (day === null) {
                return <div key={index}></div>;
              }

              const dateObj = new Date(year, monthIndex, day);
              const dayAbbreviation = getDayAbbreviation(year, monthIndex, day);
              const isToday = day === todayDate;
              const isBeforeToday = isCurrentMonth && day < todayDate;
              const isAfterToday = isCurrentMonth && day > todayDate;
              const isNextMonth = selectedMonth === "next";
              const isWorkingDay = workingDay.includes(dayAbbreviation);

              // Check if selectedDay matches this date
              const isSelectedDay = selectedDay === dateObj.toDateString();

              let dateStyle =
                "flex items-center justify-center aspect-square w-10 h-10 sm:w-12 sm:h-12 rounded-full text-sm sm:text-lg font-semibold transition duration-200";

              if (isToday) {
                dateStyle += " bg-[#523939] text-white";
              } else if (isSelectedDay) {
                dateStyle += " bg-blue-300 text-black";
              } else if (isBeforeToday) {
                dateStyle += " bg-[#EAEAEA] text-black";
              } else if (isAfterToday || isNextMonth) {
                dateStyle +=
                  " bg-white border-[0.5px] border-[#523939] text-black";
              } else {
                dateStyle += " bg-transparent text-black";
              }

              if (isWorkingDay && (isToday || isAfterToday || isNextMonth)) {
                dateStyle += " cursor-pointer hover:bg-blue-200";
              } else {
                dateStyle += " cursor-not-allowed opacity-50";
              }

              return (
                <div
                  key={index}
                  className={dateStyle}
                  onClick={() => {
                    if (
                      isWorkingDay &&
                      (isToday || isAfterToday || isNextMonth)
                    ) {
                      onClickDay(dayAbbreviation, day, dateObj);
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
