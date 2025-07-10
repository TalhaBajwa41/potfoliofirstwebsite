'use client';

import React from 'react';
import { Briefcase, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const positions = [
  {
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Work with modern tools like React, Next.js, and Tailwind to build UI experiences.',
  },
  {
    title: 'Backend Engineer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Design scalable systems using Node.js, databases, and cloud services.',
  },
  {
    title: 'Product Designer',
    location: 'Remote',
    type: 'Contract',
    description: 'Craft user-centric designs with a strong focus on accessibility and experience.',
  },
];

const perks = [
  'Flexible hours & remote work',
  'Learning budget & certifications',
  'Modern tech stack & tools',
  'Diverse, inclusive culture',
  'Annual team retreats',
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
          Join Our Team
        </h1>
        <p className="text-gray-400 text-lg">
          We're on a mission to build the future of the web—and we need passionate people to get us there.
        </p>
      </section>

      {/* Open Positions */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Open Positions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {positions.map((job, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-300 mb-4">{job.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {job.type}
                </div>
              </div>
              <button className="flex items-center gap-2 text-purple-400 hover:underline">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="max-w-4xl mx-auto mb-24 text-center">
        <h2 className="text-3xl font-semibold mb-8">Perks & Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {perks.map((perk, idx) => (
            <div key={idx} className="flex items-start gap-3 text-gray-300">
              <CheckCircle className="text-emerald-400 w-5 h-5 mt-1" />
              {perk}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto text-center">
        <div className="p-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl border border-white/20">
          <h3 className="text-3xl font-bold mb-4">Let’s Build the Future Together</h3>
          <p className="text-gray-300 mb-6">
            If you’re passionate about innovation and creating world-class experiences, we’d love to hear from you.
          </p>
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold transition-all">
            View All Jobs
          </button>
        </div>
      </section>
    </main>
  );
}
