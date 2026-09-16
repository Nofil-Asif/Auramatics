"use client";
import React from "react";
import { motion } from "framer-motion";

const Floating3DObject = () => {
  return (
    <div
      aria-hidden="true"
      className="relative w-full h-0 flex justify-end items-center pr-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          scale: { duration: 0.8, ease: "easeOut" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-10"
        style={{ marginTop: "20px" }}
      >
        {/* Simple Elegant Object */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-20 h-20 rounded-full"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
            }}
          >
            {/* Inner circle */}
            <div className="absolute inset-4 rounded-full bg-white/20"></div>

            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
          </motion.div>

          {/* Orbiting dots */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <div
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) translateY(-${
                    30 + i * 8
                  }px)`,
                  boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                }}
              ></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Floating3DObject;
