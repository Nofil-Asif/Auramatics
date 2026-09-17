"use client";

import { useRef } from "react";
import Navbar from "./components/baselayout/navbar";
import Hero_new from "./components/heroSection/Hero_new";
import AboutUS from "./components/heroSection/AboutUs";
import Services from "./components/heroSection/Services";
import Floating3DObject from "./components/subComponents/Floating3DObject";
import IndustrySection from "./components/heroSection/ServedIndustries";
import WhyChoseUs from "./components/heroSection/WhyChoseUs";
import WorkingStack from "./components/heroSection/WorkingStack";
import CaseStudies from "./components/heroSection/CaseStudies";
import DataBiAudit from "./components/heroSection/DataBiAudit";
import Footer from "./components/baselayout/footer";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <Hero_new ref={heroRef} />
      <AboutUS
        ref={aboutRef}
        title="Most teams don't need another dashboard. They need a system they can still run in a year."
        description="We build data and AI systems designed to be owned and operated by your team long after we hand them over."
      />

      <Floating3DObject />

      <Services ref={servicesRef} />

      <IndustrySection />
      <CaseStudies />
      <DataBiAudit />
      <WhyChoseUs />
      <WorkingStack />
      <Footer />
    </div>
  );
}
