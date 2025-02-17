import React from "react";
import Image from "next/image";
import { experiences } from "../app/data/info";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Experience</h2>
        <div className="mt-10 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.company}</h3>
                <p className="text-base font-medium text-gray-600 dark:text-gray-300">{exp.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location} • {exp.period}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 