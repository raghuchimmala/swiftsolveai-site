import { useState } from "react";
import { Mail, MessageSquare, Bot } from "lucide-react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! We'll contact you at: " + form.email);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-black text-white p-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">SwiftSolve AI</h1>
        <a href="#contact" className="bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600 transition">Book Free Consultation</a>
      </header>

      <section className="px-6 py-20 text-center bg-gradient-to-b from-white to-blue-50">
        <h2 className="text-4xl font-bold mb-4">AI Chatbots That Convert Visitors into Customers</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">We build intelligent chat solutions for businesses using AI, automation, and NLP.</p>
      </section>

      <section className="px-6 py-16 bg-gray-100" id="services">
        <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">
            <Bot className="text-blue-500 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Custom AI Chatbots</h4>
            <p>Create smart, conversational bots for websites, WhatsApp, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <MessageSquare className="text-blue-500 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">NLP & GPT Integration</h4>
            <p>Leverage GPT-4 or custom NLP to power your assistant with deep learning.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <Mail className="text-blue-500 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Automation & Support</h4>
            <p>Integrate chatbots with CRMs and automate support workflows 24/7.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-white text-center" id="about">
        <h3 className="text-3xl font-bold mb-6">About SwiftSolve AI</h3>
        <p className="max-w-2xl mx-auto text-gray-700">
          Based in the UK, we help startups and businesses automate customer support, lead generation, and engagement using cutting-edge AI. Our team builds scalable, high-performing chatbots tailored to your goals.
        </p>
      </section>

      <section className="px-6 py-20 bg-blue-50" id="contact">
        <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 border rounded-xl" required />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 border rounded-xl" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="w-full p-3 border rounded-xl" rows={4} required />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition">Send Message</button>
        </form>
      </section>

      <footer className="bg-black text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} SwiftSolve AI. All rights reserved.
      </footer>
    </main>
  );
}
