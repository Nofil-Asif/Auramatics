"use client";
import React from "react";
import { motion } from "framer-motion";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isHighlighted?: boolean;
  badgeLabel?: string;
  index?: number;
}

const IndustryCard = ({
  title,
  description,
  icon,
  isHighlighted = false,
  badgeLabel,
  index = 0,
}: IndustryCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    whileHover={{ y: -6 }}
    className={`relative rounded-xl p-[2px] ${
      isHighlighted
        ? "bg-gradient-to-r from-blue-700 to-purple-900"
        : "bg-gray-200"
    } transition-shadow min-h-[144px] hover:shadow-lg`}
  >
    {isHighlighted && badgeLabel && (
      <span className="absolute -top-3 left-5 text-[10px] font-bold uppercase tracking-wide text-white bg-gradient-to-r from-blue-700 to-purple-900 rounded-full px-3 py-1 shadow-sm z-10">
        {badgeLabel}
      </span>
    )}
    <div
      className={`rounded-xl flex gap-3 p-5 ${
        isHighlighted ? "bg-[#F3F9FC]" : "bg-white"
      } h-full`}
    >
      <div className="text-4xl text-black flex-shrink-0">{icon}</div>
      <div className="flex flex-col gap-2 flex-1">
        <h4 className="font-bold text-xl leading-[30px] text-[#011632]">
          {title}
        </h4>
        <p className="text-base text-[#3C4959] leading-[22px]">{description}</p>
      </div>
    </div>
  </motion.div>
);

export default IndustryCard;
