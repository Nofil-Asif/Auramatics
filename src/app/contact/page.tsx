"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import Navbar from "../components/baselayout/navbar";
import ContactHero from "../components/heroSection/ContactHero";
import Footer from "../components/baselayout/footer";
// Contact form data type
interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  // Using FormSubmit service for sending emails; no local submit state needed

  // Create refs for navbar navigation
  const heroRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // No custom submit handler; the form posts directly to FormSubmit

  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />

      {/* Hero Section */}
      <ContactHero ref={heroRef} />

      {/* Contact Form and Information Section */}
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#011632] mb-8">
                  Let&apos;s Connect
                </h2>
                <p className="text-[#3C4959] text-lg mb-8">
                  We&apos;re here to help you navigate the world of AI and data.
                  Reach out to us and let&apos;s start a conversation about your
                  next project.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-[#011632] font-semibold text-lg">
                        Email Us
                      </h3>
                      <p className="text-[#3C4959]">info@auramatics.tech</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-[#011632] font-semibold text-lg">
                        Call Us
                      </h3>
                      <p className="text-[#3C4959]">+1 (587) 716-0961</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-[#011632] font-semibold text-lg">
                        Visit Us
                      </h3>
                      <p className="text-[#3C4959]">
                        349 Midgrove Link SouthWest
                        <br />
                        Airdrie, AB, Canada
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8"
              >
                <h3 className="text-[#011632] font-semibold text-lg mb-4">
                  Our Location
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                  <div
                    className="relative cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/place/349+Midgrove+Link+SouthWest,+Airdrie,+AB,+Canada",
                        "_blank"
                      )
                    }
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.123456789!2d-114.0123456789!3d51.2345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170123456789%3A0x123456789abcdef!2s349%20Midgrove%20Link%20SW%2C%20Airdrie%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sca!4v1704067200000!5m2!1sen!2sca"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-48"
                      title="AURAMATICS Location - 349 Midgrove Link SouthWest, Airdrie, AB, Canada"
                    ></iframe>
                    <div className="absolute inset-0 bg-transparent hover:bg-black/5 transition-colors duration-200 flex items-center justify-center">
                      <div className="bg-white/90 px-4 py-2 rounded-lg shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-200">
                        <span className="text-sm font-medium text-gray-800">
                          Click to open in Google Maps
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              id="contact-form"
              className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#011632] mb-6 sm:mb-8">
                Send us a Message
              </h2>

              <form
                action="https://formsubmit.co/info@auramatics.tech"
                method="POST"
                className="space-y-4 sm:space-y-6"
              >
                {/* FormSubmit configuration */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Submission - AURAMATICS"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_cc" value="" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for contacting AURAMATICS! We'll get back to you soon."
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://auramatics.tech/contact/"
                />
                {/* Honeypot field to reduce spam (bots will fill this) */}
                <input
                  type="text"
                  name="_honey"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[#011632] font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#011632] placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#011632] font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#011632] placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-[#011632] font-medium mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#011632] placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[#011632] font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#011632] placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#011632] font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#011632] placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:shadow-xl text-white"
                >
                  <FaPaperPlane className="text-lg" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
