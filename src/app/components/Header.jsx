"use client";
import React from 'react';
import { Code, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <nav className="relative z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md border-b border-white/10 bg-white/5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center animate-pulse">
          <Code className="w-4 h-4 text-white" />
        </div>
        <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Quantum
        </div>
      </div>
      <div className="hidden md:flex space-x-8">
        {['Platform', 'Solutions', 'Pricing', 'Community'].map((item, idx) => (
          <a 
            key={item} 
            href="#" 
            className="hover:text-emerald-400 transition-all duration-300 transform hover:scale-105 relative group"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
      <button className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2">
        <Sparkles className="w-4 h-4" />
        Launch App
      </button>
    </nav>
  );
}