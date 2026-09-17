"use client";
import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import HeroBg from "@/assets/Homepage/background.png";
import LogoImage from "@/assets/Homepage/logo_new.png";

// Types for better type safety and debugging
interface ContactMethod {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  description: string;
  color: string;
}

interface ContactHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

// Constants for better maintainability
const DEFAULT_PROPS = {
  title: "Get in Touch",
  subtitle: "Let's Start a Conversation",
  description:
    "Ready to transform your business with AI and data solutions? We're here to help you achieve your goals.",
} as const;

const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: FaEnvelope,
    title: "Email Us",
    value: "info@auramatics.tech",
    description: "Send us a message anytime",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaPhone,
    title: "Call Us",
    value: "+1 (587) 716-0961",
    description: "Mon-Fri 9AM-6PM EST",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    value: "349 Midgrove Link SouthWest",
    description: "Airdrie, AB, Canada",
    color: "from-pink-500 to-blue-500",
  },
  {
    icon: FaClock,
    title: "Response Time",
    value: "< 24 Hours",
    description: "We'll get back to you quickly",
    color: "from-cyan-500 to-purple-500",
  },
];

// Animation configurations for better debugging
const ANIMATION_CONFIG = {
  card: {
    y: [0, -20, 0, -20, 0] as number[],
    scale: [1, 1.05, 1, 1.05, 1] as number[],
  },
  transition: {
    repeat: Infinity,
    duration: 4,
    ease: "easeInOut" as const,
  },
};

// Utility functions for better debugging
const scrollToContactForm = (): void => {
  const formSection = document.getElementById("contact-form");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn("Contact form section not found with id 'contact-form'");
  }
};

const ContactHero = forwardRef<HTMLDivElement, ContactHeroProps>(
  (props, ref) => {
    // Use default props with proper destructuring
    const { title, subtitle, description } = { ...DEFAULT_PROPS, ...props };

    return (
      <section
        ref={ref}
        className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-12 px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24"
        style={{
          backgroundImage: `url(${HeroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content Container */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center space-y-6 sm:space-y-8 lg:pl-16">
          {/* Main Content */}
          <div className="text-white space-y-4 sm:space-y-6">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {subtitle}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
              {description}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContactForm}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-blue-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                aria-label="Scroll to contact form"
              >
                Send Us a Message
              </motion.button>

              <Link href="/" passHref>
                <button
                  className="w-full sm:w-auto border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm sm:text-base"
                  aria-label="Navigate back to home page"
                >
                  Back to Home
                </button>
              </Link>
            </div>
          </div>

          {/* Contact Methods Section */}
          <ContactMethodsSection contactMethods={CONTACT_METHODS} />
        </div>

        {/* Logo and Branding Section */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center justify-center -mt-8 sm:-mt-12 lg:-mt-16 -ml-8 sm:-ml-16 lg:-ml-24">
          {/* Large Graphic Logo */}
          <div className="w-full max-w-4xl sm:max-w-5xl lg:max-w-7xl">
            <Image
              src={LogoImage}
              alt="AURAMATICS Logo"
              width={3000}
              height={3000}
              className="w-full h-auto object-contain block scale-110 sm:scale-120"
              priority
            />
          </div>

          {/* Company Name */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center -mt-12 sm:-mt-16 lg:-mt-20">
            AURAMATICS
          </h2>
        </div>
      </section>
    );
  }
);

// Contact Methods Section Component
interface ContactMethodsSectionProps {
  contactMethods: ContactMethod[];
}

const ContactMethodsSection: React.FC<ContactMethodsSectionProps> = ({
  contactMethods,
}) => {
  // Display only first 3 methods for hero section
  const displayMethods = contactMethods.slice(0, 3);

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 max-w-2xl">
      {displayMethods.map((method, index) => {
        const IconComponent = method.icon;
        const delay = index * 0.3; // Creates wave effect with 0.3s delay between each card

        return (
          <motion.div
            key={`${method.title}-${index}`} // Better key for debugging
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4 w-full sm:w-44 text-center hover:bg-white/20 transition-all duration-200 hover:scale-105"
            animate={ANIMATION_CONFIG.card}
            transition={{
              ...ANIMATION_CONFIG.transition,
              delay,
            }}
            data-testid={`contact-method-${method.title
              .toLowerCase()
              .replace(/\s+/g, "-")}`} // For testing
          >
            {/* Icon Container */}
            <div className="flex items-center justify-center mb-2">
              <div
                className={`w-8 h-8 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center`}
                aria-hidden="true"
              >
                <IconComponent className="text-white text-sm" />
              </div>
            </div>

            {/* Title */}
            <div className="text-xs sm:text-sm font-bold text-white mb-1">
              {method.title}
            </div>

            {/* Value */}
            <div className="text-xs text-gray-200 break-words leading-tight">
              {method.value}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Add display names for better debugging in React DevTools
ContactHero.displayName = "ContactHero";
ContactMethodsSection.displayName = "ContactMethodsSection";

// Export types for better development experience
export type { ContactHeroProps, ContactMethod };

export default ContactHero;
