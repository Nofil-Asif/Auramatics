import { CiBadgeDollar } from "react-icons/ci";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { CiShoppingTag } from "react-icons/ci";
import { IoPower } from "react-icons/io5";
import { CiAirportSign1 } from "react-icons/ci";
import { MdPrecisionManufacturing } from "react-icons/md";

import IndustryCard from "../subComponents/IndustryCard";

const industries = [
  {
    title: "Finance & Banking ",
    description:
      "Empowering financial institutions with secure, data-driven insights and AI-powered automation for smarter decision-making.",
    icon: <CiBadgeDollar />,
    isHighlighted: true,
  },
  {
    title: "Healthcare & Pharma ",
    description:
      "Enabling better patient outcomes and operational efficiency with advanced analytics, AI, and digital health platforms.",
    icon: <MdOutlineHealthAndSafety />,
  },
  {
    title: "Retail & eCommerce ",
    description:
      "Boosting customer engagement and sales with AI-driven personalization, predictive analytics, and scalable digital storefronts.",
    icon: <CiShoppingTag />,
  },
  {
    title: "Power and Telecom",
    description:
      "Optimizing networks and operations with automation, predictive maintenance, and intelligent data solutions.",
    icon: <IoPower />,
  },
  {
    title: "Aviation",
    description:
      "Transforming aviation with AI, real-time data insights, and automation for safer, more efficient operations.",
    icon: <CiAirportSign1 />,
  },
  {
    title: "Manufacturing & Logistics ",
    description:
      "Driving efficiency with IoT, data pipelines, and AI to streamline supply chains and smart manufacturing processes.",
    icon: <MdPrecisionManufacturing />,
  },
];

export default function IndustrySection() {
  return (
    <section className="py-10 px-6 md:px-10 lg:p-20 space-y-6 bg-gray-50">
      <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-[#011632] font-bold text-center max-w-4xl mx-auto">
        From airport operations to retail floors, the same rigor, wherever
        the data lives.
      </h2>
      <p className="text-center text-2xl leading-8 font-bold text-[#3C4959]">
        Our services are tailored to meet the unique needs of various industries
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {industries.map((industry, idx) => (
          <IndustryCard
            key={idx}
            {...industry}
            index={idx}
            badgeLabel="Primary Focus"
          />
        ))}
      </div>
    </section>
  );
}
