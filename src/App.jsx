import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, Award, CalendarDays, CheckCircle2, ChevronDown,
  Clock3, GraduationCap, HeartPulse, Hospital, Mail, MapPin, Menu, Microscope,
  Phone, ShieldCheck, Sparkles, Stethoscope, X, Activity, ClipboardCheck,
  MessageCircle, ExternalLink, BookOpen, BadgeCheck
} from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const PHONE = "8279263547";
const phoneLink = `tel:+91${PHONE}`;
const whatsappLink = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hello Doctor, I would like to book an appointment.")}`;
const clinicMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.3330336158087!2d74.6316169!3d26.5094116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be78e66fea35b%3A0xb4e239d460737e48!2sDr%20Abhishek%20Yadav%20-%20Gastroenterologist%2C%20Liver%20Specialist%2C%20Therapeutic%20Endoscopist!5e0!3m2!1sen!2sin!4v1756894436870!5m2!1sen!2sin";
const hospitalMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1847581309266!2d74.63233171452208!3d26.504432083305273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7cc30274d49%3A0x9d73720eeddb71b0!2sKSHETRAPAL%20HOSPITAL%20MULTISPECIALITY%20%26%20RESEARCH%20CENTRE!5e0!3m2!1sen!2sin!4v1689864807087!5m2!1sen!2sin";

const services = [
  { icon: HeartPulse, title: "Digestive health", text: "Assessment of acidity, abdominal pain, bloating, constipation and other digestive concerns." },
  { icon: Activity, title: "Liver care", text: "Evaluation and management of jaundice, hepatitis and other liver-related conditions." },
  { icon: Microscope, title: "Endoscopy & colonoscopy", text: "Diagnostic and therapeutic endoscopic procedures, guided by clinical need." },
  { icon: ShieldCheck, title: "IBD & intestinal disorders", text: "Care for Crohn’s disease, ulcerative colitis, colitis and other intestinal conditions." },
  { icon: Stethoscope, title: "Pancreas & biliary care", text: "Assessment of pancreatitis, gallbladder and bile-duct stone-related concerns." },
  { icon: ClipboardCheck, title: "Preventive GI care", text: "Evidence-informed evaluation, follow-up and guidance for digestive health." },
];
const conditions = ["Acidity & reflux", "Abdominal pain", "Liver disease & jaundice", "Hepatitis", "Peptic ulcers", "Constipation", "Crohn’s disease & ulcerative colitis", "Pancreatitis", "Gallbladder / bile-duct stones", "Colitis", "GI bleeding", "Digestive disorders"];
const awards = [
  "Moti L. & Kamla Rustgi International Travel Award — DDW 2025 (AGA)",
  "First in Scientific Research — DDW 2025 (AAGIO)",
  "Finalist — National Torrent Gastroenterology Quiz 2024",
  "Finalist — PGI GI Emergency Quiz 2024",
  "Faculty presenter — GI Clinics, ISCGCON Bengaluru 2024",
  "Gold Medal — RAJAPICON Jaisalmer 2019 (API Rajasthan)",
  "Gold Medal — Physiology, MBBS; Gold Medal — MBBS",
];
const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };

function SectionHeading({ eyebrow, title, text, light = false }) {
  return <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className={`section-heading ${light ? "light" : ""}`}>
    <span className="eyebrow"><span />{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}
  </motion.div>;
}

