"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/baselayout/navbar";
import Footer from "../components/baselayout/footer";
import { useRef } from "react";

// Team member data
// const teamMembers = [
//   {
//     name: "Alex Johnson",
//     role: "CEO & Founder",
//     description:
//       "Visionary leader with 15+ years in data engineering and AI solutions.",
//     image: "/images/team/ceo.jpg", // Placeholder - you can add actual images
//   },
//   {
//     name: "Sarah Chen",
//     role: "CTO",
//     description:
//       "Technical architect specializing in scalable data infrastructure and AI systems.",
//     image: "/images/team/cto.jpg",
//   },
//   {
//     name: "Michael Rodriguez",
//     role: "Lead Data Scientist",
//     description:
//       "Expert in machine learning and advanced analytics with a passion for innovation.",
//     image: "/images/team/data-scientist.jpg",
//   },
// ];

// Values data
const companyValues = [
  {
    title: "Innovation",
    description:
      "We constantly push the boundaries of what's possible with data and AI technology.",
    icon: "💡",
  },
  {
    title: "Excellence",
    description:
      "We deliver high-quality solutions that exceed expectations and drive real results.",
    icon: "⭐",
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our clients as partners, ensuring alignment with their goals.",
    icon: "🤝",
  },
  {
    title: "Transparency",
    description:
      "We maintain open communication and provide clear insights into our processes.",
    icon: "🔍",
  },
];

export default function AboutUs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-20 pb-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-br from-[#011632] via-[#0a1225] to-[#1a1a2e] overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AURAMATICS
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We don&apos;t just create technology, we create intelligent
              ecosystems that drive growth and transform businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Our Mission
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  To empower businesses with cutting-edge data engineering and
                  AI solutions that unlock their full potential. We believe in
                  the transformative power of intelligent technology to solve
                  complex challenges and create sustainable competitive
                  advantages.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our approach combines deep technical expertise with a deep
                  understanding of business needs, ensuring that every solution
                  we deliver drives measurable impact and long-term success.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/"
                  className="border-2 border-white/30 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 h-80 flex items-center justify-center border border-white/20">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-4xl text-white font-bold">A</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      AURAMATICS
                    </h3>
                    <p className="text-gray-300">Data & AI Solutions</p>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        ref={aboutRef}
        className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#011632]">
              Our Story
            </h2>
            <p className="text-lg text-[#3C4959] max-w-3xl mx-auto">
              Founded with a vision to bridge the gap between complex data
              challenges and business success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#011632]">
                  The Beginning
                </h3>
                <p className="text-[#3C4959] leading-relaxed">
                  AURAMATICS was born from a simple observation: businesses were
                  drowning in data but starving for insights. We saw the
                  potential to transform raw information into actionable
                  intelligence that drives real business value.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#011632]">
                  Our Growth
                </h3>
                <p className="text-[#3C4959] leading-relaxed">
                  Over the years, we&apos;ve evolved from a small team of
                  passionate engineers to a comprehensive data and AI solutions
                  provider. Our expertise spans across industries, helping
                  organizations of all sizes unlock their data&apos;s potential.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#011632]">
                  Today & Beyond
                </h3>
                <p className="text-[#3C4959] leading-relaxed">
                  We continue to push the boundaries of what&apos;s possible
                  with data and AI, staying at the forefront of technological
                  innovation while maintaining our commitment to delivering
                  practical, impactful solutions.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#EBF5FB] to-[#F3F9FC] rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-[#011632]">
                        2019
                      </div>
                      <div className="text-sm text-[#3C4959]">Founded</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-[#011632]">
                        2024
                      </div>
                      <div className="text-sm text-[#3C4959]">Today</div>
                    </div>
                  </div>
                  <div className="text-[#3C4959]">
                    <p className="font-medium">Journey of Innovation</p>
                    <p className="text-sm">
                      Transforming businesses through data & AI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#011632]">
              Our Values
            </h2>
            <p className="text-lg text-[#3C4959] max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach
              to solving complex challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-lg border border-[#D9D9D9] bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#011632]">
                  {value.title}
                </h3>
                <p className="text-[#3C4959] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#011632]">
              Meet Our Team
            </h2>
            <p className="text-lg text-[#3C4959] max-w-3xl mx-auto">
              The passionate experts behind AURAMATICS, dedicated to delivering
              exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-[#D9D9D9] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#011632]">
                      {member.name}
                    </h3>
                    <p className="text-[#5c5ccd] font-medium">{member.role}</p>
                  </div>
                  <p className="text-[#3C4959] text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-r from-[#011632] to-[#0a1225]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Let&apos;s discuss how our data and AI solutions can drive your
            success. Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Get in Touch
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#011632] transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
