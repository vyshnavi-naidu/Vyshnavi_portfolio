import React, { useState } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section className="min-h-screen bg-slate-800 flex items-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl mx-auto p-6 sm:p-10">

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-slate-800">
          Contact Me
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Name */}
          <div>
            <label className="flex items-center gap-2 font-semibold text-slate-700">
              <FaUser /> Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  setFormData({ ...formData, name: value });
                }
              }}
              className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 font-semibold text-slate-700">
              <FaEnvelope /> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="font-semibold text-slate-700">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder="Type your message..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-slate-700 hover:bg-slate-900 text-white py-3 rounded-xl font-semibold transition"
          >
            Send Message
          </button>
        </form>

        {/* Email */}
        <p className="text-center text-slate-700 mt-6 break-all">
          <FaEnvelope className="inline mr-2" />
          <b>vyshunaidu234@gmail.com</b>
        </p>

      </div>
    </section>
  );
};

export default Contact;