export default function DoctorPortfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault(); setSubmitted(false); setError(false); setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/xpwrepjz", { method: "POST", headers: { Accept: "application/json" }, body: new FormData(e.target) });
      const data = await res.json();
      if (res.ok && data.ok) { setSubmitted(true); setFormData({ name: "", email: "", phone: "", message: "" }); }
      else setError(true);
    } catch { setError(true); } finally { setSending(false); }
  };
  const closeMenu = () => setMenuOpen(false);
  const navItems = [["About", "about"], ["Specialities", "services"], ["Credentials", "credentials"], ["OPD & timings", "opd"], ["Contact", "contact"]];

  return <div className="site-shell">
    <div className="top-strip"><div className="container top-strip-inner"><span><MapPin size={14} /> Panchsheel, Ajmer, Rajasthan</span><span className="top-hours"><Clock3 size={14} /> OPD: Mon–Sat, 6:00–8:30 PM</span><a href={phoneLink}><Phone size={14} /> +91 {PHONE}</a></div></div>
    <header className="site-header">
      <nav className="container nav-wrap" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Dr. Abhishek Yadav home"><span className="brand-mark"><Stethoscope size={24} /></span><span className="brand-copy"><strong>Dr. Abhishek Yadav</strong><small>GASTROENTEROLOGY · AJMER</small></span></a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer" onClick={closeMenu}><CalendarDays size={16} /> Book appointment</a>
        </div>
        <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-pattern" aria-hidden="true"><span className="orbit orbit-one"/><span className="orbit orbit-two"/><span className="orbit orbit-three"/><div className="float-symbol symbol-one"><Activity /></div><div className="float-symbol symbol-two"><HeartPulse /></div><div className="float-symbol symbol-three"><Sparkles /></div></div>
        <div className="container hero-grid">
          <motion.div className="hero-copy" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="hero-kicker"><span className="live-dot" /> PERSONALIZED DIGESTIVE & LIVER CARE</div>
            <h1>Helping you feel better, <em>from within.</em></h1>
            <p className="hero-lead">Expert consultation for digestive, intestinal, liver and pancreatic health — with thoughtful care and evidence-informed treatment.</p>
            <div className="hero-credentials"><span><GraduationCap size={17} /> DM Gastroenterology, PGIMER Chandigarh</span><span><BadgeCheck size={17} /> MD Internal Medicine, SMS Jaipur</span></div>
            <div className="hero-actions"><a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary"><CalendarDays size={18} /> Book an appointment <ArrowRight size={17} /></a><a href="#services" className="btn btn-ghost">Explore specialities <ArrowDownRight size={17} /></a></div>
            <div className="hero-note"><ShieldCheck size={17} /><span>Clear guidance. Respectful consultations. Patient-focused care.</span></div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }}>
            <div className="visual-glow" />
            <div className="doctor-photo-frame"><img src={`${BASE}dr-abhishek-yadav-gastroenterologist-ajmer.jpg`} alt="Dr. Abhishek Yadav, gastroenterologist in Ajmer" fetchPriority="high" /><div className="photo-caption"><span className="photo-check"><CheckCircle2 size={18} /></span><span><strong>Dr. Abhishek Yadav</strong><small>Consultant Gastroenterologist</small></span></div></div>
            <div className="floating-card floating-card-top"><span className="mini-icon"><Award size={19} /></span><span><strong>Patient-focused care</strong><small>Clinical experience & compassion</small></span></div>
            <div className="floating-card floating-card-bottom"><span className="mini-icon mint"><Hospital size={19} /></span><span><strong>Ajmer, Rajasthan</strong><small>Clinic & hospital consultations</small></span></div>
            <div className="visual-label"><span>GI</span><small>Digestive health</small></div>
          </motion.div>
        </div>
        <div className="hero-bottom container"><span>CARE FOR YOUR DIGESTIVE HEALTH</span><a href="#about">Discover the practice <ChevronDown size={15} /></a><span className="hero-line" /></div>
      </section>

      <section className="trust-bar"><div className="container trust-grid"><div><GraduationCap /><span><strong>DM Gastroenterology</strong><small>PGIMER, Chandigarh</small></span></div><div><Award /><span><strong>Research recognition</strong><small>DDW 2025 awards</small></span></div><div><Microscope /><span><strong>Advanced procedures</strong><small>Diagnostic & therapeutic endoscopy</small></span></div><div><MapPin /><span><strong>Ajmer, Rajasthan</strong><small>Clinic & hospital care</small></span></div></div></section>

      <section id="about" className="section about-section">
  <div className="container about-grid">
    <motion.div
      className="about-art"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="about-image-wrap">
        <img
          src={`${BASE}Abhishek_Yadav.png`}
          alt="Dr. Abhishek Yadav, Consultant Gastroenterologist"
          loading="lazy"
        />
        <div className="about-image-shade" />
      </div>

      <div className="about-stamp">
        <span><HeartPulse size={24} /></span>
        <strong>Care with clarity</strong>
        <small>Your health, our focus</small>
      </div>

      <div className="about-caption">
        <span>01 / ABOUT THE DOCTOR</span>
        <span>SCIENCE · EMPATHY · CARE</span>
      </div>
    </motion.div>
      <div className="about-copy"><SectionHeading eyebrow="MEET YOUR SPECIALIST" title="Digestive health deserves thoughtful care." text="A patient-first approach to understanding symptoms, explaining options and planning the next step." /><p>Dr. Abhishek Yadav is a specialist in Medical Gastroenterology and diagnostic and therapeutic endoscopy. He completed his MBBS and MD in Internal Medicine from SMS Medical College, Jaipur, and DM in Gastroenterology from PGIMER, Chandigarh.</p><p>He is a member of the American Gastroenterological Association (AGA) and a life member of the Indian Society of Gastroenterology (ISG), Indian National Association for Study of Liver (INASL), and Society for Gastrointestinal Endoscopy in India (SGEI).</p><div className="membership-list"><span><CheckCircle2 /> American Gastroenterological Association (AGA)</span><span><CheckCircle2 /> ISG · INASL · SGEI</span></div><a href="#credentials" className="text-link">Explore qualifications & recognition <ArrowRight size={17} /></a></div></div></section>

      <section id="services" className="section services-section"><div className="container"><SectionHeading eyebrow="SPECIALITIES & SERVICES" title="Support for your digestive health" text="Consultation and procedure options are guided by your symptoms, medical history and clinical assessment." /><div className="service-grid">{services.map(({ icon: Icon, title, text }, i) => <motion.article className="service-card" key={title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ delay: i * 0.04 }}><span className="service-icon"><Icon size={23} /></span><span className="service-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Enquire about ${title}`}><ArrowRight size={18} /></a></motion.article>)}</div><div className="conditions-panel"><div><span className="eyebrow"><span /> CONDITIONS WE SEE</span><h3>Know what’s troubling you?</h3><p>Start with a consultation to discuss symptoms and appropriate care.</p></div><div className="condition-tags">{conditions.map((item) => <span key={item}>{item}</span>)}</div></div></div></section>

      <section id="credentials" className="section credentials-section"><div className="container"><SectionHeading eyebrow="QUALIFICATIONS & EXPERIENCE" title="Training grounded in clinical practice" text="Academic training, professional memberships and recognition in gastroenterology." /><div className="credentials-grid"><motion.div className="credential-panel education-panel" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="panel-heading"><span className="panel-icon"><GraduationCap /></span><div><h3>Education</h3><p>Academic & clinical training</p></div></div><div className="timeline"><div className="timeline-item"><span className="timeline-dot"/><strong>DM — Gastroenterology</strong><p>PGIMER, Chandigarh</p></div><div className="timeline-item"><span className="timeline-dot"/><strong>MD — Internal Medicine</strong><p>SMS Medical College, Jaipur</p></div><div className="timeline-item"><span className="timeline-dot"/><strong>MBBS</strong><p>SMS Medical College, Jaipur</p></div></div><div className="experience-note"><BookOpen size={18} /><span>Clinical training also includes Internal Medicine at JLN Medical College, Ajmer.</span></div></motion.div><motion.div className="credential-panel awards-panel" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="panel-heading"><span className="panel-icon gold"><Award /></span><div><h3>Awards & recognition</h3><p>Academic and professional milestones</p></div></div><ul className="award-list">{awards.map((award) => <li key={award}><span><CheckCircle2 size={17} /></span>{award}</li>)}</ul></motion.div></div></div></section>

      <section id="opd" className="section opd-section"><div className="container"><SectionHeading eyebrow="VISIT THE CLINIC" title="Plan your visit" text="Please call or WhatsApp before visiting to confirm availability and appointment details." /><div className="opd-grid"><motion.div className="opd-main-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="opd-card-top"><span className="opd-icon"><CalendarDays /></span><span className="availability"><i /> Appointment information</span></div><h3>Clinic OPD</h3><p className="opd-location"><MapPin size={16} /> B-134, opposite Hotel Panchsheel Plaza, Panchsheel Nagar, Ajmer</p><div className="time-row"><span><Clock3 size={18} /> Monday – Saturday</span><strong>6:00 PM – 8:30 PM</strong></div><div className="time-row"><span><Clock3 size={18} /> Sunday</span><strong>Call for appointments</strong></div><a className="btn btn-primary full-btn" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Call / WhatsApp: +91 {PHONE}</a><p className="small-note">Timings may change. Please confirm before travelling.</p></motion.div><motion.div className="hospital-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="hospital-icon"><Hospital size={24} /></div><span className="eyebrow"><span /> HOSPITAL CONSULTATIONS</span><h3>Kshetrapal Hospital</h3><p>Multispeciality & Research Centre, Ajmer</p><div className="hospital-hours"><Clock3 size={17} /><span><strong>Monday – Saturday</strong><small>10:00 AM – 5:00 PM · Closed Sundays</small></span></div><a className="text-link" href={hospitalMap.replace("/embed?", "/?")} target="_blank" rel="noreferrer">View hospital location <ExternalLink size={16} /></a><div className="hospital-note"><ShieldCheck size={18} /><span>For urgent or emergency concerns, contact the hospital directly.</span></div></motion.div></div></div></section>

      <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow"><span /> YOUR NEXT STEP</span><h2>Let’s talk about your digestive health.</h2><p>Reach out to request an appointment or ask about clinic availability.</p></div><div className="cta-actions"><a className="btn btn-light" href={phoneLink}><Phone size={18} /> Call the clinic</a><a className="btn btn-outline-light" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a></div><div className="cta-decoration" aria-hidden="true"><Activity /></div></div></section>

      <section id="contact" className="section contact-section"><div className="container"><div className="contact-heading"><SectionHeading eyebrow="CONTACT & APPOINTMENTS" title="We’re here to help you take the next step." text="Send a message or use the direct contact options below. For emergencies, please contact a hospital." /></div><div className="contact-grid"><motion.div className="contact-form-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}><h3>Send an enquiry</h3><p className="form-intro">Share your contact details and a brief message. Please avoid sending sensitive medical records through this form.</p>{submitted ? <div className="success-message"><CheckCircle2 size={30} /><strong>Thank you for reaching out.</strong><span>Your message has been sent successfully.</span><button className="text-link" onClick={() => setSubmitted(false)}>Send another message <ArrowRight size={16} /></button></div> : <form onSubmit={handleSubmit} className="contact-form"><div className="form-row"><label>Your name<input type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required /></label><label>Phone number<input type="tel" name="phone" autoComplete="tel" inputMode="numeric" value={formData.phone} onChange={handleChange} placeholder="10-digit mobile number" pattern="[0-9]{10}" maxLength="10" title="Please enter a 10-digit phone number" required /></label></div><label>Email address<input type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required /></label><label>How can we help?<textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write a brief message or appointment request" rows="4" required /></label><input type="hidden" name="_subject" value="New Inquiry from Dr. Abhishek Yadav Website" /><input type="hidden" name="_captcha" value="false" /><button type="submit" className="btn btn-primary submit-btn" disabled={sending}>{sending ? "Sending…" : "Send enquiry"}<ArrowRight size={17} /></button>{error && <p className="error-message" role="alert">We couldn’t send your message. Please try again or contact the clinic by phone.</p>}</form>}</motion.div><motion.div className="contact-details" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}><h3>Contact details</h3><a className="contact-detail" href={phoneLink}><span className="detail-icon"><Phone /></span><span><small>Call for appointments</small><strong>+91 {PHONE}</strong></span><ArrowRight className="detail-arrow" size={17} /></a><a className="contact-detail" href="mailto:drabhishekyadavgastro@gmail.com"><span className="detail-icon"><Mail /></span><span><small>Email</small><strong>drabhishekyadavgastro@gmail.com</strong></span><ArrowRight className="detail-arrow" size={17} /></a><div className="contact-detail"><span className="detail-icon"><MapPin /></span><span><small>Clinic address</small><strong>B-134, opposite Hotel Panchsheel Plaza, B Block, Panchsheel Nagar, Ajmer, Rajasthan 305004</strong></span></div><a className="linkedin-link" href="https://www.linkedin.com/in/abhishek-yadav-9a6a1273/" target="_blank" rel="noreferrer">Professional profile <ExternalLink size={15} /></a><div className="map-card"><div className="map-card-heading"><span><MapPin size={17} /> Clinic location</span><a href="https://maps.google.com/?q=Dr+Abhishek+Yadav+Gastroenterologist+Ajmer" target="_blank" rel="noreferrer">Open map <ExternalLink size={14} /></a></div><iframe title="Dr Abhishek Yadav clinic map in Ajmer" src={clinicMap} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div><div className="map-card hospital-map"><div className="map-card-heading"><span><Hospital size={17} /> Kshetrapal Hospital</span><a href="https://maps.google.com/?q=Kshetrapal+Hospital+Ajmer" target="_blank" rel="noreferrer">Open map <ExternalLink size={14} /></a></div><iframe title="Kshetrapal Hospital location in Ajmer" src={hospitalMap} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></motion.div></div></div></section>
    </main>

    <footer className="site-footer"><div className="container footer-main"><a href="#home" className="brand footer-brand"><span className="brand-mark"><Stethoscope size={23} /></span><span className="brand-copy"><strong>Dr. Abhishek Yadav</strong><small>GASTROENTEROLOGY · AJMER</small></span></a><p>Thoughtful, patient-focused care for digestive and liver health.</p><a href="#home" className="back-top">Back to top ↑</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Dr. Abhishek Yadav. All rights reserved.</span><span>Website information is educational and does not replace medical advice.</span></div></footer>
    <div className="mobile-quick-actions"><a href={phoneLink}><Phone size={18} /><span>Call</span></a><a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span>WhatsApp / Appointment</span></a></div>
  </div>;
}
