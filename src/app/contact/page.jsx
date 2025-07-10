'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Form handling not yet wired to backend)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-lg">
          We'd love to hear from you. Whether you have a question or just want to say hi — our inbox is always open.
        </p>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type your message here..."
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-all rounded-xl text-white font-medium"
          >
            Send Message <Send className="w-5 h-5" />
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Contact Info</h2>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-purple-400" />
              media@yourcompany.com
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-purple-400" />
              +1 (555) 123-4567
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-purple-400" />
              123 Future St, Silicon Valley, CA
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Follow Us</h2>
            <div className="flex gap-4 text-gray-300">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
