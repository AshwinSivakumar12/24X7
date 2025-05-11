import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  User,
  Calendar,
  Plane,
  Globe,
  ChevronRight,
  Star,
  Check,
  Sparkles,
  Heart,
  Shield,
  Clock,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    travelDate: "",
    budget: "",
    travelers: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 120,
    });

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert(
        "Thank you for your trip inquiry! A specialist will contact you within 24 hours."
      );
      setFormData({
        name: "",
        email: "",
        destination: "",
        travelDate: "",
        budget: "",
        travelers: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const testimonials = [
    {
      quote:
        "The trip was perfectly planned down to every detail. We didn't have to worry about anything!",
      author: "Sarah J.",
      trip: "Italy Trip",
      rating: 5,
    },
    {
      quote:
        "Our family vacation exceeded all expectations thanks to their meticulous planning.",
      author: "Michael T.",
      trip: "Japan Adventure",
      rating: 5,
    },
    {
      quote:
        "I've never experienced such personalized service. They thought of everything!",
      author: "Emma L.",
      trip: "Bali Retreat",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-[#FFD700] text-[#FFD700]" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f8ff] to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#1a3a5f]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 z-10" />
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-fixed"
          style={{ backgroundAttachment: "fixed" }}
        />
        <div
          className="text-center z-20 px-4 max-w-4xl mx-auto"
          data-aos="fade-down"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Sparkles className="w-5 h-5 text-[#86b817]" />
            <span className="text-sm font-medium tracking-wider text-white">
              CUSTOM TRAVEL PLANNING
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Craft Your <span className="text-[#86b817]">Dream</span> <br />
            Vacation
          </h1>
          <p
            className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto font-light"
            data-aos="fade-up"
          >
            Our travel experts will create a personalized itinerary tailored to
            your unique preferences
          </p>
        </div>
      </section>

      {/* Floating Stats Bar */}
      <div className="relative z-30 -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "15K+",
                label: "Happy Travelers",
                icon: <Heart className="w-7 h-7" />,
                trend: "↑ 12%",
                description: "Year-over-year growth",
              },
              {
                value: "120+",
                label: "Destinations",
                icon: <MapPin className="w-7 h-7" />,
                trend: "5 new",
                description: "Added this quarter",
              },
              {
                value: "24/7",
                label: "Support",
                icon: <Shield className="w-7 h-7" />,
                trend: "98%",
                description: "Satisfaction rate",
              },
              {
                value: "100%",
                label: "Custom Plans",
                icon: <Clock className="w-7 h-7" />,
                trend: "★ 4.9",
                description: "Average rating",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#86b817]/5 to-[#86b817]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#86b817]/5 rotate-45 transform origin-bottom-left"></div>
                </div>
                <div className="relative z-10 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-[#86b817]/10 p-3 rounded-xl">
                      {stat.icon}
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-[#86b817]/10 text-[#86b817] rounded-full">
                      {stat.trend}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </h3>
                    <p className="text-lg font-medium text-gray-700">
                      {stat.label}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {stat.description}
                    </p>
                  </div>
                  <div className="mt-4 relative">
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#86b817] group-hover:w-full transition-all duration-500 ease-out"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trip Planning Form */}
      <section id="trip-form" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            data-aos="fade-up"
          >
            <div className="md:flex">
              {/* Form Side Image */}
              <div className="hidden md:block md:w-2/5 bg-[url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center relative min-h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5f]/90 via-[#1a3a5f]/70 to-transparent flex items-end p-10">
                  <div className="w-full">
                    <div className="flex items-center gap-1 mb-3">
                      {renderStars(testimonials[currentSlide].rating)}
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-4">
                      What Our Clients Say
                    </h3>
                    <div className="relative h-32 overflow-hidden">
                      {testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <p className="text-gray-200 italic text-lg mb-4">
                            "{testimonial.quote}"
                          </p>
                          <p className="text-white font-medium">
                            — {testimonial.author},{" "}
                            <span className="text-gray-300">
                              {testimonial.trip}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-6">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentSlide
                              ? "bg-white w-4"
                              : "bg-white/50"
                          }`}
                          aria-label={`View testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="md:w-3/5 p-10 md:p-14">
                <div className="text-center mb-12">
                  <div className="bg-[#86b817]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Plane className="w-9 h-9 text-[#86b817]" />
                  </div>
                  <h2 className="text-3xl font-extrabold mb-3 text-gray-900">
                    Personalized Trip Inquiry
                  </h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Complete this form and we'll create a custom travel proposal
                    within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                          <User className="text-gray-400 w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="pl-11 pr-4 py-3.5 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#86b817]/50 focus:border-[#86b817]/30 outline-none transition shadow-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                          <Mail className="text-gray-400 w-5 h-5" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="pl-11 pr-4 py-3.5 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#86b817]/50 focus:border-[#86b817]/30 outline-none transition shadow-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label
                        htmlFor="destination"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Destination *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                          <MapPin className="text-gray-400 w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          id="destination"
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          placeholder="Where to?"
                          className="pl-11 pr-4 py-3.5 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#86b817]/50 focus:border-[#86b817]/30 outline-none transition shadow-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="travelDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Travel Dates *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                          <Calendar className="text-gray-400 w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          id="travelDate"
                          name="travelDate"
                          value={formData.travelDate}
                          onChange={handleChange}
                          placeholder="When?"
                          className="pl-11 pr-4 py-3.5 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#86b817]/50 focus:border-[#86b817]/30 outline-none transition shadow-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label
                        htmlFor="travelers"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Travelers *
                      </label>
                      <select
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="pl-4 pr-10 py-3.5 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#86b817]/50 focus:border-[#86b817]/30 outline-none transition shadow-sm appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2Yjc1ODMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[center_right_1rem]"
                        required
                      >
                        <option value="">How many travelers?</option>
                        <option value="1">1 traveler</option>
                        <option value="2">2 travelers</option>
                        <option value="3-5">3-5 travelers</option>
                        <option value="6+">6+ travelers</option>
                        <option value="group">Group (10+)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Budget Per Person *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="pl-4 pr-10 py-3.5 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#86b817]/50 focus:border-[#86b817]/30 outline-none transition shadow-sm appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2Yjc1ODMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[center_right_1rem]"
                        required
                      >
                        <option value="">Select budget range</option>
                        <option value="500-1500">$500 - $1,500</option>
                        <option value="1500-3500">$1,500 - $3,500</option>
                        <option value="3500-7000">$3,500 - $7,000</option>
                        <option value="7000+">$7,000+</option>
                        <option value="flexible">Flexible budget</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Trip Details *
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-4">
                        <MessageCircle className="text-gray-400 w-5 h-5" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        placeholder="Tell us about your dream trip... (interests, activities, special requirements)"
                        className="pl-11 pr-4 py-3.5 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#86b817]/50 focus:border-[#86b817]/30 outline-none resize-none transition shadow-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full ${
                        isSubmitting
                          ? "bg-[#86b817]/90"
                          : "bg-[#86b817] hover:bg-[#729d14]"
                      } text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:shadow-[#86b817]/30`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing Your Request...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Get My Custom Trip Plan
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With Us - Enhanced */}
      <section
        id="why-us"
        className="py-24 bg-gradient-to-b from-[#f8fafc] to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-5 px-5 py-2.5 bg-[#86b817]/10 rounded-full">
              <Sparkles className="w-5 h-5 text-[#86b817]" />
              <span className="text-sm font-medium tracking-wider text-[#86b817]">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">
              The <span className="text-[#86b817]">Luxury Travel</span>{" "}
              Difference
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We go beyond booking to create unforgettable, personalized travel
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8 text-[#86b817]" />,
                title: "Local Expertise",
                desc: "Our destination specialists live where they plan, offering authentic insider knowledge",
                features: [
                  "Hidden gems only locals know",
                  "Cultural immersion activities",
                  "Authentic dining experiences",
                ],
              },
              {
                icon: <Calendar className="w-8 h-8 text-[#86b817]" />,
                title: "Seamless Planning",
                desc: "We handle every detail so you can focus on the excitement",
                features: [
                  "Tailored daily itineraries",
                  "24/7 concierge support",
                  "Real-time travel updates",
                ],
              },
              {
                icon: <MapPin className="w-8 h-8 text-[#86b817]" />,
                title: "Exclusive Privileges",
                desc: "Special access and upgrades at top hotels and experiences",
                features: [
                  "VIP treatment at properties",
                  "Complimentary room upgrades",
                  "Private tours and access",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-3 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#86b817]/10 flex items-center justify-center mb-6 group-hover:bg-[#86b817]/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-5">{item.desc}</p>
                <ul className="space-y-3">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="w-5 h-5 text-[#86b817]" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-[#1a3a5f] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-5 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Sparkles className="w-5 h-5 text-[#86b817]" />
            <span className="text-sm font-medium tracking-wider">
              READY TO TRAVEL?
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Craft Your Perfect Journey
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Contact us today and one of our travel specialists will create a
            personalized itinerary just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#trip-form"
              className="px-8 py-4 bg-[#86b817] hover:bg-[#729d14] text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[#86b817]/40 flex items-center justify-center gap-2 text-lg"
            >
              <Send className="w-5 h-5" /> Get Free Consultation
            </a>
            <a
              href="tel:+15551234567"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-medium rounded-full border-2 border-white/30 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
            >
              <Phone className="w-5 h-5" /> +1 (555) 123-4567
            </a>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            Available daily from 8am - 8pm EST
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
