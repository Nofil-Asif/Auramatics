"use client";
import React from "react";
import { motion } from "framer-motion";

interface ServiceFeatureCardProps {
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ReactNode;
  isHighlighted?: boolean;
  badgeLabel?: string;
  bg?: string;
  index?: number;
}

const ServiceFeatureCard = ({
  title,
  subtitle,
  description,
  icon,
  isHighlighted = false,
  badgeLabel,
  bg = "#FAFAFA",
  index = 0,
}: ServiceFeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`relative rounded-xl flex flex-col items-center justify-center gap-3 sm:gap-4 h-64 sm:h-72 py-4 sm:py-6 px-3 sm:px-4 text-center ${
        isHighlighted
          ? "border-[#2596be] border-2 bg-[#FFFDF5]"
          : "border-[#E7E7E7] border bg-white"
      } transition-shadow duration-300 hover:shadow-xl`}
      style={{ backgroundColor: `${bg}` }}
    >
      {isHighlighted && badgeLabel && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wide text-white bg-[#2596be] rounded-full px-3 py-1 shadow-sm">
          {badgeLabel}
        </span>
      )}

      <div className="h-8 w-8 sm:h-12 sm:w-12 text-3xl sm:text-5xl text-[#2596be]">
        {icon}
      </div>

      <div className="flex flex-col gap-1 sm:gap-2 items-center">
        <h4 className="font-bold text-lg sm:text-xl leading-[24px] sm:leading-[30px] text-[#011632]">
          {title}
        </h4>
        {subtitle && (
          <p className="text-xs sm:text-sm font-bold text-[#3C4959] leading-[18px] sm:leading-[22px]">
            {subtitle}
          </p>
        )}
        <p className="text-xs sm:text-sm text-[#3C4959] leading-[18px] sm:leading-[22px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceFeatureCard;
