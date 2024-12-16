import { useState } from "react";

const CalendarComp = ({ inquiries }) => {
  console.log(inquiries);
  const [currentDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState("current"); // Tracks which month is currently selected

  // Helper functions
  const getMonthName = (monthIndex, year) => {
    const date = new Date(year, monthIndex, 1);
    return date.toLocaleString("default", { month: "long" });
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getStartDay = (year, month) => {
    return new Date(year, month, 1).getDay(); // 0 (Sunday) to 6 (Saturday)
  };

  // Handlers to switch between current and next month
  const handleCurrentMonth = () => {
    setSelectedMonth("current");
  };

  const handleNextMonth = () => {
    setSelectedMonth("next");
  };

  // Determine the month and year to display based on the selectedMonth state
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const nextMonthIndex = (currentMonthIndex + 1) % 12;
  const nextMonthYear =
    currentMonthIndex === 11 ? currentYear + 1 : currentYear;

  const monthIndex =
    selectedMonth === "current" ? currentMonthIndex : nextMonthIndex;
  const year = selectedMonth === "current" ? currentYear : nextMonthYear;

  // const monthName = getMonthName(monthIndex, year);
  const daysInMonth = getDaysInMonth(year, monthIndex);
  const startDay = getStartDay(year, monthIndex);

  // Generate calendar days for the selected month
  const calendarDays = [];

  // Add empty cells for days of the previous month
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }

  // Add actual days of the current month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // Get today's date for highlighting
  const today = new Date();
  const isCurrentMonth =
    today.getMonth() === monthIndex && today.getFullYear() === year;
  const todayDate = isCurrentMonth ? today.getDate() : null;

  // Get names for current and next month for button labels
  const currentMonthName = getMonthName(currentMonthIndex, currentYear);
  const nextMonthName = getMonthName(nextMonthIndex, nextMonthYear);

  return (
    <div className="min-w-full mx-auto  bg-white rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-center gap-4 items-center mb-6">
        {/* Current Month Button */}
        <button
          onClick={handleCurrentMonth}
          className={`p-3 border-[0.5px] border-[#523939] min-w-64 rounded-[20px] transition duration-200 font-medium text-xl leading-normal ${
            selectedMonth === "current"
              ? "bg-[#523939] text-white"
              : "bg-white text-[#523939]"
          }`}
          aria-label={`Show ${currentMonthName}`}
        >
          {currentMonthName}
        </button>

        {/* Next Month Button */}
        <button
          onClick={handleNextMonth}
          className={`p-3 border-[0.5px] border-[#523939] min-w-64 rounded-[20px] transition duration-200 font-medium text-xl leading-normal ${
            selectedMonth === "next"
              ? "bg-[#523939] text-white"
              : "bg-white text-[#523939]"
          }`}
          aria-label={`Show ${nextMonthName}`}
        >
          {nextMonthName}
        </button>
      </div>

      {/* Month and Year */}
      {/* <h2 className="text-2xl font-semibold text-center mb-4">
        {monthName} {year}
      </h2> */}

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="font-medium text-base leading-[19.5px] text-gray-700 text-center"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-4">
        {calendarDays.map((day, index) => {
          if (day === null) {
            return <div key={index}></div>; // Empty cell
          }

          const isToday = day === todayDate;
          const isBeforeToday = isCurrentMonth && day < todayDate;
          const isAfterToday = isCurrentMonth && day > todayDate;
          const isNextMonth = selectedMonth === "next";

          // Base styles for all dates
          let dateStyle =
            "flex items-center justify-center aspect-square w-12 h-12 rounded-full cursor-pointer text-lg font-semibold transition duration-200";

          // Apply conditional styles
          if (isToday) {
            dateStyle += " bg-[#523939] text-white";
          } else if (isBeforeToday) {
            dateStyle += " bg-[#EAEAEA] text-black";
          } else if (isAfterToday || isNextMonth) {
            // For dates after today in current month and all dates in next month
            dateStyle += " bg-white border-[0.5px] border-[#523939] text-black";
          } else {
            dateStyle += " bg-transparent text-black hover:bg-gray-200";
          }

          return (
            <div key={index} className={dateStyle}>
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarComp;
