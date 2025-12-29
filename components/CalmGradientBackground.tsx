"use client";
import { motion } from "framer-motion";

export default function CalmRadialGradientBackground() {
  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, #fce7f3, #fbcfee, #fde68a, #fcd5f4)
        `,
        backgroundSize: "200% 200%",
      }}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      }}
      transition={{
        duration: 30, // slow and calming
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
