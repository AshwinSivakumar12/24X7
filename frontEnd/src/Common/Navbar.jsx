import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  FaHome,
  FaServicestack,
  FaInfoCircle,
  FaMapMarkedAlt,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black px-4 py-3 md:px-10 md:py-4 flex justify-center items-center shadow-md">
        {/* Logo */}
        <div className="flex-grow flex justify-start">
          <Link
            to="/"
            className="text-white font-black text-xl md:text-3xl tracking-widest"
          >
            24x7 Travels
          </Link>
        </div>

        {/* Desktop Nav + Contact */}
        <div className="hidden md:flex-grow md:flex justify-center">
          {/* Nav Links */}
          <nav className="flex space-x-5 text-white font-semibold text-base tracking-wide">
            <Link
              to="/services"
              className={`transition duration-300 ${
                isActive("/services")
                  ? "text-green-400"
                  : "hover:text-green-400"
              }`}
            >
              Services
            </Link>
            <Link
              to="/aboutus"
              className={`transition duration-300 ${
                isActive("/aboutus") ? "text-green-400" : "hover:text-green-400"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/destination"
              className={`transition duration-300 ${
                isActive("/destination")
                  ? "text-green-400"
                  : "hover:text-green-400"
              }`}
            >
              Destination
            </Link>
            <Link
              to="/contactus"
              className={`transition duration-300 ${
                isActive("/contactus")
                  ? "text-green-400"
                  : "hover:text-green-400"
              }`}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex-grow md:flex justify-end flex-col text-sm text-white text-right leading-snug">
          <span className="opacity-90">24x7travel@gmail.com</span>
          <span className="opacity-90">+91 63699 79989</span>
        </div>
      </header>

      {/* Bottom Mobile Navbar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center bg-black text-white py-2.5 border-t border-gray-700 z-50 md:hidden shadow-inner">
        <NavIcon
          to="/"
          icon={<FaHome size={20} />}
          label="Home"
          active={isActive("/")}
        />
        <NavIcon
          to="/services"
          icon={<FaServicestack size={20} />}
          label="Services"
          active={isActive("/services")}
        />
        <NavIcon
          to="/contactus"
          icon={<FaEnvelope size={20} />}
          label="Contact"
          active={isActive("/contactus")}
        />

        <NavIcon
          to="/destination"
          icon={<FaMapMarkedAlt size={20} />}
          label="Travel"
          active={isActive("/destination")}
        />
        <NavIcon
          to="/aboutus"
          icon={<FaInfoCircle size={20} />}
          label="About"
          active={isActive("/aboutus")}
        />
      </nav>
    </>
  );
};

// Reusable icon + label component for mobile nav
const NavIcon = ({ to, icon, label, active }) => (
  <Link
    to={to}
    className={`flex flex-col items-center gap-1 text-xs transition duration-200 ${
      active ? "text-green-400" : "hover:text-green-300"
    }`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default Navbar;
