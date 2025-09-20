import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nkmvq3s",     // ✅ Your Service ID
        "template_8cr7o0n",    // ✅ Your Template ID
        form.current,
        "your_public_key"      // ✅ Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("❌ Something went wrong, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4 text-blue-400"
        >
          Let’s Connect
        </motion.h2>
        <p className="text-gray-300 mb-12">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        {/* Social Media / Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Gmail */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition"
          >
            <FaEnvelope className="text-blue-400 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a
              href="mailto:syedaanum.qa@gmail.com"
              className="text-gray-300 hover:underline"
            >
              syedaanum.qa@gmail.com
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition"
          >
            <FaLinkedin className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/syeda-anum-abbas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Profile
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 p-8 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition"
          >
            <FaMapMarkerAlt className="text-purple-400 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-300">Lahore, Pakistan</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto bg-black/40 p-8 rounded-2xl shadow-lg backdrop-blur-md"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 mt-6 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-3 w-full rounded-lg shadow-lg font-semibold transition bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 hover:opacity-90"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
