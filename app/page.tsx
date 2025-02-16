import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const experiences = [
    {
      company: "Palantir Technologies",
      title: "Incoming Software Engineer",
      location: "Denver, Colorado, United States",
      period: "December 2024 - Present",
      description: "Starting December 2024 working on Foundry.",
      logo: "/palantir.jpeg"
    },
    {
      company: "Amazon",
      title: "Software Development Engineer Intern",
      location: "Sunnyvale, California, United States",
      period: "May 2024 - August 2024",
      description: "Intern for Summer 2024 working on the Items and Offers Platform.",
      logo: "/amazon.jpeg"
    },
    {
      company: "Georgia Tech",
      title: "Undergraduate Teaching Assistant",
      location: "Atlanta, Georgia, United States",
      period: "January 2023 - May 2024",
      description: "Assisted professors in CS 1331: Introduction to Object-Oriented Programming.",
      logo: "/gt_coc.jpeg"
    },
  ];

  const projects = [
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with Next.js, React, TypeScript, and TailwindCSS. Features dark mode support and smooth scrolling.",
      tech: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      github: "https://github.com/apastrana/personal-website"
    },
    {
      title: "Computer Vision Project",
      description: "Implemented advanced computer vision algorithms for real-time object detection and tracking using OpenCV and Python.",
      tech: ["Python", "OpenCV", "TensorFlow", "NumPy"],
      github: "https://github.com/apastrana/cv-project"
    },
    {
      title: "Cloud Infrastructure Tool",
      description: "Developed a CLI tool for automating AWS infrastructure deployment using TypeScript and AWS SDK.",
      tech: ["TypeScript", "AWS SDK", "Node.js", "Infrastructure as Code"],
      github: "https://github.com/apastrana/cloud-tool"
    }
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section id="about" className="pt-16 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Hi, I&apos;m Anthony Pastrana
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            I&apos;m a software engineer with experience in TypeScript, AWS, and computer vision. Currently based in Miami, Florida.
          </p>
        </div>
      </section>

      {/* Experience Section */}
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

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Projects</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 flex-grow">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                      {tech}
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

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Contact</h2>
          <div className="mt-6 flex gap-6">
            <Link
              href="https://www.linkedin.com/in/anthony-pastrana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/apastrana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
