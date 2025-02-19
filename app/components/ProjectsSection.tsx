'use client';

import React from "react";
import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineArrowRight } from "react-icons/ai";
import { projects } from "../data/info";

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

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold gradient-text mb-8"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card group relative flex flex-col p-6"
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-100 group-hover:text-slate-500 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((stack, stackIndex) => (
                    <span
                      key={stackIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 rounded-full border border-blue-800/50"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-sm font-medium text-slate-400 hover:text-slate-500 group/link"
              >
                <AiOutlineGithub className="mr-2 h-5 w-5" />
                View on GitHub
                <AiOutlineArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 