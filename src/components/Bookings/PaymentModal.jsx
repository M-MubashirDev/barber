import { useState } from "react";
import { createPortal } from "react-dom";

const PaymentModal = ({ isOpen, onClose, amount }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [finut, setFinut] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentData = {
      cardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
      address,
      zipCode,
      country,
      state,
      city,
      phone,
      email,
      finut,
      amount,
    };
    console.log("Payment data:", paymentData);
    // TODO: Send paymentData to the backend
    onClose(false);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg">
        <button
          onClick={() => onClose(false)}
          className="absolute top-4 right-4 text-4xl text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          &times;
        </button>
        <div className="p-6 max-h-[90vh] overflow-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#523939]">
            Payment Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              {/* Card Number */}
              <div>
                <label className="block mb-1 text-[#523939] font-semibold">
                  Card Number
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              {/* Expiration Date */}
              <div>
                <label className="block mb-1 text-[#523939] font-semibold">
                  Expiration Date
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  placeholder="MM/YY"
                  required
                />
              </div>

              {/* CVV */}
              <div>
                <label className="block mb-1 text-[#523939] font-semibold">
                  CVV
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="123"
                  required
                />
              </div>

              {/* First Name */}
              <div>
                <label className="block mb-1 text-[#523939] font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block mb-1 text-[#523939] font-semibold">
                  Last Name
                </label>
                <input
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
                <label className="block mb-1 text-[#523939] font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 Main St"
                  required
                />
              </div>

              {/* Zip Code */}
              <div>
                <label className="block mb-1 text-[#523939] font-semibold">
                  Zip Code
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="12345"
                  required
                />
              </div>

              {/* Country */}
              <div>
                <label className="block mb-1 text-[#523939] font-semibold">
                  Country
                </label>
                <input
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
                <label className="block mb-1 text-[#523939] font-semibold">
                  State
                </label>
                <input
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
                <label className="block mb-1 text-[#523939] font-semibold">
                  City
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Los Angeles"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-1 text-[#523939] font-semibold">
                  Phone
                </label>
                <input
                  type="tel"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 555-555-5555"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-[#523939] font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              {/* Finut */}
              <div>
                <label className="block mb-1 text-[#523939] font-semibold">
                  Finut
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-[#523939]"
                  value={finut}
                  onChange={(e) => setFinut(e.target.value)}
                  placeholder="Finut value"
                  required
                />
              </div>

              {/* Amount (Provided by Props) */}
              <div>
                <label className="block mb-1 text-[#523939] font-semibold">
                  Amount
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 bg-gray-100 text-gray-700"
                  value={amount}
                  readOnly
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#523939] text-white py-2 px-4 rounded hover:bg-[#3f2e2e] focus:outline-none"
              >
                Submit Payment
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
