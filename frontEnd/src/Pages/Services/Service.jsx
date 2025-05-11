import React, { useEffect } from "react";
import {
  Compass,
  Mountain,
  MapPin,
  Map,
  Camera,
  Users,
  Utensils,
  Hotel,
  Shield,
  ChevronRight,
  CalendarDays,
  Calendar,
  Globe,
  Sun,
  Plane,
  Clock,
  Star,
  Heart,
  User,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import TestimonialSection from "../Home/Customer";
import { Link } from "react-router-dom";

const TourServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const services = [
    {
      icon: Compass,
      title: "Adventure Tours",
      description:
        "Experience thrilling adventures with our expert guides. From mountain climbing to river rafting.",
      image:
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: Mountain,
      title: "Mountain Expeditions",
      description:
        "Scale the heights of majestic peaks with professional mountaineering equipment and guides.",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: Map,
      title: "Cultural Tours",
      description:
        "Immerse yourself in local traditions, customs, and historical landmarks.",
      image:
        "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const features = [
    {
      icon: Camera,
      title: "Photography Tours",
      description:
        "Capture stunning landscapes and moments with professional photography guidance.",
    },
    {
      icon: Users,
      title: "Group Tours",
      description:
        "Join like-minded travelers for shared experiences and lasting friendships.",
    },
    {
      icon: Utensils,
      title: "Culinary Experiences",
      description:
        "Taste local cuisines and learn traditional cooking methods.",
    },
    {
      icon: Hotel,
      title: "Luxury Accommodations",
      description: "Stay in carefully selected premium hotels and resorts.",
    },
  ];

  const destinations = [
    {
      name: "Santorini, Greece",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      price: "$1,299",
      duration: "7 days",
      rating: 4.9,
    },
    {
      name: "Machu Picchu, Peru",
      image:
        "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80",
      price: "$1,499",
      duration: "8 days",
      rating: 4.8,
    },
    {
      name: "Bali, Indonesia",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      price: "$999",
      duration: "6 days",
      rating: 4.7,
    },
    {
      name: "Swiss Alps",
      image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
      price: "$1,799",
      duration: "9 days",
      rating: 5.0,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Adventure Enthusiast",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      quote:
        "The most amazing experience of my life! The guides were exceptional and the destinations were breathtaking.",
    },
    {
      name: "Michael Chen",
      role: "Photography Lover",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      quote:
        "Perfect blend of adventure and comfort. Every detail was thoughtfully planned.",
    },
  ];

  const coreServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Worldwide Tours",
      description: "Expertly curated global adventures with local guides",
      features: [
        "500+ destinations worldwide",
        "Custom itineraries",
        "24/7 support",
        "Cultural immersion",
      ],
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Luxury Accommodations",
      description: "Handpicked hotels and unique stays",
      features: [
        "10,000+ properties",
        "Best price guarantee",
        "Verified reviews",
        "Flexible bookings",
      ],
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Travel Guides",
      description: "Personalized guidance from destination experts",
      features: [
        "Local insights",
        "Hidden gems",
        "Multilingual guides",
        "Custom experiences",
      ],
    },
    {
      icon: <CalendarDays className="w-8 h-8" />,
      title: "Event Planning",
      description: "Seamless corporate and leisure event coordination",
      features: [
        "Venue selection",
        "Full logistics",
        "Theme design",
        "Vendor management",
      ],
    },
  ];

  const specializedServices = [
    {
      title: "Adventure Packages",
      description: "Thrilling experiences from hiking to water sports",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: "Honeymoon Planning",
      description: "Romantic getaways tailored for couples",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Family Vacations",
      description: "Kid-friendly itineraries and accommodations",
      icon: <User className="w-6 h-6" />,
    },
    {
      title: "Business Travel",
      description: "Efficient corporate travel solutions",
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Explore the World's <br />
              <span className="text-[#86b817]">Most Beautiful Places</span>
            </h1>
            <p
              className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Discover handcrafted travel experiences that create lifelong
              memories
            </p>
            <Link to="/destination">
              <button
                className="bg-[#86b817] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#7aa815] transition-colors shadow-lg hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Explore Tours
              </button>
            </Link>
            <div
              className="mt-8 flex justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center text-white">
                <Shield className="w-5 h-5 mr-2" />
                <span>Trusted Guides</span>
              </div>
              <div className="flex items-center text-white">
                <Star className="w-5 h-5 mr-2 fill-current" />
                <span>5-Star Experiences</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#86b817] font-semibold" data-aos="fade-up">
              OUR SERVICES
            </span>
            <h2
              className="text-4xl font-bold text-gray-900 mb-4 mt-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Unforgettable Travel Experiences
            </h2>
            <div
              className="w-24 h-1.5 bg-[#86b817] mx-auto rounded-full"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {/* <button className="flex items-center text-[#86b817] font-semibold hover:text-[#7aa815] group">
                    Learn More{" "}
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="text-[#86b817] font-semibold"
                data-aos="fade-right"
              >
                WHY CHOOSE US
              </span>
              <h2
                className="text-4xl font-bold mb-6 mt-2"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Your Perfect Travel Partner
              </h2>
              <p
                className="text-gray-600 mb-8"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                With years of experience in the tourism industry, we provide
                exceptional services that ensure memorable experiences for all
                our clients.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    data-aos="fade-right"
                    data-aos-delay={300 + index * 100}
                  >
                    <div className="bg-[#86b817]/10 p-3 rounded-full mr-4">
                      <feature.icon className="w-6 h-6 text-[#86b817]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
                alt="Scenic landscape"
                className="rounded-2xl shadow-xl w-full"
                data-aos="zoom-in-left"
              />
              <div
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#86b817]/10 p-3 rounded-full">
                    <Shield className="w-8 h-8 text-[#86b817]" />
                  </div>
                  <div>
                    <h4 className="font-bold">100% Satisfaction</h4>
                    <p className="text-sm text-gray-600">
                      Guaranteed or money back
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="absolute -top-6 -right-6 bg-[#86b817] text-white p-6 rounded-xl shadow-lg"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
            >
              Our Core Services
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Comprehensive travel solutions designed to meet all your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 rounded-lg bg-[#86b817]/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#86b817] mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* <button className="flex items-center text-[#86b817] font-medium hover:text-[#6a9e12] group">
                  Learn more{" "}
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#86b817] font-semibold" data-aos="fade-up">
              EXPLORE
            </span>
            <h2
              className="text-4xl font-bold text-gray-900 mb-4 mt-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Popular Destinations
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Discover our most sought-after destinations, each offering unique
              experiences and unforgettable memories.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden rounded-xl shadow-md">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#86b817] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.rating} ★
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {destination.name}
                    </h3>
                    <div className="flex items-center justify-between text-white">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />{" "}
                        {destination.duration}
                      </span>
                      <span className="font-bold bg-white/20 px-3 py-1 rounded-full">
                        {destination.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/destination">
              <button className="border-2 border-[#86b817] text-[#86b817] hover:bg-[#86b817] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors">
                View All Destinations
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#86b817]/10 text-[#86b817] rounded-full text-sm font-medium mb-4">
              SPECIALIZED OFFERINGS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tailored Travel Experiences
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Custom solutions designed for every type of adventurer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl group transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#86b817]/10 to-[#86b817]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative bg-white p-8 h-full flex flex-col border border-gray-100 rounded-2xl">
                  <div
                    className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center text-[#86b817] bg-[#86b817]/10 group-hover:bg-[#86b817] group-hover:text-white transition-colors duration-300`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* <div className="mt-auto">
                    <button className="inline-flex items-center text-[#86b817] font-medium group">
                      <span className="mr-2">Discover more</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-16 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-[#86b817] text-[#86b817] rounded-full font-medium hover:bg-[#86b817] hover:text-white transition-colors duration-300">
              View all specialized services
              <ChevronRight className="w-4 h-4 ml-2" />
            </button> */}
          {/* </div> */}
        </div>
      </section>

      <section className="py-2 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
            >
              How Our Service Works
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Simple steps to your perfect travel experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Share your travel preferences and requirements",
              },
              {
                step: "02",
                title: "Planning",
                description: "We create customized itinerary options",
              },
              {
                step: "03",
                title: "Booking",
                description: "Secure your reservations with our assistance",
              },
              {
                step: "04",
                title: "Travel",
                description: "Enjoy your trip with our ongoing support",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 rounded-full bg-[#86b817] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      {/* Testimonials */}
      <TestimonialSection />

      {/* Stats Section */}
      <section className="py-20 bg-[#86b817] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, stat: "50+", label: "Destinations" },
              { icon: Users, stat: "10,000+", label: "Happy Travelers" },
              { icon: Calendar, stat: "15+", label: "Years Experience" },
              { icon: Heart, stat: "95%", label: "Satisfaction Rate" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{item.stat}</div>
                <div className="text-white/90">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div
          className="max-w-4xl mx-auto px-4 text-center bg-[#1a1a1a] rounded-2xl p-12 shadow-xl"
          data-aos="zoom-in"
        >
          <Plane
            className="w-12 h-12 mx-auto mb-4 text-[#86b817]"
            data-aos="fade-down"
            data-aos-delay="100"
          />
          <h2
            className="text-3xl font-bold mb-4"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Join Our Travel Community
          </h2>
          <p
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Subscribe to get exclusive travel deals, insider tips, and inspiring
            stories delivered straight to your inbox.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#86b817]"
            />
            <button className="px-8 py-3 bg-[#86b817] rounded-full font-semibold hover:bg-[#7aa815] transition-colors">
              Subscribe
            </button>
          </div>
          <p
            className="text-xs text-gray-500 mt-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#86b817] to-[#6a9e12]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            <h2
              className="text-4xl font-bold text-white mb-6"
              data-aos="fade-down"
            >
              Ready for Your Next Adventure?
            </h2>
            <p
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Let us craft your perfect getaway. Contact us today to start
              planning your dream vacation.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link to="/contactus">
                <button className="bg-white text-[#86b817] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  Book Now
                </button>
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourServices;
