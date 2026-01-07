import React, { useEffect, useState } from "react";
import ProfilePic from "./ProfilePic";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  // 🔹 Roles for typing effect
  const roles = ["Full Stack Developer", "MERN Stack Developer"];
  const typingSpeed = 90;
  const deletingSpeed = 60;
  const delay = 1500;

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (charIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="min-h-[calc(100vh-64px)] bg-stone-800 flex items-center">
      <div className="w-full mt-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 pt-6 pb-12 text-white font-serif">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

          {/* Text Content */}
          <div className="max-w-xl text-center lg:text-left">
            <span className="block mb-2 sm:text-lg lg:text-xl">
              Hello, Myself
            </span>

            <h1 className="mb-4 text-emerald-500 sm:text-4xl md:text-5xl lg:text-5xl font-semibold">
              Vyshnavi
            </h1>

            {/* Typing Roles */}
            <p className="mb-4 sm:text-2xl md:text-3xl lg:text-3xl">
              And I'm a{" "}
              <span className="inline-flex items-center ml-3 sm:text-3xl md:text-4xl lg:text-4xl text-emerald-500 font-semibold">
                {displayedText}
                <span className="ml-1 w-[2px] h-6 sm:h-7 md:h-8 bg-emerald-500 animate-pulse" />
              </span>
            </p>

            <p className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
              Passionate Full stack developer skilled in building dynamic, scalable web
              applications using modern front-end and back-end technologies.
            </p>

            {/* Contact Info */}
            <div className="mb-6 space-y-3">
              <p className="flex items-center justify-center gap-3 text-sm sm:text-base lg:justify-start">
                <MdEmail size={20} className="text-emerald-500 hover:text-emerald-300" />
                <span className="break-all">vyshunaidu234@gmail.com</span>
              </p>

              <p className="flex items-center justify-center gap-3 text-sm sm:text-base lg:justify-start">
                <FaSquarePhone size={18} className="text-emerald-500 hover:text-emerald-300" />
                <span>8106425234</span>
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mt-4 lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/vasamsetti-vyshnavi"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 transition-transform duration-300 rounded-full hover:scale-110"
                >
                  <CiLinkedin className="text-emerald-500 hover:text-emerald-300 sm:size-[36px] lg:size-[40px]" />
                </a>

                <a
                  href="https://github.com/vyshnavi-naidu/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 transition-transform duration-300 rounded-full hover:scale-110"
                >
                  <FaGithub className="text-emerald-500 hover:text-emerald-300 sm:size-[36px] lg:size-[40px]" />
                </a>
              </div>
            </div>

            {/* Resume Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-white transition bg-emerald-500 rounded-xl shadow-lg hover:bg-emerald-300"
              >
                <FaDownload />
                View Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center w-full lg:justify-end lg:w-auto">
            <div className="w-36 sm:w-44 md:w-56 lg:w-72">
              <ProfilePic />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
