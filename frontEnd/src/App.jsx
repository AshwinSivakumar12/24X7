import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-parallax";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import Home from "./Pages/Home/Home";
import TourServices from "./Pages/Services/Service";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactPage from "./Pages/ContactUs/ContactUs";
import PackageDetails from "./Pages/Home/PakageDetails";
import DestinationsPage from "./Pages/Destination/Destination";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-0 mt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<TourServices />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactPage />} />
            <Route path="/package/:id" element={<PackageDetails />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/destination" element={<DestinationsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
