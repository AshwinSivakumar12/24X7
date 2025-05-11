import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import destination1 from "../../assets/Thailand.avif";
import destination2 from "../../assets/Malaysia.avif";
import destination3 from "../../assets/Australia.avif";
import destination4 from "../../assets/China.avif";

const destinations = [
  {
    image: destination1,
    discount: "30% OFF",
    label: "Thailand",
    duration: "5 Days / 4 Nights",
    price: "₹49,999",
    details: "Includes stay, breakfast, and sightseeing",
    rating: 4.8,
    reviews: 1245,
  },
  {
    image: destination2,
    discount: "25% OFF",
    label: "Malaysia",
    duration: "4 Days / 3 Nights",
    price: "₹39,999",
    details: "Flight + Hotel + Local Tour",
    rating: 4.6,
    reviews: 982,
  },
  {
    image: destination3,
    discount: "35% OFF",
    label: "Australia",
    duration: "7 Days / 6 Nights",
    price: "₹89,999",
    details: "Luxury stay, city tour & activities",
    rating: 4.9,
    reviews: 1560,
  },
  {
    image: destination4,
    discount: "20% OFF",
    label: "Indonesia",
    duration: "6 Days / 5 Nights",
    price: "₹44,999",
    details: "Bali trip with all meals & transfers",
    rating: 4.7,
    reviews: 1120,
  },
];

const Destination = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Modern Heading Section */}
      <div className="text-center mb-16" data-aos="fade-down">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#86b817] bg-[#86b817]/10 rounded-full">
          EXPLORE THE WORLD
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover Your Next Adventure
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Handpicked destinations with exclusive deals for unforgettable
          experiences
        </p>
      </div>

      {/* Modern Destination Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image with gradient overlay */}
            <div className="relative h-80">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Discount badge */}
              <div className="absolute top-4 right-4 bg-white text-[#86b817] font-bold px-3 py-1 rounded-full shadow-md">
                {item.discount}
              </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-2xl font-bold">{item.label}</h3>
                <span className="text-xl font-bold">{item.price}</span>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(item.rating)
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm">({item.reviews})</span>
              </div>

              <p className="text-sm mb-4">
                {item.duration} • {item.details}
              </p>

              {/* Hover button */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full bg-[#86b817] hover:bg-[#76a315] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {/* <div className="text-center mt-12" data-aos="fade-up">
        <button className="inline-flex items-center px-6 py-3 border-2 border-[#86b817] text-[#86b817] font-medium rounded-full hover:bg-[#86b817] hover:text-white transition-all duration-300">
          View All Destinations
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              // strokeLinecap="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default Destination;
