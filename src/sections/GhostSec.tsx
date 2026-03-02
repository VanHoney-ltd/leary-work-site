import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Shield, Key, Terminal, Cpu, Lock, ArrowRight, Check } from 'lucide-react';
import { ghostsecConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const GhostSec = () => {
  if (!ghostsecConfig.sectionTitle) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => setIsVisible(true),
    });
    return () => st.kill();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power3.out' }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [isVisible]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield className="w-8 h-8" />;
      case 'key':
        return <Key className="w-8 h-8" />;
      default:
        return <Code className="w-8 h-8" />;
    }
  };

  return (
    <section
      id="ghostsec"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050508] py-20 overflow-hidden"
    >
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={ghostsecConfig.logoImage}
              alt="GhostSec Logo"
              className="w-16 h-16 rounded-xl"
            />
            <div>
              <p className="font-mono-custom text-xs text-[#00ff41]/60 uppercase tracking-wider mb-1">
                {ghostsecConfig.sectionLabel}
              </p>
              <h2 className="font-display text-5xl md:text-7xl text-white">
                {ghostsecConfig.sectionTitle}
              </h2>
            </div>
          </div>
          <p className="text-lg text-white/60 max-w-2xl">
            {ghostsecConfig.description}
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {ghostsecConfig.projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative p-8 bg-[#0f1f0f]/80 rounded-2xl border border-[#00ff41]/20 hover:border-[#00ff41]/50 transition-all"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-[#00ff41]/10 flex items-center justify-center text-[#00ff41] mb-6 group-hover:bg-[#00ff41]/20 transition-colors">
                {getIcon(project.icon)}
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display text-2xl text-white mb-2">
                {project.name}
              </h3>
              <p className="font-mono-custom text-sm text-[#00ff41]/60 mb-4">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="text-white/60 mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#00ff41]/10 text-[#00ff41] text-xs font-mono-custom rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/70">
                    <Check className="w-4 h-4 text-[#00ff41]" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#00ff41]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="flex justify-center gap-8 mb-16">
          <div className="flex flex-col items-center text-white/40">
            <Terminal className="w-8 h-8 mb-2" />
            <span className="text-xs font-mono-custom">RUST</span>
          </div>
          <div className="flex flex-col items-center text-white/40">
            <Cpu className="w-8 h-8 mb-2" />
            <span className="text-xs font-mono-custom">GOLANG</span>
          </div>
          <div className="flex flex-col items-center text-white/40">
            <Lock className="w-8 h-8 mb-2" />
            <span className="text-xs font-mono-custom">SECURITY</span>
          </div>
          <div className="flex flex-col items-center text-white/40">
            <Code className="w-8 h-8 mb-2" />
            <span className="text-xs font-mono-custom">iOS</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-mono-custom text-sm text-white/60 mb-4">
            {ghostsecConfig.ctaText}
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ff41] text-[#050508] font-display text-sm uppercase tracking-wider rounded-full hover:bg-[#00ff41]/80 transition-colors">
            <Code className="w-4 h-4" />
            <span>{ghostsecConfig.ctaButtonText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff41]/20 to-transparent" />
    </section>
  );
};

export default GhostSec;
