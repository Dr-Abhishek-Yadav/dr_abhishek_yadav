// src/App.jsx
import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DoctorPortfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // inside DoctorPortfolio component
const handleNavClick = (e, targetId) => {
  e.preventDefault();
  const section = document.querySelector(targetId);
  const header = document.querySelector("header"); // your sticky header
  if (section) {
    const yOffset = -(header?.offsetHeight || 80); // dynamically get height
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  setTimeout(() => setMenuOpen(false), 300);
};

  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      {/* Navbar */}
      <header className="bg-blue-800/95 backdrop-blur-md text-white px-6 py-4 shadow-md sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold">Dr. Abhishek Yadav</h1>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex space-x-4 sm:space-x-6 text-sm sm:text-md font-medium">
            <li>
              <button onClick={(e) => handleNavClick(e, "#about")} className="hover:text-blue-200">
                About
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick(e, "#services")} className="hover:text-blue-200">
                Services
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick(e, "#experience")} className="hover:text-blue-200">
                Experience
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick(e, "#education")} className="hover:text-blue-200">
                Education
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick(e, "#opd")} className="hover:text-blue-200">
                OPD
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-blue-200">
                Contact
              </button>
            </li>
          </ul>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden focus:outline-none p-2 rounded-md"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden flex flex-col space-y-4 mt-4 bg-blue-800 rounded-lg p-4 text-center text-md font-medium shadow-md"
          >
            <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-blue-200">About</a></li>
            <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-blue-200">Services</a></li>
            <li><a href="#experience" onClick={(e) => handleNavClick(e, "#experience")} className="hover:text-blue-200">Experience</a></li>
            <li><a href="#education" onClick={(e) => handleNavClick(e, "#education")} className="hover:text-blue-200">Education</a></li>
            <li><a href="#opd" onClick={(e) => handleNavClick(e, "#opd")} className="hover:text-blue-200">OPD</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-blue-200">Contact</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
      </header>

      {/* Hero */}
      <section
        className="relative text-white py-16 sm:py-24 px-4 overflow-hidden"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}gastro-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <img
            src={`${import.meta.env.BASE_URL}dr-abhishek-yadav-gastroenterologist-ajmer.jpg`}
            alt="Dr. Abhishek Yadav"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-lg mb-4"
          />
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Dr. Abhishek Yadav</h2>
          <p className="text-sm sm:text-lg text-gray-200 mt-1">MBBS, MD, DM – Gastroenterology</p>
          <p className="text-sm sm:text-base text-gray-100 mt-1">Gastrointestinal and Liver Specialist</p>
          <p className="text-sm sm:text-base text-gray-100">Diagnostic and Therapeutic Endoscopist</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Dr. Abhishek Yadav is a specialist in Medical Gastroenterology, Diagnostic and Therapeutic Endoscopy. 
          He completed MBBS and MD in Internal Medicine from SMS Medical College, Jaipur, Rajasthan, 
          and pursued DM in Gastroenterology from PGIMER, Chandigarh.
          He is a member of the American Gastroenterological Association (AGA), and a life member of the Indian Society of Gastroenterology (ISG), 
          Indian National Association for Study of Liver (INASL), and Society for Gastrointestinal Endoscopy in India (SGEI).
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
          <li>Gastroenterology / GI</li>
          <li>Inflammatory Bowel Disease (IBD) – Crohn's Disease & Ulcerative Colitis</li>
          <li>Luminal Disorders</li>
          <li>Endoscopic Management of GI Strictures</li>
          <li>Colon & Rectal Cancer – Familial Polyposis</li>
          <li>Preventative health related to the gastrointestinal (GI) tract</li>
          <li>Diagnosis and treatment of digestive system conditions</li>
          <li>Gastrointestinal Endoscopic Mucosal Resection</li>
          <li>Liver Disease Treatment</li>
          <li>Hepatitis A, B, C, D, and E Treatment</li>
          <li>Hemorrhoids Treatment</li>
          <li>Gall Bladder (Biliary) Stone Treatment</li>
          <li>Colitis Treatment</li>
          <li>Ulcerative Colitis Treatment</li>
          <li>Constipation Treatment</li>
          <li>Acidity Treatment</li>
          <li>Acute Pancreatitis Treatment</li>
          <li>Abdominal Pain Treatment</li>
          <li>Wilson's Disease Treatment</li>
          <li>Peptic / Gastric Ulcer Treatment</li>
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Experience</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Department of Gastroenterology, PGIMER, Chandigarh</li>
          <li>Department of Internal Medicine, SMS Medical College, Jaipur, Rajasthan</li>
          <li>Department of Internal Medicine, JLN Medical College, Ajmer, Rajasthan</li>
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

      {/* OPD Timings */}
      <section id="opd" className="bg-blue-50 p-6 max-w-4xl mx-auto rounded-lg shadow-md mt-6">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">OPD Timings</h2>
        <p className="text-gray-800 font-medium">Dr. Abhishek Yadav – Ajmer Gastro & Liver Care</p>
        <p className="text-gray-700 mt-2">⏰ OPD Hours: <span className="font-semibold">6:00 PM – 8:00 PM (Mon–Sun)</span></p>
        <p className="text-gray-700 mt-2">📞 Book Appointment at Call / WhatsApp: <span className="font-semibold">+91-8279263547</span></p>
        <p className="text-gray-700 mt-2">🚑 For urgent or emergency services, please contact:</p>
        <p className="text-gray-900 font-semibold">Kshetrapal Hospital Multispeciality & Research Centre (24×7)</p>
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
          <p className="flex items-center"><Phone className="w-5 h-5 mr-2" /> +91-8279263547</p>
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
