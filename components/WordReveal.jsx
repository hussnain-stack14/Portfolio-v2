"use client";

import { motion } from "framer-motion";

export default function WordReveal({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.04,
}) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariant} className="inline-block mr-[0.3em]">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}