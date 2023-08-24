"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import { HoverAnimationI } from "./interface";

const HoverAnimation = (props: HoverAnimationI): JSX.Element => {
  const {
    children,
    whileHoverScaleAmount = 1.1,
    whileTabScaleAmount = 1,
    transitionAmount = 0.5,
  } = props;
  return (
    <motion.div
      whileHover={{ scale: whileHoverScaleAmount }}
      whileTap={{ scale: whileTabScaleAmount }}
      transition={{ easeInOut: transitionAmount }}
    >
      {children}
    </motion.div>
  );
};

export default HoverAnimation;
