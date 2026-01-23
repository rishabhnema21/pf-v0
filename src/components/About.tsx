"use client";

import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaFileDownload } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import SpotifyPlay from "./SpotifyPlay";
import { ReactNode } from "react";

type SocialLink = {
  name: string;
  link: string;
  icon: ReactNode;
}

const About = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "Github",
      link: "https://github.com/rishabhnema21",
      icon: <FaGithub />,
    },
    {
      name: "Linkedin",
      link: "https://linkedin.com/in/rishabhnema21",
      icon: <FaLinkedin />,
    },
    {
      name: "X (Twitter)",
      link: "https://x.com/itzrishxbh",
      icon: <FaXTwitter />,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/rishabhnema05",
      icon: <CiInstagram />,
    },
    {
      name: "Telegram",
      link: "https://t.me/rishabhnema21",
      icon: <FaTelegram />,
    },
  ];

  const [resume, setResume] = useState<boolean>(false);

  return (
    <section className="w-full flex justify-between items-center">
      <div className="flex flex-col tracking-wider">
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          I’m a{" "}
          <span className="text-zinc-800 dark:text-zinc-100 font-ubuntu">
            full-stack developer
          </span>{" "}
          who builds reliable web applications end-to-end — from concept to
          production. Passionate about creating innovative web solutions that
          truly matter and enhancing user experiences across the stack.
        </p>

        <div className="mt-4">
          <button
            onClick={() => setResume(true)}
            className="bg-zinc-700 dark:bg-zinc-300 font-semibold text-sm cursor-pointer text-zinc-300 hover:bg-zinc-800 dark:hover:bg-zinc-400 transition-all duration-150 ease-in dark:text-zinc-800 px-3 py-1 rounded inline-flex items-center gap-2"
          >
            Resume
            <FaFileDownload className="text-sm" />
          </button>

          {resume && (
            <div className="fixed inset-0 z-50 bg-[#F8F8F8] dark:bg-[#181818] flex items-center justify-center">
              <div className="h-[90%] w-[95%] max-w-3xl bg-zinc-300 dark:bg-zinc-200 rounded-xl overflow-hidden relative shadow-lg">
                <button
                  className="absolute top-4 bg-zinc-300 h-8 w-8 flex justify-center items-center rounded-full text-zinc-800 right-4 hover:bg-zinc-400 transition-all duration-200 ease-in cursor-pointer"
                  onClick={() => setResume(false)}
                >
                  <IoMdClose />
                </button>

                <iframe
                  src="/rishabhnema_resume.pdf"
                  title="Rishabh Nema Resume"
                  className="w-full h-full"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-4">
          <ul className="flex gap-2 flex-wrap">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="border inline-flex border-dashed border-zinc-700 dark:border-zinc-500 text-zinc-700 dark:text-zinc-300 rounded py-1 px-3 text-sm gap-2 items-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-150 ease-in"
                  href={link.link}
                >
                  {" "}
                  {link.icon} {link.name}{" "}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <SpotifyPlay />
      </div>
    </section>
  );
};

export default About;
