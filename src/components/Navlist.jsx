import { NavLink } from "react-router-dom";

function MenuList({ setIsOpen }) {
  return (
    <>
      <li onClick={() => (setIsOpen ? setIsOpen(false) : "")}>
        <NavLink className="hover:text-[#322424]" to="/">
          HOME
        </NavLink>
      </li>
      <li onClick={() => (setIsOpen ? setIsOpen(false) : "")}>
        <NavLink className="hover:text-[#322424]" to="about">
          ABOUT US
        </NavLink>
      </li>
      <li onClick={() => (setIsOpen ? setIsOpen(false) : "")}>
        <NavLink
          // onClick={() => (setIsOpen ? setIsOpen(false) : "")}
          className="hover:text-[#322424]"
          to="contact"
        >
          CONTACT US
        </NavLink>
      </li>
      <li
        onClick={() => (setIsOpen ? setIsOpen(false) : "")}
        className="font-montserrat border-[0.5px] hover:border-[#322424] border-brown-primary rounded-[10px] py-1 md:px-8 px-[1px] lg:px-10 "
      >
        <NavLink className="hover:text-[#322424] " to="bookings">
          BOOK AN APPOINTMENT
        </NavLink>
      </li>
    </>
  );
}

export default MenuList;
// import { useState } from "react";
// import Calendar from "react-calendar";
// import "./calendar.css";

// import { useState } from "react";

// function CalendarComp() {
//   const [date, setDate] = useState(new Date());

//   const handleDateChange = (newDate) => {
//     setDate(newDate); // Update the selected date
//   };

//   const goToCurrentMonth = () => {
//     setDate(new Date()); // Go to the current month
//   };

//   const goToNextMonth = () => {
//     const nextMonth = new Date(date);
//     nextMonth.setMonth(date.getMonth() + 1); // Go to the next month
//     setDate(nextMonth); // Update the state to the next month
//   };

//   const getTileClassName = ({ date, view }) => {
//     const today = new Date();
//     const isToday =
//       date.getDate() === today.getDate() &&
//       date.getMonth() === today.getMonth() &&
//       date.getFullYear() === today.getFullYear();

//     const isFuture = date > today; // Compare date with today to check if it's in the future
//     const isPast = date < today; // Check if it's a past date

//     if (isToday) {
//       return "today"; // Style for today's date
//     } else if (isFuture) {
//       return "future"; // Style for future dates
//     } else if (isPast) {
//       return "past"; // Style for past dates
//     }
//     return "";
//   };

//   return (
//     <div className="calendar-container min-w-fit sm:max-w-lg mx-auto p-6">
//       <div className="flex justify-center gap-6 items-center mb-4">
//         <button onClick={goToCurrentMonth} className="button-months">
//           Current Month
//         </button>
//         <button onClick={goToNextMonth} className="button-months">
//           Next Month
//         </button>
//       </div>

//       <Calendar
//         onChange={handleDateChange}
//         value={date}
//         className="rounded-lg shadow-lg"
//         view="month" // Only show month view
//         showNeighboringMonth={false} // Disable display of neighboring months
//         prev2Label={null} // Hide previous month button
//         next2Label={null} // Hide next month button
//         showNavigation={false} // Hide the default navigation arrows
//         tileClassName={getTileClassName}
//       />
//     </div>
//   );
// }

// export default CalendarComp;
