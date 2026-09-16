import React, { forwardRef } from "react";
import ServiceFeatureCard from "../subComponents/serviceFeatureCard";
import { FaDatabase } from "react-icons/fa6";
import { TbBrandDatabricks } from "react-icons/tb";
import { RiAiGenerate2 } from "react-icons/ri";

const serviceFeatures = [
  {
    title: "Data Engineering",
    subtitle: "Build Reliable Data Foundations.",
    description:
      "We design and deploy modern data pipelines, warehouses, and cloud-native architectures that ensure scalability, security, and seamless integration for your business.",
    icon: <FaDatabase />,
    isHighlighted: true,
  },
  {
    title: "BI & Analytics",
    subtitle: "Turn raw data into actionable insights.",
    description:
      "Empower smarter decision-making with BI dashboards, custom reporting, and interactive visualizations tailored to your business goals.",
    icon: <TbBrandDatabricks />,
  },
  {
    title: "Data Science, AI & Automation",
    subtitle: "Build, automate, and scale with AI.",
    description:
      "From predictive analytics and AI models to intelligent agents and workflow automation, we help you unlock opportunities, reduce manual effort, and stay ahead of the competition.",
    icon: <RiAiGenerate2 />,
  },
];

const Services = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="our-services"
      className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-20 px-4 sm:px-6 md:px-10 space-y-6 sm:space-y-8 bg-white"
    >
      <div className="text-center space-y-4 sm:space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-[#011632] max-w-4xl mx-auto">
          We don&apos;t spread thin across ten services. We go deep in three.
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl leading-6 sm:leading-8 text-[#3C4959] max-w-3xl mx-auto px-4">
          Explore what we can do for you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ">
          {serviceFeatures.map((service, index) => (
            <ServiceFeatureCard
              key={index}
              index={index}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              icon={service.icon}
              isHighlighted={service.isHighlighted}
              badgeLabel="Core Service"
            />
          ))}
        </div>
      </div>

      {/* <div className="flex justify-center pt-4 sm:pt-6">
        <button className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold py-3 sm:py-2 px-6 sm:px-4 rounded-md shadow hover:from-blue-500 hover:to-purple-700 transition-all duration-300 text-center text-sm sm:text-base">
          See All Services
        </button>
      </div> */}
    </section>
  );
});

Services.displayName = "Services";

export default Services;
