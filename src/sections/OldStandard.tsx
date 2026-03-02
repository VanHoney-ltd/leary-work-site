import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Hammer, ArrowRight } from 'lucide-react';
import { oldStandardConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const OldStandard = () => {
  if (!oldStandardConfig.sectionTitle) return null;

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
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [isVisible]);

  return (
    <section
      id="oldstandard"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#0A0A0F] py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0A0A0F] to-[#050508]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono-custom text-xs text-[#00D4FF]/60 uppercase tracking-wider mb-2">
            {oldStandardConfig.sectionLabel}
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-6">
            {oldStandardConfig.sectionTitle}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl">
            {oldStandardConfig.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 bg-[#1F1F1F]/30 rounded-xl border border-[#00D4FF]/10">
            <p className="font-display text-4xl text-[#00D4FF]">{oldStandardConfig.stats.yearsExperience}</p>
            <p className="font-mono-custom text-xs text-white/50 uppercase tracking-wider mt-2">Years</p>
          </div>
          <div className="text-center p-6 bg-[#1F1F1F]/30 rounded-xl border border-[#00D4FF]/10">
            <p className="font-display text-4xl text-[#00D4FF]">{oldStandardConfig.stats.projectsCompleted}</p>
            <p className="font-mono-custom text-xs text-white/50 uppercase tracking-wider mt-2">Projects</p>
          </div>
          <div className="text-center p-6 bg-[#1F1F1F]/30 rounded-xl border border-[#00D4FF]/10">
            <p className="font-display text-4xl text-[#00D4FF]">{oldStandardConfig.stats.statesWorked}</p>
            <p className="font-mono-custom text-xs text-white/50 uppercase tracking-wider mt-2">States</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {oldStandardConfig.projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#1F1F1F]/30 border border-[#00D4FF]/10 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-[#00D4FF]/20 text-[#00D4FF] text-xs font-mono-custom rounded">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-xl text-white mb-1">{project.title}</h3>
                <div className="flex items-center gap-2 text-white/50">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.location}</span>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-mono-custom text-sm text-white/60 mb-4">
            {oldStandardConfig.ctaText}
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4FF] text-[#050508] font-display text-sm uppercase tracking-wider rounded-full hover:bg-[#00D4FF]/80 transition-colors">
            <Hammer className="w-4 h-4" />
            <span>{oldStandardConfig.ctaButtonText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" />
    </section>
  );
};

export default OldStandard;
