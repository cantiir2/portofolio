"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function IsometricIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {/* Isometric Desk Scene */}
        <div className="relative" style={{ transform: "rotateX(60deg) rotateZ(-45deg) scale(0.8)" }}>
          {/* Desk */}
          <div
            className="absolute bg-gray-700"
            style={{
              width: "300px",
              height: "200px",
              transform: "translate(-150px, -100px)",
              borderRadius: "8px",
            }}
          >
            {/* Monitor Left */}
            <div
              className="absolute bg-gray-800 border-2 border-gray-600"
              style={{
                width: "80px",
                height: "60px",
                left: "30px",
                top: "-50px",
                borderRadius: "4px",
              }}
            >
              <div
                className="absolute bg-gray-900"
                style={{
                  width: "70px",
                  height: "50px",
                  left: "5px",
                  top: "5px",
                  borderRadius: "2px",
                }}
              >
                {/* Code lines */}
                <div className="absolute" style={{ left: "5px", top: "10px", width: "40px", height: "2px", background: "#3b82f6" }} />
                <div className="absolute" style={{ left: "5px", top: "16px", width: "30px", height: "2px", background: "#10b981" }} />
                <div className="absolute" style={{ left: "5px", top: "22px", width: "50px", height: "2px", background: "#f59e0b" }} />
              </div>
            </div>

            {/* Monitor Right */}
            <div
              className="absolute bg-gray-800 border-2 border-gray-600"
              style={{
                width: "80px",
                height: "60px",
                right: "30px",
                top: "-50px",
                borderRadius: "4px",
              }}
            >
              <div
                className="absolute bg-gray-900"
                style={{
                  width: "70px",
                  height: "50px",
                  left: "5px",
                  top: "5px",
                  borderRadius: "2px",
                }}
              >
                {/* Code lines */}
                <div className="absolute" style={{ left: "5px", top: "10px", width: "45px", height: "2px", background: "#8b5cf6" }} />
                <div className="absolute" style={{ left: "5px", top: "16px", width: "35px", height: "2px", background: "#ec4899" }} />
                <div className="absolute" style={{ left: "5px", top: "22px", width: "55px", height: "2px", background: "#06b6d4" }} />
              </div>
            </div>

            {/* Keyboard */}
            <div
              className="absolute bg-gray-600"
              style={{
                width: "120px",
                height: "30px",
                left: "90px",
                top: "10px",
                borderRadius: "4px",
              }}
            />

            {/* Coffee Cup */}
            <div
              className="absolute bg-orange-500"
              style={{
                width: "20px",
                height: "25px",
                left: "220px",
                top: "20px",
                borderRadius: "2px",
              }}
            />

            {/* Plant */}
            <div
              className="absolute bg-green-500"
              style={{
                width: "15px",
                height: "20px",
                right: "20px",
                top: "10px",
                borderRadius: "2px",
              }}
            />
          </div>

          {/* Chair (simplified) */}
          <div
            className="absolute bg-gray-600"
            style={{
              width: "60px",
              height: "80px",
              left: "-30px",
              top: "120px",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            right: "-50px",
            top: "50px",
            width: "30px",
            height: "30px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "50%",
            opacity: 0.7,
          }}
        />

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute"
          style={{
            left: "-40px",
            top: "100px",
            width: "25px",
            height: "25px",
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            borderRadius: "50%",
            opacity: 0.7,
          }}
        />
      </motion.div>
    </div>
  );
}

