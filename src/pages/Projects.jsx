import React from "react";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";

const Projects = () => {
  return (
    <section className="min-h-screen bg-slate-800 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 py-12">
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Project Card */}
        <div className="bg-white rounded-2xl shadow-xl p-5 transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <img
            src={project1}
            alt="Portfolio Website"
            className="rounded-xl w-full h-52 sm:h-56 object-cover"
          />

          <h2 className="text-lg sm:text-xl font-semibold mt-4">
            Portfolio Website
          </h2>

          <ul className="list-disc ml-5 mt-3 text-sm sm:text-base text-gray-700 space-y-1">
            <li>Built using React and Tailwind CSS</li>
            <li>Fully responsive for all devices</li>
            <li>Includes About, Projects, and Contact sections</li>
            <li>Deployed on Netlify</li>
          </ul>

          <div className="flex gap-3 mt-4">
            <a
              href="https://github.com/vyshnavi-naidu/Vyshnavi_portfolio"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-900 transition"
            >
              GitHub
            </a>

            <a
              href="https://myportfolio-vyshnavi.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-500 transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-2xl shadow-xl p-5 transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <img
            src={project2}
            alt="Ecommerce Website"
            className="rounded-xl w-full h-52 sm:h-56 object-cover"
          />

          <h2 className="text-lg sm:text-xl font-semibold mt-4">
            Ecommerce Website
          </h2>

          <ul className="list-disc ml-5 mt-3 text-sm sm:text-base text-gray-700 space-y-1">
            <li>Responsive React-based E-commerce site</li>
            <li>Search, filter, and sorting features</li>
            <li>Add-to-cart with real-time UI updates</li>
            <li>Styled using Tailwind CSS</li>
            <li>Deployed on Netlify</li>
          </ul>

          <div className="flex gap-3 mt-4">
            <a
              href="https://github.com/vyshnavi-naidu/Ecommerce"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-900 transition"
            >
              GitHub
            </a>

            <a
              href="https://vyshnavi-ecommerce.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-500 transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white rounded-2xl shadow-xl p-5 transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <img
            src={project3}
            alt="Social Media App"
            className="rounded-xl w-full h-52 sm:h-56 object-cover"
          />

          <h2 className="text-lg sm:text-xl font-semibold mt-4">
            Social Media App
          </h2>

          <ul className="list-disc ml-5 mt-3 text-sm sm:text-base text-gray-700 space-y-1">
            <li>Full-stack MERN social media application</li>
            <li>JWT authentication & bcrypt security</li>
            <li>Create, like, comment, and upload posts</li>
            <li>User profile and post management</li>
            <li>MongoDB, Express & Node backend</li>
          </ul>

          <div className="flex gap-3 mt-4">
            <a
              href="https://github.com/vyshnavi-naidu/socialmediaMERN-project"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-900 transition"
            >
              GitHub
            </a>

            <a
              href="https://socialmediamern-project.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-500 transition"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
