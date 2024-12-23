////////////////////
/* eslint-disable react/prop-types */
// import { useState } from "react";/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePayMutate } from "./Hooks/usePayMutate";

const PaymentModal = ({
  isOpen,
  onClose,
  setReservationData,
  reservationsData,
}) => {
  const { mutatePay, isPending } = usePayMutate();
  // Payment Information States
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Personal Information States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Payment Calculations
  const [amount, setamount] = useState(reservationsData.grandTotal || 10);
  const [tip, settip] = useState(reservationsData.tip);

  useEffect(() => {
    console.log(amount);
    setamount(Number(reservationsData.grandTotal));
  }, [amount, reservationsData]);

  // Utility function to convert time to 24-hour format
  const convertTo24Hour = (timeStr) => {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    }
    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Frontend Validations
    const isValidCardNumber = /^\d{16}$/.test(cardNumber);
    const isValidExpirationDate = /^(0[1-9]|1[0-2])\d{2}$/.test(
      expirationDate.replace("/", "")
    );
    const isValidCVV = /^\d{3,4}$/.test(cvv);
    const isValidZipCode = /^\d{4,10}$/.test(zipCode); // Adjust based on country

    if (!isValidCardNumber) {
      alert("Card number must be exactly 16 digits.");
      return;
    }

    if (!isValidExpirationDate) {
      alert("Expiration date must be in MMYY format.");
      return;
    }

    if (!isValidCVV) {
      alert("CVV must be 3 or 4 digits.");
      return;
    }

    if (!isValidZipCode) {
      alert("Zip Code must be between 4 to 10 digits.");
      return;
    }

    // Convert time to 24-hour format
    const formattedTime = convertTo24Hour(reservationsData.time);

    // Extract service ObjectIds
    // const serviceIds =
    //   Array.isArray(reservationsData.services) &&
    //   reservationsData.services.map((service) => service._id);

    // Ensure 'professional' is a valid ObjectId
    const professionalId = reservationsData.professional;

    if (!professionalId) {
      alert("Professional ID is missing.");
      return;
    }

    // Prepare Payment Data
    const paymentData = {
      cardNumber,
      expirationDate: expirationDate.replace("/", ""), // "MMYY"
      cvv,
      firstName,
      lastName,
      address,
      zipCode: Number(zipCode),
      country,
      state,
      city,
      phone: phone.replace(/[^+\d]/g, ""), // Remove non-numeric except '+'
      email: email.toLowerCase(),
      amount: Number(amount),
      tip: Number(tip) || 0,
      subTotal: Number(reservationsData.subTotal),
      grandTotal: Number(reservationsData.grandTotal),
      date: new Date(reservationsData.date).toISOString(), // Ensure it's a Date object
      time: formattedTime,
      professional: professionalId, // Valid ObjectId
      services: reservationsData.services, // Array of ObjectIds
      totalServiceTime: `${reservationsData.totalServiceTime} minutes`,
    };

    // Combine with existing reservation data
    console.log(reservationsData);
    const combinedData = { ...reservationsData, ...paymentData };
    setReservationData(combinedData);
    mutatePay(combinedData);
    console.log(combinedData);

    // For demonstration, we'll just close the modal
    onClose(false);
  };
  // If modal is not open, do not render anything
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg">
        {/* Close Button */}
        <button
          onClick={() => onClose(false)}
          className="absolute top-4 right-4 text-4xl text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close Payment Modal"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="p-6 max-h-[90vh] overflow-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#523939]">
            Payment Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Payment Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              {/* Card Number */}
              <div>
                <label
                  className="block mb-1 text-[#523939] font-semibold"
                  htmlFor="cardNumber"
                >
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  maxLength="16"
                  pattern="\d{16}"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="4111111111111111"
                  required
                />
              </div>

              {/* Expiration Date */}
              <div>
                <label
                  className="block mb-1 text-[#523939] font-semibold"
                  htmlFor="expirationDate"
                >
                  Expiration Date (MMYY)
                </label>
                <input
                  id="expirationDate"
                  type="text"
                  maxLength="4"
                  pattern="^(0[1-9]|1[0-2])\d{2}$"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  placeholder="1225"
                  required
                />
              </div>

              {/* CVV */}
              <div>
                <label
                  className="block mb-1 text-[#523939] font-semibold"
                  htmlFor="cvv"
                >
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  maxLength="4"
                  pattern="^\d{3,4}$"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="123"
                  required
                />
              </div>

              {/* First Name */}
              <div>
                <label
                  className="block mb-1 text-[#523939] font-semibold"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Jane"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  className="block mb-1 text-[#523939] font-semibold"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label
                  className="block mb-1 text-[#523939] font-semibold"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="456 Elm Street"
                  required
                />
              </div>

              {/* Zip Code */}
              <div>
                <label
                  className="block mb-1 text-[#523939] font-semibold"
                  htmlFor="zipCode"
                >
                  Zip Code
                </label>
                <input
                  id="zipCode"
                  type="text"
                  maxLength="10"
                  pattern="^\d{4,10}$"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="90210"
                  required
                />
              </div>

              {/* Country */}
              <div>
                <label
                  className="block mb-1 text-[#523939] font-semibold"
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="USA"
                  required
                />
              </div>

              {/* State */}
              <div>
                <label
                  className="block mb-1 text-[#523939] font-semibold"
                  htmlFor="state"
                >
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="California"
                  required
                />
              </div>

              {/* City */}
              <div>
                <label
                  className="block mb-1 text-[#523939] font-semibold"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Beverly Hills"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  className="block mb-1 text-[#523939] font-semibold"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  pattern="^\+?\d{7,15}$"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+11234567890"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block mb-1 text-[#523939] font-semibold"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane.doe@example.com"
                  required
                />
              </div>

              {/* Amount */}
              <div>
                <label
                  className="block mb-1 text-[#523939] font-semibold"
                  htmlFor="amount"
                >
                  Amount
                </label>
                <input
                  id="amount"
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 bg-gray-100 text-gray-700"
                  value={amount}
                  readOnly
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                disabled={isPending}
                type="submit"
                className="bg-[#523939] text-white py-2 px-4 rounded hover:bg-[#3f2e2e] focus:outline-none"
              >
                {isPending ? "pending" : " Submit Payment"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PaymentModal;
