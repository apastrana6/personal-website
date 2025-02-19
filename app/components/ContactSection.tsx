'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold gradient-text mb-8"
        >
          Contact
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex gap-8 items-center"
        >
          <motion.div variants={item}>
            <Link
              href="mailto:aepastrana6@gmail.com"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300"
            >
              <AiOutlineMail className="h-7 w-7" />
              <span className="sr-only">Send email</span>
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link
              href="https://github.com/apastrana6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300"
            >
              <AiOutlineGithub className="h-7 w-7" />
              <span className="sr-only">GitHub</span>
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link
              href="https://www.linkedin.com/in/anthony-pastrana/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300"
            >
              <AiFillLinkedin className="h-7 w-7" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 