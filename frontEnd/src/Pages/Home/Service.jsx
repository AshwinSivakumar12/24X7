import React, { useEffect } from "react";
import { Globe, Hotel, User, CalendarDays } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Globe className="w-12 h-12 text-[#86b817]" />,
    title: "WorldWide Tours",
    description:
      "Explore iconic landmarks, vibrant cultures, and hidden gems across the globe. Whether it's a romantic getaway in Paris, an adventure in the Swiss Alps, or a beach holiday in the Maldives, we craft memorable experiences. With 24x7 support, multilingual guides, and tailored itineraries, your dream journey starts here.",
  },
  {
    icon: <Hotel className="w-12 h-12 text-[#86b817]" />,
    title: "Hotel Reservation",
    description:
      "Skip the stress of last-minute bookings! We offer the best deals on a wide range of stays—from luxury suites and boutique hotels to budget lodges and homestays. Enjoy flexible check-ins, verified properties, and real-time booking confirmation to ensure a hassle-free stay wherever you go.",
  },
  {
    icon: <User className="w-12 h-12 text-[#86b817]" />,
    title: "Travel Guides",
    description:
      "Turn your trip into an unforgettable story with our expert travel guides. From historical tales to culinary trails, our guides help you dive deep into each destination. Personalized recommendations and local insights ensure you experience the city like a true explorer—not just a tourist.",
  },
  {
    icon: <CalendarDays className="w-12 h-12 text-[#86b817]" />,
    title: "Event Management",
    description:
      "Celebrate without stress! From intimate gatherings to grand celebrations, we handle everything—venue selection, logistics, decorations, catering, and more. Our team ensures that your event is executed with creativity and precision, giving you the freedom to enjoy every moment.",
  },
];

const ServicesGrid = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center my-10">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-1">
            <span className="w-15 md:w-20 h-[6px] bg-[#86b817] rounded-3xl"></span>
            <span className="w-20 md:w-24 h-[6px] bg-[#86b817] rounded-3xl"></span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-[#86b817] whitespace-nowrap">
            SERVICE
          </h2>
          <div className="flex flex-col gap-1">
            <span className="w-15 md:w-20 h-[6px] bg-[#86b817] rounded-3xl"></span>
            <span className="w-20 md:w-24 h-[6px] bg-[#86b817] rounded-3xl"></span>
          </div>
        </div>
        <h2 className="text-4xl text-black font-medium mt-4">Our Services</h2>
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-gray-100 rounded-xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#86b817] transition-all duration-300"
                data-aos={index % 2 === 0 ? "flip-left" : "flip-right"} // Flip effect alternating between items
                data-aos-delay={index * 200} // Delay each card
              >
                <div
                  className="flex justify-center mb-4"
                  data-aos="zoom-in" // Zoom-in animation for icons
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#86b817] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 text-justify line-clamp-4">
                  {service.description}
                </p>
                <Link to="/services">
                  <button className="mt-4 text-sm text-[#86b817] hover:underline">
                    Learn More →
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesGrid;
