import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Parallax, Navigation } from "swiper/modules";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/parallax";
import "swiper/css/navigation";
import { FiArrowRight, FiArrowLeft, FiChevronDown } from "react-icons/fi";
import himachal from "../../assets/20250510_1707_Majestic Mountain Village_remix_01jtwznfeteemvxr164k5jf20h.png";
import kashmir from "../../assets/20250510_1727_Enhanced Mountain Landscape_remix_01jtx0vnd8e7dshg1a20b4jcpa.png";
import tamilNadu from "../../assets/tn.png";
import kerala from "../../assets/20250510_1712_Scenic River Houseboat_remix_01jtwzzc0fezgvrhsnj3nxvvtc.png";
import karnataka from "../../assets/20250510_1720_Enhanced Palace Image_remix_01jtx0dyzrfnftxx5r46ezv8yq.png";
import Navbar from "../../Common/Navbar";

// Enhanced banner data with captivating text and tags
const banners = [
  {
    image: himachal,
    subtitle: "Escape to Paradise",
    title: "HIMACHAL HIDEAWAYS",
    description: "Where snow-capped peaks meet lush green valleys",
    tag: "Mountain Magic",
    color: "from-blue-900/30 to-emerald-900/20",
    highlight: "text-emerald-300",
    button: "bg-gradient-to-r from-emerald-500 to-teal-400",
    cta: "Book Your Mountain Retreat",
  },
  {
    image: kashmir,
    subtitle: "Discover Heaven on Earth",
    title: "KASHMIR DREAMS",
    description: "Sparkling lakes, blooming gardens, and majestic mountains",
    tag: "Romantic Getaway",
    color: "from-purple-900/30 to-indigo-900/20",
    highlight: "text-indigo-300",
    button: "bg-gradient-to-r from-indigo-500 to-purple-400",
    cta: "Experience the Magic",
  },
  {
    image: kerala,
    subtitle: "Journey Through Nature",
    title: "KERALA SERENITY",
    description: "Backwaters that whisper stories of timeless beauty",
    tag: "Tropical Bliss",
    color: "from-green-900/30 to-teal-900/20",
    highlight: "text-teal-300",
    button: "bg-gradient-to-r from-teal-500 to-green-400",
    cta: "Sail Into Tranquility",
  },
  {
    image: tamilNadu,
    subtitle: "Walk Through History",
    title: "TAMIL NADU WONDERS",
    description: "Ancient temples meet vibrant modern culture",
    tag: "Cultural Gem",
    color: "from-amber-900/30 to-orange-900/20",
    highlight: "text-amber-300",
    button: "bg-gradient-to-r from-amber-500 to-orange-400",
    cta: "Explore Heritage",
  },
  {
    image: karnataka,
    subtitle: "Experience Royal Splendor",
    title: "KARNATAKA CHARM",
    description: "Palaces, waterfalls, and tech hubs in perfect harmony",
    tag: "Royal Adventure",
    color: "from-red-900/30 to-pink-900/20",
    highlight: "text-pink-300",
    button: "bg-gradient-to-r from-pink-500 to-red-400",
    cta: "Begin Your Quest",
  },
];

const BannerSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTagline, setCurrentTagline] = useState("");
  const taglines = [
    "Your Adventure Starts Here",
    "Unforgettable Experiences Await",
    "Discover Your Next Favorite Place",
    "Travel More, Worry Less",
    "Where Memories Are Made",
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Rotate taglines every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline(taglines[Math.floor(Math.random() * taglines.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden group"
    >
      {/* Animated Glow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${
              index === activeIndex ? "opacity-20" : "opacity-0"
            } transition-opacity duration-1000`}
            style={{
              background: `radial-gradient(circle at center, ${banners[
                index
              ].highlight.replace("text-", "")} 0%, transparent 70%)`,
              zIndex: -1,
            }}
          />
        ))}
      </div>

      <Swiper
        modules={[Autoplay, EffectFade, Parallax, Navigation]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1800}
        loop={true}
        effect="fade"
        parallax={true}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="relative w-full h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner.image})`,
                y,
              }}
            >
              {/* Next-gen Glass Morphism Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${banner.color} backdrop-blur-[2px]`}
              >
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]`}"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                    initial={{
                      opacity: 0,
                      y: `${Math.random() * 100 - 50}%`,
                      x: `${Math.random() * 100 - 50}%`,
                      scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                      opacity: [0, 0.3, 0],
                      y: `${Math.random() * 100 - 50}%`,
                      x: `${Math.random() * 100 - 50}%`,
                    }}
                    transition={{
                      duration: Math.random() * 15 + 15,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: Math.random() * 10,
                    }}
                    style={{
                      width: `${Math.random() * 150 + 50}px`,
                      height: `${Math.random() * 150 + 50}px`,
                    }}
                  />
                ))}
              </div>

              {/* <Navbar transparent /> */}

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                  >
                    {/* Animated Tag */}
                    <motion.div
                      className={`inline-block px-4 py-1 mb-4 ${banner.highlight} bg-black/30 rounded-full backdrop-blur-sm border border-white/20`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-sm font-medium tracking-wider">
                        {banner.tag}
                      </span>
                    </motion.div>

                    <motion.h2
                      className={`text-xl md:text-3xl font-medium mb-2 tracking-widest uppercase ${banner.highlight}`}
                    >
                      {banner.subtitle}
                    </motion.h2>

                    <motion.h1
                      className="text-5xl md:text-8xl font-bold tracking-tight mb-4"
                      style={{
                        textShadow: "3px 3px 15px rgba(0,0,0,0.8)",
                        background: "linear-gradient(to right, #fff, #e5e7eb)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {banner.title}
                    </motion.h1>

                    <motion.p
                      className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {banner.description}
                    </motion.p>

                    {/* Rotating Tagline */}
                    <motion.div
                      className="text-lg italic mb-8 text-white/80"
                      key={currentTagline}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      "{currentTagline}"
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block"
                    >
                      <Link to="/contactus">
                        <button
                          className={`px-8 py-3 ${banner.button} rounded-full text-white font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:brightness-110`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{banner.cta}</span>
                            <FiArrowRight
                              className="transition-transform group-hover:translate-x-1"
                              size={20}
                            />
                          </div>
                        </button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Enhanced Location Indicator */}

              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {banners.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      idx === activeIndex ? "bg-white w-8" : "bg-white/30 w-4"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows with Hover Animation */}
      <button
        className="swiper-prev absolute left-4 top-1/2 z-20 -translate-y-1/2 p-4 rounded-full bg-black/30 backdrop-blur-sm text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-black/50 hover:scale-110"
        aria-label="Previous slide"
      >
        <FiArrowLeft size={28} />
      </button>
      <button
        className="swiper-next absolute right-4 top-1/2 z-20 -translate-y-1/2 p-4 rounded-full bg-black/30 backdrop-blur-sm text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-black/50 hover:scale-110"
        aria-label="Next slide"
      >
        <FiArrowRight size={28} />
      </button>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        style={{ opacity }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-1 text-white/80 font-medium">
            Discover More Below
          </span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiChevronDown size={24} className="text-white" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-slide {
          overflow: hidden;
        }
        .swiper-slide-active {
          z-index: 1;
        }
        .swiper-parallax {
          transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
        }
      `}</style>
    </section>
  );
};

export default BannerSection;
