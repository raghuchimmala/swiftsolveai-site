import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! We'll contact you at: " + form.email);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>SwiftSolve AI</h1>
        <a href="#contact" style={{ color: "blue", textDecoration: "underline" }}>Book Free Consultation</a>
      </header>

      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>AI Chatbots That Convert Visitors into Customers</h2>
        <p>We build intelligent chat solutions for businesses using AI, automation, and NLP.</p>
      </section>

      <section id="services" style={{ marginBottom: "2rem" }}>
        <h3>Our Services</h3>
        <ul>
          <li>Custom AI Chatbots</li>
          <li>NLP & GPT Integration</li>
          <li>Automation & Support</li>
        </ul>
      </section>

      <section id="about" style={{ marginBottom: "2rem" }}>
        <h3>About SwiftSolve AI</h3>
        <p>Based in the UK, we help startups and businesses automate customer support, lead generation, and engagement using cutting-edge AI.</p>
      </section>

      <section id="contact" style={{ marginBottom: "2rem" }}>
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={4} required />
          <button type="submit" style={{ backgroundColor: "#0070f3", color: "#fff", padding: "0.75rem", border: "none", cursor: "pointer" }}>
            Send Message
          </button>
        </form>
      </section>

      <footer style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.8rem", color: "#666" }}>
        © {new Date().getFullYear()} SwiftSolve AI. All rights reserved.
      </footer>
    </main>
  );
}
