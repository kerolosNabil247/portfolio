// components/Reveal.jsx (or .tsx)
"use client"; // This directive is important for client-side interactivity in Next.js App Router

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Animation = ({ children, delay = 0.25 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // `once: true` is key here!
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 }, // Initial state: hidden and slightly below
          visible: { opacity: 1, y: 0 },   // Final state: visible and at original position
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Animation;