"use client";

import { motion } from "framer-motion";

export default function FadeInSection({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}