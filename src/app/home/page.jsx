"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Star, ArrowRight, Globe, Zap, Shield, Users, Sparkles, Layers, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <Globe className="w-8 h-8" />, title: "Global Scale", desc: "Deploy worldwide with zero configuration", color: "from-emerald-400 to-teal-400" },
    { icon: <Zap className="w-8 h-8" />, title: "Lightning Fast", desc: "Sub-second response times guaranteed", color: "from-yellow-400 to-orange-400" },
    { icon: <Layers className="w-8 h-8" />, title: "Micro-Frontend", desc: "Modular architecture for teams", color: "from-blue-400 to-indigo-400" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Analytics Pro", desc: "Real-time performance insights", color: "from-pink-400 to-rose-400" }
  ];

  const testimonials = [
    { name: "Alex Rivera", role: "Senior Developer", company: "TechFlow", text: "Revolutionary platform that changed how we build applications.", avatar: "🚀" },
    { name: "Jordan Kim", role: "CTO", company: "InnovateLab", text: "Performance improvements beyond our wildest expectations.", avatar: "⚡" },
    { name: "Taylor Morgan", role: "Lead Engineer", company: "FutureStack", text: "The developer experience is absolutely phenomenal.", avatar: "🎯" }
  ];

  const stats = [
    { number: '150K+', label: 'Active Users', icon: <Users className="w-6 h-6" />, color: 'from-emerald-400 to-teal-400' },
    { number: '99.99%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" />, color: 'from-blue-400 to-indigo-400' },
    { number: '5M+', label: 'API Calls/Day', icon: <Sparkles className="w-6 h-6" />, color: 'from-pink-400 to-rose-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden relative">
      {/* Animated particle system */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              animation: `float ${particle.speed * 3}s ease-in-out infinite alternate`,
              animationDelay: `${particle.id * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            transform: `scale(${1 + scrollY * 0.001}) rotate(${scrollY * 0.1}deg)`
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }} />
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-5xl">
          <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium animate-pulse">
                ✨ Introducing Quantum v2.0
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent leading-tight">
              The Future of
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
                Development
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience quantum-level performance with our next-generation platform that transforms how you build, deploy, and scale applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
              <button className="border border-emerald-500/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300 backdrop-blur-sm">
                Explore Features
              </button>
            </div>
            <div className="flex justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Free 30-day trial
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                No credit card required
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-emerald-400" />
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Quantum Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the revolutionary features that power the next generation of web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className={`bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-emerald-400/50 transition-all duration-500 cursor-pointer group relative overflow-hidden ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
                onMouseEnter={() => setActiveFeature(idx)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`text-transparent bg-gradient-to-r ${feature.color} bg-clip-text mb-4 group-hover:scale-110 transition-all duration-300 relative z-10`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 relative z-10">{feature.title}</h3>
                <p className="text-gray-300 relative z-10">{feature.desc}</p>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section id="stats" className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`grid md:grid-cols-3 gap-8 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${stat.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                </div>
                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials with Carousel */}
      <section id="testimonials" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Developer Love
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div 
                    key={idx}
                    className="w-full flex-shrink-0 p-8 text-center"
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
                      <div className="text-4xl mb-4">{testimonial.avatar}</div>
                      <div className="flex justify-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-xl text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                      <div>
                        <div className="font-semibold text-lg">{testimonial.name}</div>
                        <div className="text-emerald-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial ? 'bg-emerald-400' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section id="cta" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-3xl p-12 border border-emerald-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 animate-pulse"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Ready to Go Quantum?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the quantum revolution and transform your development workflow with cutting-edge technology
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border border-emerald-500/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}