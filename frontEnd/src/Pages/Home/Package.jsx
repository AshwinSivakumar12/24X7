import React from "react";
import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiCalendar,
  FiUsers,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";
import { FaSwimmer, FaMountain, FaUmbrellaBeach } from "react-icons/fa";

const Package = () => {
  const packages = [
    {
      id: 1,
      image: "https://source.unsplash.com/random/600x400/?thailand",
      location: "Phuket, Thailand",
      days: "5 days",
      persons: 2,
      price: 899,
      oldPrice: 1099,
      description:
        "Luxury beachfront resort with private pool and spa treatments included",
      rating: 4.8,
      category: "beach",
      highlights: ["Private beach access", "Free spa credit", "Sunset cruises"],
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/600x400/?bali",
      location: "Ubud, Indonesia",
      days: "7 days",
      persons: 2,
      price: 1299,
      oldPrice: 1499,
      description:
        "Cultural immersion in jungle retreat with daily yoga and traditional ceremonies",
      rating: 4.9,
      category: "culture",
      highlights: ["Jungle villa", "Daily yoga", "Traditional cooking class"],
    },
    {
      id: 3,
      image: "https://source.unsplash.com/random/600x400/?malaysia",
      location: "Langkawi, Malaysia",
      days: "4 days",
      persons: 2,
      price: 749,
      oldPrice: 899,
      description:
        "Island hopping adventure with luxury yacht charter included",
      rating: 4.7,
      category: "adventure",
      highlights: [
        "Private yacht day",
        "Duty-free shopping",
        "Cable car experience",
      ],
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "beach":
        return <FaUmbrellaBeach className="text-blue-400" />;
      case "culture":
        return <FaMountain className="text-emerald-400" />;
      case "adventure":
        return <FaSwimmer className="text-amber-400" />;
      default:
        return <FiMapPin className="text-gray-400" />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#86b817]/10 text-[#86b817] rounded-full text-sm font-medium mb-4">
            TRAVEL PACKAGES
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Your Perfect Getaway
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated luxury experiences tailored to your travel style
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Sale Badge */}
              {pkg.oldPrice && (
                <div className="absolute top-4 right-4 bg-[#86b817] text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                  SAVE ${pkg.oldPrice - pkg.price}
                </div>
              )}

              {/* Package Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={pkg.image}
                  alt={pkg.location}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  {getCategoryIcon(pkg.category)}
                  <span className="ml-2 text-white font-medium">
                    {pkg.category}
                  </span>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {pkg.location}
                  </h3>
                  <div className="flex items-center bg-[#86b817]/10 px-2 py-1 rounded">
                    <FiStar className="text-[#86b817] mr-1" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <div className="flex items-center mr-4">
                    <FiCalendar className="mr-1" />
                    <span>{pkg.days}</span>
                  </div>
                  <div className="flex items-center">
                    <FiUsers className="mr-1" />
                    <span>{pkg.persons} Person</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{pkg.description}</p>

                <div className="flex items-end justify-between mt-6">
                  <div>
                    {pkg.oldPrice && (
                      <span className="text-gray-400 line-through mr-2">
                        ${pkg.oldPrice}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-[#86b817]">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">/person</span>
                  </div>
                  <Link to={`/package/${pkg.id}`}>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#86b817] text-white hover:bg-[#7aa814] transition-colors">
                      <FiArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#86b817] text-white rounded-full font-medium hover:bg-[#7aa814] transition-colors shadow-md hover:shadow-lg">
            View All Packages
          </button>
        </div> */}
        <div className="text-center mt-12" data-aos="fade-up">
          <Link to="/destination">
            <button className="inline-flex items-center px-6 py-3 border-2 border-[#86b817] text-[#86b817] font-medium rounded-full hover:bg-[#86b817] hover:text-white transition-all duration-300">
              View All Packages
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Package;
