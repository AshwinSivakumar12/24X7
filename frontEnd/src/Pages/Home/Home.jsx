import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import TourismBanner from "./Banner";
import Aboutus from "./Aboutus";
import Seervice from "./Service";
import Destination from "./Destination";
import Package from "./Package";
import BookingSection from "./BookingSection";
import GuideSection from "./TravelGuide";
import TestimonialSection from "./Customer";

const Home = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax effects
  const bannerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const aboutOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const serviceScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden" // Added relative positioning
    >
      {/* Banner with strong parallax */}
      <motion.div style={{ y: bannerY }}>
        <TourismBanner />
      </motion.div>

      {/* About Us with fade effect */}
      <motion.div style={{ opacity: aboutOpacity }}>
        <Aboutus />
      </motion.div>

      {/* Services with scale effect */}
      <motion.div style={{ scale: serviceScale }}>
        <Seervice />
      </motion.div>

      {/* Destination with scroll-triggered animation */}
      <div data-aos="fade-up">
        <Destination />
      </div>

      {/* Package section */}
      <Package />

      {/* Booking section with subtle parallax */}
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}>
        <BookingSection />
      </motion.div>

      {/* Guide section */}
      <GuideSection />

      {/* Testimonials with fade-in effect */}
      <div data-aos="zoom-in">
        <TestimonialSection />
      </div>
    </div>
  );
};

export default Home;
