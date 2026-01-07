import React from "react";
import project1 from "../assets/project1 (2).jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      image: project1,
      description: [
        "Built using React and Tailwind CSS",
        "Fully responsive for all devices",
        "Includes About, Projects, and Contact sections",
        "Deployed on Netlify",
      ],
      link: "https://myportfolio-vyshnavi.netlify.app/",
    },
    {
      title: "Ecommerce Website",
      image: project2,
      description: [
        "Responsive React-based E-commerce site",
        "Search, filter, and sorting features",
        "Add-to-cart with real-time UI updates",
        "Styled using Tailwind CSS",
        "Deployed on Netlify",
      ],
      link: "https://vyshnavi-ecommerce.netlify.app/",
    },
    {
      title: "Social Media App",
      image: project3,
      description: [
        "Full-stack MERN social media application",
        "JWT authentication & bcrypt security",
        "Create, like, comment, and upload posts",
        "User profile and post management",
        "MongoDB, Express & Node backend",
      ],
      link: "https://socialmediamern-project.onrender.com/",
    },
  ];

  return (
    <section className="min-h-screen bg-stone-800 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 py-12">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-emerald-500 text-center mb-12">
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-stone-800 border-emerald-500 border rounded-2xl p-5 shadow-lg shadow-emerald-500 transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-52 sm:h-56 object-cover"
            />

            <h2 className="text-white text-lg sm:text-xl font-semibold mt-4">
              {project.title}
            </h2>

            <ul className="list-disc ml-5 mt-3 text-sm sm:text-base text-white space-y-1">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>

            <div className="mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm hover:bg-emerald-300 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
