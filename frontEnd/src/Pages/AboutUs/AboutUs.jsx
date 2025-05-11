import React, { useEffect } from "react";
import {
  Globe,
  Users,
  Award,
  Shield,
  Heart,
  MapPin,
  Clock,
  CheckCircle,
  Camera,
  Coffee,
  Plane,
  MessageCircle,
  Star,
  ChevronRight,
  Mountain,
  Compass,
  Calendar,
  Smile,
  ThumbsUp,
  Sunrise,
  Umbrella,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import TestimonialSection from "../Home/Customer";
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const stats = [
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Users, value: "10K+", label: "Happy Travelers" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: MapPin, value: "200+", label: "Top Destinations" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "We live and breathe exploration",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your security is our priority",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Tailored to your preferences",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "Efficient travel arrangements",
      color: "bg-amber-100 text-amber-600",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      social: "@sarah_travels",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      social: "@michael_adventures",
    },
    {
      name: "Emily Davis",
      role: "Travel Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      social: "@emily_explores",
    },
  ];

  const timeline = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Started with a vision to revolutionize travel",
      icon: <Compass className="w-5 h-5" />,
    },
    {
      year: "2012",
      title: "Global Expansion",
      description: "Extended to 20+ countries",
      icon: <Plane className="w-5 h-5" />,
    },
    {
      year: "2016",
      title: "Award Recognition",
      description: "Best Tour Operator award",
      icon: <Award className="w-5 h-5" />,
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched travel planning platform",
      icon: <Calendar className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=2000&q=80"
        >
          <source src="/travel-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            data-aos="fade-up"
          >
            We Craft <span className="text-[#86b817]">Unforgettable</span>
            <br />
            Travel Stories
          </h1>
          <p
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Pioneering extraordinary experiences since 2008 with passion and
            expertise
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="bg-[#86b817] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#7aa815] transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our Story <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div data-aos="fade-right">
                <span className="text-[#86b817] font-medium tracking-wider">
                  OUR MISSION
                </span>
                <h2 className="text-4xl font-bold mt-2 mb-6">
                  Redefining Travel Experiences
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We believe travel has the power to transform lives. Our
                  mission is to create authentic, immersive experiences that
                  connect people with diverse cultures, breathtaking landscapes,
                  and unforgettable moments.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Sustainable tourism",
                  "Local communities",
                  "Customer satisfaction",
                  "Cultural preservation",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-[#86b817]/10 p-2 rounded-full mt-1">
                      <CheckCircle className="w-5 h-5 text-[#86b817]" />
                    </div>
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
                  alt="Travel experience"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-[#86b817]/10 p-3 rounded-full">
                    <ThumbsUp className="w-8 h-8 text-[#86b817]" />
                  </div>
                  <div>
                    <h4 className="font-bold">98% Satisfaction</h4>
                    <p className="text-sm text-gray-600">From our travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#86b817] to-[#6a9e12]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 text-white">
                  {stat.value}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span
              className="text-[#86b817] font-medium tracking-wider"
              data-aos="fade-up"
            >
              OUR VALUES
            </span>
            <h2
              className="text-4xl font-bold mt-2 mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              The Heart of Our Company
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              These principles guide every experience we create
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`${value.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
                >
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span
              className="text-[#86b817] font-medium tracking-wider"
              data-aos="fade-up"
            >
              OUR TEAM
            </span>
            <h2
              className="text-4xl font-bold mt-2 mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Meet The Travel Architects
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Passionate professionals dedicated to your perfect journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-square mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium">{member.social}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-[#86b817]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#86b817] blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[#86b817] blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 bg-[#86b817]/10 text-[#86b817] rounded-full text-sm font-medium tracking-wider"
              data-aos="fade-up"
            >
              OUR JOURNEY
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Milestones & Achievements
            </h2>
          </div>

          <div className="relative">
            {/* Animated timeline line */}
            <div
              className="hidden lg:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-[#86b817] to-gray-200 transform -translate-x-1/2"
              data-aos="zoom-y-out"
              data-aos-delay="200"
            >
              <div className="absolute top-0 left-0 w-full h-0 bg-[#86b817] animate-timeline-line origin-top"></div>
            </div>

            <div className="space-y-16 lg:space-y-0">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative lg:flex ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center justify-between gap-8 lg:gap-16`}
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  {/* Year - Animated circle */}
                  <div className="lg:w-1/2 lg:py-8">
                    <div
                      className={`${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      } mb-6 lg:mb-0`}
                    >
                      <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#86b817] text-white text-2xl font-bold shadow-lg hover:scale-110 transition-transform duration-300 group">
                        {item.year}
                        {/* Animated ring on hover */}
                        <span className="absolute inset-0 rounded-full border-2 border-[#86b817] opacity-0 group-hover:opacity-100 group-hover:animate-ping-once"></span>
                      </div>
                    </div>
                  </div>

                  {/* Content - Animated card */}
                  <div
                    className={`lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden ${
                      index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}
                  >
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#86b817]/5 rotate-45 transform origin-bottom-left"></div>
                    </div>

                    <div
                      className="flex items-center gap-4 mb-4 relative z-10"
                      data-aos="fade-left"
                      data-aos-delay={300 + index * 100}
                    >
                      <div className="bg-[#86b817]/10 p-3 rounded-full flex-shrink-0">
                        {React.cloneElement(item.icon, {
                          className: "w-6 h-6 text-[#86b817]",
                        })}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                    <p
                      className="text-gray-600 relative z-10"
                      data-aos="fade-left"
                      data-aos-delay={350 + index * 100}
                    >
                      {item.description}
                    </p>

                    {/* Animated connector dot */}
                    <div className="hidden lg:block absolute top-1/2 -left-8 w-5 h-5 rounded-full bg-[#86b817] transform -translate-y-1/2 shadow-[0_0_0_4px_rgba(134,184,23,0.2)]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add this to your global CSS or CSS-in-JS */}
        <style jsx>{`
          @keyframes timeline-line {
            0% {
              height: 0;
            }
            100% {
              height: 100%;
            }
          }
          .animate-timeline-line {
            animation: timeline-line 1.5s ease-out forwards;
          }

          @keyframes ping-once {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.5);
              opacity: 0;
            }
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }
          .animate-ping-once {
            animation: ping-once 0.8s ease-out forwards;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
            Ready to Start Your Adventure?
          </h2>
          <p
            className="text-xl text-gray-300 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's craft your perfect journey together
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/contactus">
              <button className="bg-[#86b817] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#7aa815] transition-colors shadow-lg">
                Get in Touch
              </button>
            </Link>
            <Link to="/destination">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Browse Tours
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80"
                  alt="Sustainable travel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-[#86b817]/10 p-3 rounded-full">
                    <Umbrella className="w-8 h-8 text-[#86b817]" />
                  </div>
                  <div>
                    <h4 className="font-bold">Eco-Certified</h4>
                    <p className="text-sm text-gray-600">Sustainable Tourism</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <span className="text-[#86b817] font-medium tracking-wider">
                OUR COMMITMENT
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-6">
                Responsible & Sustainable Travel
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We're committed to preserving the destinations we love through
                sustainable tourism practices that benefit local communities and
                protect natural environments.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Sunrise className="w-6 h-6 text-[#86b817]" />,
                    title: "Carbon Neutral Trips",
                    description: "Offsetting emissions for all our tours",
                  },
                  {
                    icon: <Users className="w-6 h-6 text-[#86b817]" />,
                    title: "Community Support",
                    description: "30% of profits go to local initiatives",
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-[#86b817]" />,
                    title: "Wildlife Protection",
                    description: "Ethical animal experiences only",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#86b817]/10 p-3 rounded-full flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-2 pt-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span
              className="text-[#86b817] font-medium tracking-wider"
              data-aos="fade-up"
            >
              OUR NETWORK
            </span>
            <h2
              className="text-4xl font-bold mt-2 mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Trusted Global Partners
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We collaborate with the best in the industry to deliver
              exceptional experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lufthansa_logo_2018.svg/2560px-Lufthansa_logo_2018.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Marriott_Logo.svg/2560px-Marriott_Logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Hertz_logo_2016.svg/1200px-Hertz_logo_2016.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Lonely_Planet_logo.svg/2560px-Lonely_Planet_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/800px-Visa_Logo.png",
            ].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* <div className="mt-16 text-center" data-aos="fade-up">
            <button className="inline-flex items-center border-2 border-[#86b817] text-[#86b817] px-6 py-3 rounded-full font-medium hover:bg-[#86b817] hover:text-white transition-colors">
              Become a Partner
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div> */}
        </div>
      </section>

      <TestimonialSection />
    </div>
  );
};

export default AboutUs;
