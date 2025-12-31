import React from "react";
import ProfilePic from "./Profilepic";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    // Adjust height to exclude navbar (assumed ~64px)
    <section className="min-h-[calc(100vh-64px)] bg-slate-800 flex items-center">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 pt-6 pb-12 text-white font-serif">
        
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

          {/* Text Content */}
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-base sm:text-lg text-blue-400 block mb-2">
              Hello, I am
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Vyshnavi
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-amber-100 leading-relaxed mb-6">
              Full-Stack MERN Developer creating interactive and efficient web applications.
              Building solutions that users love to experience.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <p className="flex justify-center lg:justify-start items-center gap-3 text-sm sm:text-base">
                <MdEmail size={20} className="text-blue-400" />
                <span className="break-all">vyshunaidu234@gmail.com</span>
              </p>

              <p className="flex justify-center lg:justify-start items-center gap-3 text-sm sm:text-base">
                <FaSquarePhone size={18} className="text-blue-400" />
                <span>8106425234</span>
              </p>
            </div>

            {/* Resume Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 
                bg-blue-600 hover:bg-blue-500 text-white 
                font-semibold rounded-xl shadow-md transition"
              >
                <FaDownload />
                View Resume
              </a>
            </div>
          </div>

          {/* Profile Image – Correct Mobile Size */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
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
