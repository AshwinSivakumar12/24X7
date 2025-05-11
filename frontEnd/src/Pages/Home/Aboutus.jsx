import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import AboutImage2 from "../../assets/Home Image-3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const features = [
  "First Class Flights",
  "5 Star Accommodation",
  "150+ Premium City Tours",
  "Handpicked Hotels",
  "Latest Model Vehicles",
  "24x7 Service",
];

const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Image Section */}
        <div className="relative w-full h-full" data-aos="fade-right">
          <div className="relative z-10">
            <img
              src={AboutImage2}
              alt="About 24X7 Travel"
              className="w-full h-auto rounded-2xl shadow-2xl border-[5px] border-white"
            />
          </div>
          <div className="absolute top-10 right-10 bottom-0 bg-[#86b817] opacity-10 z-0 rounded-2xl"></div>
        </div>

        {/* Text Section */}
        <div className="space-y-6 text-gray-800">
          {/* Title with double lines */}
          <div className="flex items-center gap-4" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#86b817] whitespace-nowrap">
              ABOUT US
            </h2>
            <div className="flex flex-col gap-1">
              <span className="w-20 md:w-24 h-[6px] bg-[#86b817] rounded-3xl"></span>
              <span className="w-28 md:w-32 h-[6px] bg-[#86b817] rounded-3xl"></span>
            </div>
          </div>

          <h3
            className="text-2xl font-semibold"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover the World with{" "}
            <span className="text-[#86b817]">24X7 Travel</span> 🌍
          </h3>
          <p
            className="text-base leading-relaxed text-gray-600"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            At <strong>24X7 Travel</strong>, we believe travel is not just about
            visiting new places—it's about experiencing cultures, creating
            memories, and writing your own adventure story. Founded with a
            passion for exploration, our mission is simple:{" "}
            <em>Make travel easy, enriching, and unforgettable.</em>
          </p>

          {/* Features List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-2">
            {features.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-gray-700"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CheckCircle className="w-4 h-4 mr-2 text-[#86b817]" />
                {item}
              </li>
            ))}
          </ul>

          {/* Button */}
          <Link to="/aboutus">
            <button
              className="mt-6 bg-[#86b817] hover:bg-[#76a213] text-white px-8 py-3 rounded-full font-medium shadow-md transition duration-300"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
