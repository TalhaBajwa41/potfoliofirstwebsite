'use client';
import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header'; // ✅ Import the separated header
import {
  Users, Target, Zap, Award, MapPin, Calendar,
  TrendingUp, Heart, Coffee, Code, Lightbulb,
  Rocket, Star, Globe, ArrowRight, ChevronDown, Play
} from 'lucide-react';

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [countUp, setCountUp] = useState({ users: 0, projects: 0, countries: 0, uptime: 0 });
  const [hoveredMember, setHoveredMember] = useState(null);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible.stats) {
      const targets = { users: 250000, projects: 45000, countries: 120, uptime: 99.9 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      const timer = setInterval(() => {
        setCountUp((prev) => {
          const newState = { ...prev };
          Object.keys(targets).forEach((key) => {
            const target = targets[key];
            const current = prev[key];
            const step = target / steps;
            if (current < target) {
              newState[key] = Math.min(current + step, target);
            }
          });
          return newState;
        });
      }, increment);

      return () => clearInterval(timer);
    }
  }, [isVisible.stats]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % timeline.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue((prev) => (prev + 1) % values.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const timeline = [
    { year: '2020', title: 'The Beginning', desc: 'Founded with a vision to revolutionize web development', icon: <Lightbulb className="w-6 h-6" /> },
    { year: '2021', title: 'First Product', desc: 'Launched our flagship development platform', icon: <Rocket className="w-6 h-6" /> },
    { year: '2022', title: 'Global Expansion', desc: 'Reached 100+ countries worldwide', icon: <Globe className="w-6 h-6" /> },
    { year: '2023', title: 'AI Integration', desc: 'Introduced AI-powered development tools', icon: <Zap className="w-6 h-6" /> },
    { year: '2024', title: 'Quantum Leap', desc: 'Launched next-generation quantum platform', icon: <Star className="w-6 h-6" /> },
    { year: '2025', title: 'The Future', desc: 'Continuing to push boundaries of innovation', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const values = [
    { title: 'Innovation First', desc: 'We push the boundaries of what\'s possible in web development', icon: <Lightbulb className="w-8 h-8" />, color: 'from-yellow-400 to-orange-400' },
    { title: 'User-Centric', desc: 'Every decision is made with our users\' success in mind', icon: <Heart className="w-8 h-8" />, color: 'from-pink-400 to-rose-400' },
    { title: 'Quality Excellence', desc: 'We deliver nothing less than exceptional quality', icon: <Award className="w-8 h-8" />, color: 'from-blue-400 to-indigo-400' },
    { title: 'Transparency', desc: 'Open communication and honest relationships', icon: <Target className="w-8 h-8" />, color: 'from-emerald-400 to-teal-400' }
  ];

  const team = [
    { name: 'Alex Chen', role: 'CEO & Founder', avatar: '👨‍💼', bio: 'Visionary leader with 15+ years in tech', color: 'from-blue-400 to-indigo-400' },
    { name: 'Sarah Johnson', role: 'CTO', avatar: '👩‍💻', bio: 'Full-stack architect passionate about innovation', color: 'from-purple-400 to-pink-400' },
    { name: 'Marcus Rodriguez', role: 'Head of Design', avatar: '👨‍🎨', bio: 'Creative mind behind our beautiful interfaces', color: 'from-emerald-400 to-teal-400' },
    { name: 'Emily Davis', role: 'VP Engineering', avatar: '👩‍🔬', bio: 'Engineering excellence and team leadership', color: 'from-orange-400 to-red-400' },
    { name: 'David Kim', role: 'Head of Product', avatar: '👨‍🚀', bio: 'Product strategy and user experience expert', color: 'from-cyan-400 to-blue-400' },
    { name: 'Lisa Wang', role: 'Head of Marketing', avatar: '👩‍💼', bio: 'Growth and brand strategy specialist', color: 'from-pink-400 to-rose-400' }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toFixed(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      {/* ✅ Reusable Header */}
      <Header />

      {/* 🔽 Continue with rest of your sections: Hero, Stats, Timeline, Values, Team, CTA, Footer */}
      {/* You can paste the rest of your existing JSX code here exactly as it is, after replacing the nav with <Header /> */}

      {/* Example: */}
      {/* <section id="hero">...</section> */}
    </div>
  );
}
