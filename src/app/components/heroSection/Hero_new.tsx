"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import HeroBg from "@/assets/Homepage/background.png";
import LogoImage from "@/assets/Homepage/logo_new.png";

const Hero_new = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-12 px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${HeroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Slow gradient shift, purely decorative, respects prefers-reduced-motion via MotionConfig */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, rgba(59,130,246,0.25), rgba(139,92,246,0.25), rgba(37,150,190,0.25))",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center space-y-6 sm:space-y-8 lg:pl-16">
        {/* Main Content */}
        <div className="text-white space-y-4 sm:space-y-6">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Data &amp; AI Engineering Partner for Growing Companies
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
            We build intelligent solutions in Data Engineering, BI &amp;
            Analytics, and Data Science, AI &amp; Automation.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button
              onClick={() => {
                const auditSection = document.getElementById("data-bi-audit");
                if (auditSection) {
                  auditSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-blue-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Get a Data &amp; BI Audit
            </button>

            <button
              onClick={() => {
                const servicesSection = document.getElementById("our-services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm sm:text-base"
            >
              See Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Logo and Branding Section */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center justify-center -mt-8 sm:-mt-12 lg:-mt-16 -ml-8 sm:-ml-16 lg:-ml-24">
        {/* Large Graphic Logo */}
        <div className="w-full max-w-4xl sm:max-w-5xl lg:max-w-7xl">
          <Image
            src={LogoImage}
            alt="AUROMATICS Logo"
            width={3000}
            height={3000}
            className="w-full h-auto object-contain block scale-110 sm:scale-120"
            priority
          />
        </div>

        {/* Company Name */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center -mt-12 sm:-mt-16 lg:-mt-20">
          Auramatics
        </h2>
      </div>
    </section>
  );
});

Hero_new.displayName = "Hero_new";

export default Hero_new;
