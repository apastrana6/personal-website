import React from "react";
import Link from "next/link";

export default function ContactSection() {
  return (
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
  );
} 