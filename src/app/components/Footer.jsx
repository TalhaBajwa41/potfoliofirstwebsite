'use client';

import Link from 'next/link';
import { Facebook, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white dark:bg-black dark:text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">NextFooter</h2>
          <p className="text-sm text-gray-400">
            Beautifully crafted components for your Next.js projects.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-3">Get updates and news right in your inbox.</p>
          <form className="flex flex-col sm:flex-row sm:items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded text-black w-full sm:w-auto flex-1"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <span>© {new Date().getFullYear()} NextFooter. All rights reserved.</span>
        {/* Socials */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:text-blue-500" />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Twitter className="w-5 h-5 hover:text-sky-400" />
          </Link>
          <Link href="https://github.com" target="_blank" aria-label="GitHub">
            <Github className="w-5 h-5 hover:text-gray-300" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:text-blue-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
