'use client';
import React from 'react';
import { Code } from 'lucide-react';

export default function Header() {
  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav className="relative z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg flex items-center justify-center">
          <Code className="w-4 h-4 text-white" />
        </div>
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Quantum
        </div>
      </div>
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className={`transition-colors duration-300 ${item === 'About' ? 'text-indigo-400' : 'hover:text-indigo-400'}`}
          >
            {item}
          </a>
        ))}
      </div>
      <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300">
        Get Started
      </button>
    </nav>
  );
}
