'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'Mastering React Hooks in 2025',
    date: 'July 5, 2025',
    summary: 'Understand the latest best practices and patterns for using React Hooks in modern applications.',
    tag: 'React',
  },
  {
    id: '2',
    title: 'Building Scalable Apps with Next.js 14',
    date: 'June 28, 2025',
    summary: 'Next.js 14 brings huge improvements—learn how to leverage app directory, RSC, and more.',
    tag: 'Next.js',
  },
  {
    id: '3',
    title: 'Designing for Accessibility',
    date: 'June 18, 2025',
    summary: 'How to build inclusive interfaces that everyone can use, with practical design tips.',
    tag: 'UX Design',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
          Blog & Insights
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Explore our latest posts, tutorials, and thought leadership from our team.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group border border-white/10 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center text-sm text-gray-400 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-300 transition">
                {post.title}
              </h2>
              <p className="text-gray-300 mb-4">{post.summary}</p>
              <div className="flex items-center gap-2 text-sm text-purple-400 group-hover:underline">
                Read more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
