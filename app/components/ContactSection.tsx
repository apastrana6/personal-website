import React from "react";
import Link from "next/link";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tsight text-gray-900 dark:text-white">Contact</h2>
        <div className="mt-6 flex gap-6 items-center">
          <Link
            href="mailto:aepastrana6@gmail.com"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <AiOutlineMail className="h-8 w-8 transition-transform hover:scale-110 active:scale-95" />
            <span className="sr-only">Send email</span>
          </Link>
          <Link
            href="https://github.com/apastrana6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <AiFillGithub className="h-8 w-8 transition-transform hover:scale-110 active:scale-95" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/anthony-pastrana/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <AiFillLinkedin className="h-8 w-8 transition-transform hover:scale-110 active:scale-95" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </section>
  );
} 