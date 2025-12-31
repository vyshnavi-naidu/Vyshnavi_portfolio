import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-slate-800 text-white flex items-center px-4 sm:px-8 py-12 font-serif">
      <div className="max-w-5xl mx-auto w-full">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left">
          About Me
        </h1>

        {/* Content */}
        <div className="space-y-5 text-base sm:text-lg leading-relaxed text-slate-200">
          <p>
            Hello! I'm <span className="text-blue-400 font-semibold">Vyshnavi</span>.
          </p>

          <p>
            I’m a <span className="text-blue-400">MERN Stack Developer</span> with a strong
            focus on building scalable, user-friendly web applications. I specialize in{" "}
            <span className="text-blue-400">
              MongoDB, Express.js, React, and Node.js
            </span>
            .
          </p>

          <p>
            From responsive front-end interfaces to robust back-end APIs, I strive
            to create applications that are both functional and visually appealing.
            I’m always eager to learn new technologies and improve my craft.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Express.js",
              "MongoDB",
              "Node.js",
              "Bootstrap",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white text-black rounded-lg text-sm sm:text-base 
                hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
