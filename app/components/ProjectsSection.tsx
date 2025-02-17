import React from "react";
import { projects } from "../data/info";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Projects</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 flex-grow">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((stack, stackIndex) => (
                  <span key={stackIndex} className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                    {stack}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 