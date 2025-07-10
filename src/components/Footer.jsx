"use client";
import React from 'react';
import { Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-12 px-6 bg-gradient-to-r from-slate-950/50 to-indigo-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Quantum
              </div>
            </div>
            <p className="text-gray-400 mb-4">Quantum-level development platform for the future of web applications.</p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-500/20 transition-colors duration-300 cursor-pointer">
                  <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
          {[
            { title: 'Platform', items: ['Features', 'Integrations', 'API', 'Security'] },
            { title: 'Company', items: ['About', 'Blog', 'Careers', 'Press'] },
            { title: 'Resources', items: ['Documentation', 'Community', 'Support', 'Status'] }
          ].map((section, idx) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-emerald-400">{section.title}</h3>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <a key={item} href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Quantum. All rights reserved. Built with quantum precision.</p>
        </div>
      </div>
    </footer>
  );
}