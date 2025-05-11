import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BookingSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center py-16 px-4 md:px-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div
        className="max-w-6xl w-full bg-white bg-opacity-80 p-6 md:p-10 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 backdrop-blur-md"
        data-aos="fade-up"
      >
        {/* Left Side - Booking Info */}
        <div
          className="text-gray-800 flex flex-col justify-center space-y-4 md:space-y-6"
          data-aos="fade-right"
        >
          <p className="uppercase tracking-widest font-semibold text-sm md:text-base text-[#86b817]">
            Plan Your Adventure
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#86b817]">
            Easy Online Booking
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Escape the ordinary and explore paradise! Secure your tour in just a
            few clicks — beaches, mountains, and unforgettable memories await.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Special discounts available for early birds! Book today and make
            your dream trip come true.
          </p>
          <Link to="/contactus">
            <button
              className="px-8 py-3 mt-6 text-white font-bold rounded-full transition-transform transform hover:scale-105 hover:shadow-lg duration-300 text-sm md:text-base"
              style={{
                background: "#86b817",
                boxShadow: "0 8px 24px rgba(134,184,23,0.5)",
              }}
            >
              Explore More
            </button>
          </Link>
        </div>

        {/* Right Side - Booking Form */}
        <div
          className="bg-white p-6 md:p-8 rounded-3xl shadow-lg space-y-6"
          data-aos="fade-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#86b817] mb-6">
            Book Your Trip
          </h2>

          <form className="space-y-5 md:space-y-6">
            {/* Full Name */}
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
              <FaUser className="text-[#86b817] text-xl mr-3" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent placeholder-[#86b817] focus:outline-none p-2 text-sm md:text-base"
              />
            </div>

            {/* Email Address */}
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
              <FaEnvelope className="text-[#86b817] text-xl mr-3" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent placeholder-[#86b817] focus:outline-none p-2 text-sm md:text-base"
              />
            </div>

            {/* Date and Destination */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Date */}
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-full">
                <FaCalendarAlt className="text-[#86b817] text-xl mr-3" />
                <input
                  type="datetime-local"
                  className="w-full bg-transparent placeholder-[#86b817] focus:outline-none p-2 text-sm md:text-base"
                />
              </div>

              {/* Destination */}
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-full">
                <FaMapMarkerAlt className="text-[#86b817] text-xl mr-3" />
                <select
                  className="w-full bg-transparent placeholder-[#86b817] focus:outline-none p-2 text-sm md:text-base"
                  defaultValue=""
                >
                  <option value="" disabled className="text-[#86b817]">
                    Choose Destination
                  </option>
                  <option value="Maldives" className="text-[#86b817]">
                    Maldives
                  </option>
                  <option value="Bali" className="text-[#86b817]">
                    Bali
                  </option>
                  <option value="Santorini" className="text-[#86b817]">
                    Santorini
                  </option>
                  <option value="Switzerland" className="text-[#86b817]">
                    Switzerland
                  </option>
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <textarea
              placeholder="Special Requests (optional)"
              className="w-full bg-gray-100 placeholder-[#86b817] rounded-lg p-3 focus:ring-2 focus:ring-[#86b817] focus:outline-none text-sm md:text-base"
              rows="3"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-white font-bold rounded-full transition-transform transform hover:scale-105 hover:shadow-lg duration-300 text-sm md:text-base"
              style={{
                background: "#86b817",
                boxShadow: "0 8px 24px rgba(134,184,23,0.5)",
              }}
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
