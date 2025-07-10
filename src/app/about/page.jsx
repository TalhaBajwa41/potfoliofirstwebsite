'use client';

import React, { useState, useEffect } from 'react';
import {
  Users, Zap, Award, ArrowRight,
  Lightbulb, TrendingUp
} from 'lucide-react';

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden relative">

      {/* 🔵 Animated Background */}
      {isMounted && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
              transition: 'all 0.3s ease-out'
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-2xl animate-bounce" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/5 to-rose-500/5 rounded-full blur-2xl animate-pulse" />
        </div>
      )}

      {/* 🚀 Hero Section */}
      <section id="hero" className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl mx-auto">
          <span className="px-4 py-2 text-sm font-medium bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
            🚀 Building the Future of Web Development
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We're not just building software—we're crafting the future of digital experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium">
              <Users className="w-4 h-4 text-blue-400" />
              Global Team
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium">
              <Zap className="w-4 h-4 text-yellow-400" />
              Innovation First
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium">
              <Award className="w-4 h-4 text-emerald-400" />
              Excellence Driven
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
