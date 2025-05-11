// Footer.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Gallery images - using higher quality Unsplash images with relevant categories
  const galleryImages = [
    {
      id: 1,
      url: "https://example.com/images/beach1.jpg",
      alt: "Tropical beach vacation",
    },
    {
      id: 2,
      url: "https://example.com/images/mountain1.jpg",
      alt: "Mountain resort",
    },
    {
      id: 3,
      url: "https://example.com/images/city1.jpg",
      alt: "City skyline tour",
    },
    {
      id: 4,
      url: "https://example.com/images/culture1.jpg",
      alt: "Cultural experience",
    },
    {
      id: 5,
      url: "https://example.com/images/hotel1.jpg",
      alt: "Luxury hotel pool",
    },
    {
      id: 6,
      url: "https://example.com/images/adventure1.jpg",
      alt: "Hiking adventure",
    },
    {
      id: 7,
      url: "https://example.com/images/food1.jpg",
      alt: "Local cuisine",
    },
    {
      id: 8,
      url: "https://example.com/images/safari1.jpg",
      alt: "Wildlife safari",
    },
  ];

  // Popular destinations for replacement option
  const popularDestinations = [
    { name: "Paris", country: "France" },
    { name: "Tokyo", country: "Japan" },
    { name: "New York", country: "USA" },
    { name: "Rome", country: "Italy" },
    { name: "Sydney", country: "Australia" },
    { name: "Bali", country: "Indonesia" },
  ];

  return (
    <footer className="bg-[#0b0c10] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#86b817] transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#86b817] transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#86b817] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#86b817] transition-colors">
                Terms & Condition
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#86b817] transition-colors">
                FAQs & Help
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#86b817]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              123 Street, Chennai, India
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#86b817]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 6369979989
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#86b817]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              24X7travel@gmail.com
            </li>
            <li className="flex gap-3 mt-4">
              {[
                "twitter",
                "facebook-f",
                "youtube",
                "instagram",
                "linkedin-in",
              ].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#86b817] transition-colors"
                  aria-label={platform}
                >
                  <i className={`fab fa-${platform} text-white`}></i>
                </a>
              ))}
            </li>
          </ul>
        </div>

        {/* Gallery - Enhanced with better images */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg font-bold mb-4">Travel Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {galleryImages.map((img) => (
              <a
                key={img.id}
                href="#"
                className="group relative overflow-hidden rounded hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-24 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/200?text=Image+Not+Found";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Alternative section - Popular Destinations (uncomment to use instead of gallery) */}
        {/* <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg font-bold mb-4">Popular Destinations</h3>
          <ul className="space-y-2 text-sm">
            {popularDestinations.map((dest, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-[#86b817]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <a href="#" className="hover:text-[#86b817] transition-colors">
                  {dest.name}, {dest.country}
                </a>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Newsletter */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to get special offers, travel inspiration and more.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#86b817]"
              required
            />
            <button
              type="submit"
              className="bg-[#86b817] px-4 py-2 rounded-r hover:bg-green-600 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs mt-2 text-gray-400">
            We'll never share your email with anyone else.
          </p>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 mr-2 text-[#86b817]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <p>© 2025 24X7 Travel. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a href="#" className="hover:text-[#86b817] transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-[#86b817] transition-colors">
            Cookies
          </a>
          <a href="#" className="hover:text-[#86b817] transition-colors">
            Help
          </a>
          <a href="#" className="hover:text-[#86b817] transition-colors">
            FAQs
          </a>
          <a href="#" className="hover:text-[#86b817] transition-colors">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
