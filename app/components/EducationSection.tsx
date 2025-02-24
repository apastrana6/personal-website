'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineEnvironment, AiOutlineCalendar } from "react-icons/ai";
import { education } from "../data/info";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function EducationSection() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold gradient-text mb-8"
        >
          Education
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card group p-6 flex gap-6 card-hover"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-slate-700/50 overflow-hidden flex items-center justify-center p-2">
                <Image
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full rounded-lg"
                  priority={index === 0}
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-100">
                  {edu.school}
                </h3>
                <p className="text-lg font-medium text-slate-400/90">
                  {edu.degree}
                  {edu.minor && (
                    <span className="text-slate-400/70"> • Minor in {edu.minor}</span>
                  )}
                </p>
                <div className="flex items-center gap-4 mt-1 text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <AiOutlineEnvironment className="w-4 h-4" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <AiOutlineCalendar className="w-4 h-4" />
                    {edu.period}
                  </span>
                </div>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 