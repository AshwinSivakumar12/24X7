import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GuideSection = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const guides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Rajiv Kapoor",
      designation: "Himalayan Trekking Expert",
      about:
        "Born and raised in the Himalayas, Rajiv has been guiding treks for over 15 years. His deep knowledge of mountain ecosystems and local cultures makes every journey unforgettable.",
      achievements:
        "Guided 200+ treks to Everest Base Camp. Featured in National Geographic's 'Masters of the Mountains' documentary.",
      specializations: [
        "High-altitude expeditions",
        "Cultural immersion treks",
        "Winter mountaineering",
        "Photography tours",
      ],
      languages: ["Hindi", "English", "Nepali", "Tibetan"],
      certifications: [
        "UIAGM Certified Mountain Guide",
        "Wilderness First Responder",
        "Avalanche Safety Instructor",
      ],
      yearsExperience: 15,
      tripsGuided: 287,
      favoriteQuote:
        "Mountains are not stadiums where I satisfy my ambition, they are cathedrals where I practice my religion.",
      social: {
        facebook: "#",
        instagram: "#",
        youtube: "#",
        linkedin: "#",
      },
      featuredTours: [
        "Everest Base Camp Trek",
        "Annapurna Circuit",
        "Valley of Flowers Expedition",
      ],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      name: "Priya Sharma",
      designation: "Cultural Heritage Specialist",
      about:
        "With a PhD in South Asian History, Priya brings ancient civilizations to life through her engaging storytelling and deep archaeological knowledge.",
      achievements:
        "Recipient of the 'Outstanding Tour Guide' award by Ministry of Tourism. Consultant for UNESCO World Heritage sites.",
      specializations: [
        "Temple architecture",
        "Mughal history",
        "Textile traditions",
        "Culinary heritage",
      ],
      languages: ["Hindi", "English", "French", "Sanskrit"],
      certifications: [
        "Certified Archaeological Guide",
        "Food Safety Supervisor",
        "Museum Interpretation Specialist",
      ],
      yearsExperience: 12,
      tripsGuided: 420,
      favoriteQuote:
        "Every stone tells a story, we just need to learn how to listen.",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
        website: "#",
      },
      featuredTours: [
        "Golden Triangle Cultural Tour",
        "Temples of Khajuraho",
        "Rajasthan Heritage Trail",
      ],
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
      name: "Arjun Patel",
      designation: "Wildlife Safari Naturalist",
      about:
        "Former forest ranger turned conservationist, Arjun can identify over 500 bird species by call and knows the secret watering holes of Bengal tigers.",
      achievements:
        "Discovered new leopard territory in Western Ghats. Contributed to 3 wildlife documentaries for BBC Earth.",
      specializations: [
        "Big cat tracking",
        "Bird watching",
        "Night safaris",
        "Conservation tourism",
      ],
      languages: ["Hindi", "English", "Kannada", "Gujarati"],
      certifications: [
        "FGASA Level 3 Field Guide",
        "Wildlife Photography Instructor",
        "Eco-Tourism Specialist",
      ],
      yearsExperience: 8,
      tripsGuided: 350,
      favoriteQuote:
        "In the jungle, you don't see wildlife - you experience it with all your senses.",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
        blog: "#",
      },
      featuredTours: [
        "Ranthambore Tiger Safari",
        "Bharatpur Bird Sanctuary",
        "Kabini Wildlife Expedition",
      ],
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openModal = (guide) => {
    setSelectedGuide(guide);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-[#86b817] bg-[#86b817]/10 rounded-full mb-4">
            OUR GUIDES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert Guides
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Professional guides with extensive knowledge and passion for
            creating unforgettable experiences.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div
              key={guide.id}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-white transition-all duration-300 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Guide Image */}
              <div className="h-80 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Guide Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {guide.name}
                    </h3>
                    <p className="text-[#86b817] font-medium">
                      {guide.designation}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    {/* Social icons remain the same */}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{guide.about}</p>

                <button
                  onClick={() => openModal(guide)}
                  className="w-full py-2 px-4 bg-transparent border border-[#86b817] text-[#86b817] font-medium rounded-lg hover:bg-[#86b817] hover:text-white transition-colors"
                >
                  View Profile
                </button>
              </div>

              {/* Achievements Tooltip */}
              <div className="absolute inset-x-0 bottom-full mb-2 mx-4 p-3 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-bold text-gray-900 mb-1">
                  Key Achievements
                </h4>
                <p className="text-sm text-gray-600">{guide.achievements}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-[#86b817] text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg">
            Browse All Guides
          </button>
        </div> */}
      </div>

      {/* Guide Profile Modal */}
      {isModalOpen && selectedGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay with animated backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
            onClick={closeModal}
          />

          {/* Modal container with slide-up animation */}
          <div
            className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#86b817] to-emerald-700 p-6 flex justify-between items-center rounded-t-xl">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedGuide.name}'s Profile
                </h3>
                <p className="text-emerald-100">{selectedGuide.designation}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Guide Image */}
                <div className="md:w-1/3">
                  <div className="relative pb-[125%] rounded-lg overflow-hidden shadow-md">
                    <img
                      src={selectedGuide.image}
                      alt={selectedGuide.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 flex justify-center space-x-4">
                    {Object.entries(selectedGuide.social).map(
                      ([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          className="p-2 bg-gray-100 rounded-full hover:bg-[#86b817] hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${platform} profile`}
                        >
                          {platform === "facebook" && (
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                          )}
                          {platform === "instagram" && (
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                          )}
                          {/* Add other social icons as needed */}
                        </a>
                      )
                    )}
                  </div>
                </div>

                {/* Guide Details */}
                <div className="md:w-2/3 space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      About
                    </h4>
                    <p className="text-gray-600">{selectedGuide.about}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2">
                        Specializations
                      </h5>
                      <ul className="space-y-2">
                        {selectedGuide.specializations?.map((spec, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-[#86b817] mr-2 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-600">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold text-gray-900 mb-2">
                        Languages
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedGuide.languages?.map((lang, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-[#86b817]/10 text-[#86b817] rounded-full text-sm"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {selectedGuide.featuredTours && (
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2">
                        Featured Tours
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {selectedGuide.featuredTours.map((tour, i) => (
                          <div
                            key={i}
                            className="bg-[#86b817]/10 p-3 rounded-lg border border-[#86b817]/20"
                          >
                            <p className="text-[#86b817] font-medium text-center">
                              {tour}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Sections */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h6 className="font-bold text-gray-900 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 text-[#86b817] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Certifications
                  </h6>
                  <ul className="space-y-2">
                    {selectedGuide.certifications?.map((cert, i) => (
                      <li key={i} className="text-gray-600">
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h6 className="font-bold text-gray-900 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 text-[#86b817] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Experience
                  </h6>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Years</p>
                      <p className="text-2xl font-bold text-[#86b817]">
                        {selectedGuide.yearsExperience}+
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Trips Guided</p>
                      <p className="text-2xl font-bold text-[#86b817]">
                        {selectedGuide.tripsGuided}+
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Favorite Quote */}
              {selectedGuide.favoriteQuote && (
                <div className="mt-8 p-5 bg-[#86b817]/5 border-l-4 border-[#86b817] rounded-r-lg">
                  <blockquote className="text-gray-700 italic">
                    "{selectedGuide.favoriteQuote}"
                  </blockquote>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 p-4 border-t flex justify-end space-x-3 rounded-b-xl">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GuideSection;
