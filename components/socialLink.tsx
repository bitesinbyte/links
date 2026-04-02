"use client";

import { motion } from "framer-motion";
import { getSocialIcon } from "@/components/icons";

type SocialLinkProps = {
  href: string;
  brand: string;
};

export const SocialLink = ({ href, brand }: SocialLinkProps) => {
  const Icon = getSocialIcon(brand);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer me"
      whileHover={{ scale: 1.12, y: -3 }}
      whileTap={{ scale: 0.92 }}
      className="social-btn"
      aria-label={brand}
    >
      <Icon size={18} />
    </motion.a>
  );
};