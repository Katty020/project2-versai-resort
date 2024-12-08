import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [navBgOpacity, setNavBgOpacity] = useState(0.1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newOpacity = Math.min(0.8, scrollTop / 300);
      setNavBgOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-screen"
        style={{
          backgroundImage: "url('/pexels-photo-258154.webp')",
        }}
      >
        
        <nav
          className={`fixed top-0 w-full flex justify-between items-center py-4 bg-white ${
            navBgOpacity > 0.1 ? "backdrop-filter backdrop-blur-lg" : ""
          }`}
          style={{ backgroundColor: `rgba(255, 255, 255, ${navBgOpacity})` }}
        >
          <ul className="hidden md:flex justify-center text-white uppercase flex-1 space-x-2 md:space-x-6 text-xs md:text-base">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">War Fort</a>
            </li>
            <li>
              <a href="#">Accommodations</a>
            </li>
            <li>
              <a href="#">Dining</a>
            </li>
          </ul>
          <img
            src="/Screenshot 2024-12-08 200630.png"
            alt="Resort Logo"
            className="h-8 md:h-20 mx-2 md:mx-8"
          />
          <ul className="hidden md:flex justify-center text-white uppercase flex-1 space-x-2 md:space-x-6 text-xs md:text-base">
            <li>
              <a href="#">Curated Experiences</a>
            </li>
            <li>
              <a href="#">Celebrations</a>
            </li>
            <li>
              <a href="#">Polo</a>
            </li>
            <li>
              <a href="#">Book Now</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#x22EE;
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-0 right-0 w-2/3 h-full bg-white z-50">
            <ul className="flex flex-col items-center justify-center h-full space-y-4 text-black uppercase text-base">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">War Fort</a>
              </li>
              <li>
                <a href="#">Accommodations</a>
              </li>
              <li>
                <a href="#">Dining</a>
              </li>
              <li>
                <a href="#">Curated Experiences</a>
              </li>
              <li>
                <a href="#">Celebrations</a>
              </li>
              <li>
                <a href="#">Polo</a>
              </li>
              <li>
                <a href="#">Book Now</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        )}

        <div className="text-center text-white h-full flex flex-col justify-center items-center px-4">
          <motion.h1
            className="text-2xl md:text-5xl font-bold mb-2 md:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to India's First Luxury 
            <div> Heritage Polo Resort</div>
          </motion.h1>
          <p className="text-sm md:text-xl max-w-2xl">
            125 luxurious rooms amidst a 20-acre private estate ideal for
            milestone celebrations and a unique curated experience.
          </p>
        </div>

        <div className="absolute bottom-4 left-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Book Now</button>
        </div>
        <div className="absolute bottom-4 right-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Connect Now</button>
        </div>
      </div>
      <div className="relative py-8 md:py-16 px-4 bg-white text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-6">Discover</h2>
        <h3 className="text-lg md:text-2xl mb-2 md:mb-8">Your Own Paradise</h3>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-4 md:mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          aspernatur? Esse harum nihil dicta aperiam magni assumenda, obcaecati
          facere id autem quas. Ullam perspiciatis quae sapiente deserunt. Ut
          labore ipsa tempore doloribus voluptate dolorem?
        </p>
        <div className="absolute top-0 right-0">
          <img
            src="/ppp.jpg"
            alt="Resort Logo"
            className="h-10 md:h-40 mx-2 md:mx-8"
          />
        </div>
        <div className="absolute bottom-0 left-0">
          <img
            src="/Picture1.jpg"
            alt="Resort Logo"
            className="h-10 md:h-40 mx-2 md:mx-8"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
