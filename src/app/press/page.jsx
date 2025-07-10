'use client';

import React from 'react';
import { ArrowRight, Download, Mail, Phone } from 'lucide-react';

const articles = [
  {
    title: 'How This Startup is Redefining Web Development',
    outlet: 'TechCrunch',
    logo: '/press/techcrunch-logo.png',
    date: 'May 2025',
    link: 'https://techcrunch.com/startup-web-revolution',
    summary: 'An in-depth look at how innovation and AI are powering the next wave of digital products.'
  },
  {
    title: 'The Future of Digital: A Talk with Our CEO',
    outlet: 'Forbes',
    logo: '/press/forbes-logo.png',
    date: 'March 2025',
    link: 'https://forbes.com/future-digital-ceo-interview',
    summary: 'Forbes sits down with our founder to discuss the company’s vision for a barrier-free web.'
  },
  {
    title: 'Top 10 Disruptive Tech Companies in 2025',
    outlet: 'Wired',
    logo: '/press/wired-logo.png',
    date: 'January 2025',
    link: 'https://wired.com/top-10-tech-2025',
    summary: 'We’re honored to be featured as one of the most disruptive companies in the industry.'
  }
];

export default function PressPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
          Press & Media
        </h1>
        <p className="text-gray-400 text-lg">
          Stay up to date with the latest press features, announcements, and news coverage.
        </p>
      </section>

      {/* Articles */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold mb-8">In the News</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <img src={article.logo} alt={article.outlet} className="h-10" />
                <div className="text-sm text-gray-400">{article.date}</div>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-purple-300 transition">
                {article.title}
              </h3>
              <p className="text-gray-300">{article.summary}</p>
              <div className="flex items-center text-purple-400 text-sm mt-auto">
                Read more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Media Contact */}
      <section className="max-w-3xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold mb-6">Media Contact</h2>
        <p className="text-gray-300 mb-4">
          For media inquiries, interviews, or to request a press kit, contact our media relations team:
        </p>
        <div className="space-y-2 text-gray-300">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-purple-400" />
            <span>media@yourcompany.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-purple-400" />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/20">
          <h3 className="text-3xl font-bold mb-4">Need Our Assets?</h3>
          <p className="text-gray-300 mb-6">
            Download our official logos, brand guidelines, and product screenshots in one place.
          </p>
          <a
            href="/assets/press-kit.zip"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-all"
          >
            <Download className="w-5 h-5" />
            Download Press Kit
          </a>
        </div>
      </section>
    </main>
  );
}
