import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Sarah Johnson",
    location: "Paris, France",
    message:
      "The Bali retreat transformed my perspective on travel. Every detail was curated to perfection - from the private villa to the cultural immersions.",
    rating: 5,
    trip: "Bali Wellness Escape",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "David Kim",
    location: "Seoul, South Korea",
    message:
      "As a frequent traveler, I've never experienced such seamless logistics combined with authentic local experiences. The Japan tour exceeded all expectations.",
    rating: 5,
    trip: "Japanese Cultural Odyssey",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Maria Rodriguez",
    location: "Barcelona, Spain",
    message:
      "Our family's African safari was magical. The guides' expertise and the luxury camp's attention to detail made it educational yet incredibly comfortable.",
    rating: 5,
    trip: "Tanzania Family Safari",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "James Wilson",
    location: "London, UK",
    message:
      "The Scandinavian tour balanced adventure and relaxation perfectly. From Northern Lights viewing to sleek urban hotels, every moment was Instagram-worthy.",
    rating: 4,
    trip: "Nordic Lights Expedition",
  },
];

const TestimonialSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span
          key={i}
          className={`text-lg ${
            i < rating ? "text-[#86b817]" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ));
  };

  return (
    <section className="relative py-20 px-4 bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#86b817]/5 to-transparent -z-10"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-[#86b817]/10 blur-3xl -z-10"></div>
      <div className="absolute top-20 left-20 w-60 h-60 rounded-full bg-[#86b817]/5 blur-3xl -z-10"></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <span
            className="inline-block px-4 py-1 text-xs font-medium tracking-wider text-[#86b817] bg-[#86b817]/10 rounded-full mb-4"
            data-aos="fade-up"
          >
            VOICES OF OUR TRAVELERS
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Real Stories, <span className="text-[#86b817]">Authentic</span>{" "}
            Experiences
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Don't just take our word for it - hear from those who've journeyed
            with us
          </p>
        </div>

        {/* Swiper Carousel */}
        <div data-aos="fade-up" data-aos-delay="300">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="h-full flex flex-col bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:border hover:border-[#86b817]/20 border border-gray-100">
                  {/* Rating & Trip */}
                  <div className="mb-4 flex justify-between items-start">
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-xs font-medium text-[#86b817] bg-[#86b817]/10 px-2 py-1 rounded-full">
                      {testimonial.trip}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-8 flex-grow">
                    <svg
                      className="text-[#86b817] w-8 h-8 mb-4 opacity-20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
                    </svg>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {testimonial.message}
                    </p>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="testimonial-prev w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#86b817] hover:text-white hover:border-[#86b817] transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="testimonial-next w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#86b817] hover:text-white hover:border-[#86b817] transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link to="/contactus">
            <button className="group inline-flex items-center px-8 py-4 bg-[#86b817] hover:bg-[#76a315] text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>Begin Your Adventure</span>
              <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
