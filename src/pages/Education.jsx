import React from 'react';

const Education = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-20 font-serif">
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold text-emerald-500 text-center mb-12">
        Education & Certifications
      </h1>

      {/* Grid: Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Education Column */}
        <div>
          <h2 className="text-2xl font-semibold text-emerald-500 text-center mb-6">
            Education
          </h2>
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="border border-emerald-500 rounded-2xl p-6 sm:p-8 text-center bg-stone-800 shadow-lg shadow-emerald-500 hover:scale-105 transition-transform duration-300">
              <h1 className="text-white text-lg sm:text-xl font-semibold">
                Bachelor of Technology in Electronics and Communications
              </h1>
              <p className="text-stone-400 mt-2">
                Teegala Krishna Reddy Engineering College, Hyderabad
              </p>
              <p className="text-emerald-500 mt-1">2017 - 2021</p>
            </div>

            {/* Card 2 */}
            <div className="border border-emerald-500 rounded-2xl p-6 sm:p-8 text-center bg-stone-800 shadow-lg shadow-emerald-500 hover:scale-105 transition-transform duration-300">
              <h1 className="text-white text-lg sm:text-xl font-semibold">
                Intermediate (12th Grade)
              </h1>
              <p className="text-stone-400 mt-2">
                Krishnaveni Junior College, Khammam
              </p>
              <p className="text-emerald-500 mt-1">2015 - 2017</p>
            </div>

            {/* Card 3 */}
            <div className="border border-emerald-500 rounded-2xl p-6 sm:p-8 text-center bg-stone-800 shadow-lg shadow-emerald-500 hover:scale-105 transition-transform duration-300">
              <h1 className="text-white text-lg sm:text-xl font-semibold">
                Secondary School (10th Grade)
              </h1>
              <p className="text-stone-400 mt-2">
                Sri Aravinda Vidyalayam, Nelakondapally
              </p>
              <p className="text-emerald-500 mt-1">2015</p>
            </div>
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h2 className="text-2xl font-semibold text-emerald-500 text-center mb-6">
            Certifications
          </h2>
          <div className="space-y-6">
            {/* Certification Card */}
            <div className="border border-emerald-500 rounded-2xl p-6 sm:p-8 text-center bg-stone-800 shadow-lg shadow-emerald-500 hover:scale-105 transition-transform duration-300">
              <h1 className="text-white text-lg sm:text-xl font-semibold">
                Full Stack Web Developer
              </h1>
              <p className="text-stone-400 mt-2">
                Entri Elevate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
