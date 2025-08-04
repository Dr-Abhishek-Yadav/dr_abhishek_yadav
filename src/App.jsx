// src/App.jsx
import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function DoctorPortfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    try {
      const res = await fetch("https://formspree.io/f/xpwrepjz", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      const data = await res.json();

      if (data.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      {/* Navbar */}
      <header className="bg-blue-800 text-white px-6 py-4 shadow-md sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dr. Abhishek Yadav</h1>
          <ul className="flex space-x-6 text-md font-medium">
            <li><a href="#about" className="hover:text-blue-200">About</a></li>
            <li><a href="#services" className="hover:text-blue-200">Services</a></li>
            <li><a href="#experience" className="hover:text-blue-200">Experience</a></li>
            <li><a href="#education" className="hover:text-blue-200">Education</a></li>
            <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative text-white py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 320">
            <path fill="#ffffff33" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,170.7C672,160,768,128,864,128C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <img
            src={`${import.meta.env.BASE_URL}Abhishek.jpg`}
            alt="Doctor"
            className="w-36 h-36 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
          />
          <h2 className="text-4xl font-bold mb-2 text-white">Dr. Abhishek Yadav</h2>
          <p className="text-lg text-gray-200">MBBS, MD, DM – Gastroenterology</p>
          <p className="text-md text-gray-100 mt-2">Gastrointestinal and Liver Specialist</p>
          <p className="text-md text-gray-100">Diagnostic and therapeutic Endoscopist</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Dr. Abhishek Yadav is a specialist in Medical Gastroenterology, Diagnostic and Therapeutic Endoscopy. He completed MBBS and MD in Internal Medicine from SMS Medical College, Jaipur, Rajasthan, and pursued DM in Gastroenterology from PGIMER, Chandigarh.
          He is a member of the American Gastroenterological Association (AGA), and a life member of the Indian Society of Gastroenterology (ISG), Indian National Association for Study of Liver (INASL), and Society for Gastrointestinal Endoscopy in India (SGEI).
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-100 p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Services Offered</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Gastroenterology OPD</li>
          <li>IPD services</li>
          <li>Diagnostic and Therapeutic Endoscopy</li>
          <li>Upper gastrointestinal endoscopy</li>
          <li>Colonoscopy</li>
          <li>Sigmoidoscopy</li>
          <li>Enteroscopy</li>
          <li>ERCP (Endoscopic Retrograde Cholangio-Pancreatography)</li>
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Experience</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Senior Resident, Gastroenterology, PGIMER, Chandigarh</li>
          <li>Senior Resident, Internal Medicine, JLN Medical College, Ajmer, Rajasthan</li>
        </ul>
      </section>

      {/* Education */}
      <section id="education" className="bg-gray-100 p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Education & Achievements</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>DM Gastroenterology, PGIMER, Chandigarh</li>
          <li>MD Internal Medicine, SMS Medical College, Jaipur, Rajasthan</li>
          <li>MBBS, SMS Medical College, Jaipur, Rajasthan</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-6 mb-2">Awards</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Moti L. & Kamla Rustgi International Travel Award – DDW 2025 (AGA)</li>
          <li>First in Scientific Research – DDW 2025 (AAGIO)</li>
          <li>Finalist – National Torrent Gastroenterology Quiz 2024</li>
          <li>Finalist – PGI GI Emergency Quiz 2024</li>
          <li>Faculty presenter – GI Clinics, ISCGCON Bengaluru 2024</li>
          <li>Gold Medal – RAJAPICON Jaisalmer 2019 (API Rajasthan)</li>
          <li>Gold Medal – Physiology, MBBS</li>
          <li>Gold Medal – First MBBS</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>

        {submitted ? (
          <p className="text-green-600 font-medium text-lg">✅ Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
              className="w-full border p-2 rounded"
              pattern="[0-9]{10}"
              maxLength="10"
              title="Please enter a 10-digit phone number"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full border p-2 rounded"
            />
            <input type="hidden" name="_subject" value="New Inquiry from My Doctor Website" />
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition">
              Send Message
            </button>
          </form>
        )}

        {error && (
          <p className="text-red-600 mt-4">❌ Something went wrong. Please try again later.</p>
        )}

        <div className="mt-6 space-y-2 text-gray-800">
          <p className="flex items-center"><Mail className="w-5 h-5 mr-2" /> drabhishekyadavgastro@gmail.com</p>
          <p className="flex items-center"><Phone className="w-5 h-5 mr-2" /> +91-7014730846</p>
          <p className="flex items-center"><Linkedin className="w-5 h-5 mr-2" /> <a href="https://www.linkedin.com/in/abhishek-yadav-9a6a1273/" target="_blank" className="text-blue-700 underline">LinkedIn</a></p>
          <p className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> KSHETRAPAL HOSPITAL MULTISPECIALITY & RESEARCH CENTRE</p>
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1847581309266!2d74.63233171452208!3d26.504432083305273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7cc30274d49%3A0x9d73720eeddb71b0!2sKSHETRAPAL%20HOSPITAL%20MULTISPECIALITY%20%26%20RESEARCH%20CENTRE!5e0!3m2!1sen!2sin!4v1689864807087!5m2!1sen!2sin"
            width="100%"
            height="300"
            className="border rounded shadow-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <footer className="bg-blue-800 text-white text-center p-4 mt-6">
        <p>© 2025 Dr. Abhishek Yadav. All rights reserved.</p>
      </footer>
    </div>
  );
}
