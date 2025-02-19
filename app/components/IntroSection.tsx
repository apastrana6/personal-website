'use client';

import React from "react";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section id="about" className="min-h-[40vh] flex items-center py-8">
      <div className="container-custom">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <motion.h1 
              className="intro-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Anthony Pastrana</span>
            </motion.h1>
          
            <motion.p 
              className="intro-description mt-6 max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Software developer focused on ai/ml, infrastructure, and backend with experience building systems at scale. Currently based in Miami, FL.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 