import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, Briefcase, Hammer, ArrowRight } from 'lucide-react';
import { aboutConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Null check: if config is empty, do not render
  if (!aboutConfig.sectionTitle || aboutConfig.timelineEvents.length === 0) {
    return null;
  }

  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeEvent, setActiveEvent] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => setIsVisible(true),
    });

    scrollTriggerRef.current = st;

    return () => {
      st.kill();
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.timeline-item') || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isVisible]);

  const TIMELINE_EVENTS = aboutConfig.timelineEvents;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#0A0A0F] py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0A0A0F] to-[#050508]" />

      {/* Content container */}
      <div ref={contentRef} className="relative z-20 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="font-mono-custom text-xs text-[#00D4FF]/60 uppercase tracking-wider mb-2">
            {aboutConfig.sectionLabel}
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white">
            {aboutConfig.sectionTitle}
          </h2>
        </div>

        {/* Profile and Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Profile Image */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-md">
              {/* Logo */}
              {aboutConfig.logoImage && (
                <div className="absolute -top-8 -right-8 w-24 h-24 z-20 opacity-80">
                  <img
                    src={aboutConfig.logoImage}
                    alt="Old Standard Construction Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              
              {/* Profile Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#1F1F1F]/50 border border-[#00D4FF]/20">
                <img
                  src={aboutConfig.profileImage}
                  alt="Master Carpenter"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
              </div>

              {/* Birth date badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#050508]/90 backdrop-blur-sm rounded-xl border border-[#00D4FF]/20">
                <p className="font-mono-custom text-xs text-[#00D4FF]/60 uppercase tracking-wider mb-1">
                  Portfolio
                </p>
                <p className="font-display text-lg text-white">
                  Born {aboutConfig.birthDate}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="flex flex-col justify-center">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                {aboutConfig.bioIntro}
              </p>
              
              <div className="space-y-4 text-white/60 leading-relaxed">
                {aboutConfig.bioFull.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-sm md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              <div className="text-center p-4 bg-[#1F1F1F]/30 rounded-xl border border-[#00D4FF]/10">
                <p className="font-display text-3xl text-[#00D4FF]">{aboutConfig.stats.yearsExperience}</p>
                <p className="font-mono-custom text-xs text-white/50 uppercase tracking-wider mt-1">Years</p>
              </div>
              <div className="text-center p-4 bg-[#1F1F1F]/30 rounded-xl border border-[#00D4FF]/10">
                <p className="font-display text-3xl text-[#00D4FF]">{aboutConfig.stats.artworksCreated}</p>
                <p className="font-mono-custom text-xs text-white/50 uppercase tracking-wider mt-1">Artworks</p>
              </div>
              <div className="text-center p-4 bg-[#1F1F1F]/30 rounded-xl border border-[#00D4FF]/10">
                <p className="font-display text-3xl text-[#00D4FF]">{aboutConfig.stats.locationsWorked}</p>
                <p className="font-mono-custom text-xs text-white/50 uppercase tracking-wider mt-1">States</p>
              </div>
              <div className="text-center p-4 bg-[#1F1F1F]/30 rounded-xl border border-[#00D4FF]/10">
                <p className="font-display text-3xl text-[#00D4FF]">{aboutConfig.stats.projectsCompleted}</p>
                <p className="font-mono-custom text-xs text-white/50 uppercase tracking-wider mt-1">Projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h3 className="font-display text-3xl text-white mb-8 text-center">
            {aboutConfig.timelineTitle}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Event preview */}
            {TIMELINE_EVENTS.length > 0 && (
              <div className="hidden lg:flex lg:items-center">
                <div className="sticky top-32 w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#1F1F1F]/30 border border-[#00D4FF]/10">
                  <img
                    src={TIMELINE_EVENTS[activeEvent]?.image}
                    alt={TIMELINE_EVENTS[activeEvent]?.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />

                  {/* Event info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#050508] to-transparent">
                    <p className="font-display text-2xl text-white">
                      {TIMELINE_EVENTS[activeEvent]?.title}
                    </p>
                    <p className="font-mono-custom text-sm text-[#00D4FF]/70">
                      {TIMELINE_EVENTS[activeEvent]?.location}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Right: Timeline list */}
            <div className="space-y-4">
              {TIMELINE_EVENTS.map((event, index) => (
                <div
                  key={event.id}
                  className="timeline-item group relative p-6 rounded-xl bg-[#1F1F1F]/30 backdrop-blur-sm border border-[#00D4FF]/10 hover:bg-[#1F1F1F]/50 hover:border-[#00D4FF]/30 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setActiveEvent(index)}
                  onMouseLeave={() => setActiveEvent(0)}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Date */}
                    <div className="flex-shrink-0 w-24">
                      <p className="font-mono-custom text-xl font-bold text-[#00D4FF]">
                        {event.date}
                      </p>
                    </div>

                    {/* Event info */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-[#00D4FF]/50" />
                        <span className="font-display text-lg text-white">
                          {event.location}
                        </span>
                      </div>
                      <p className="text-sm text-white/60 ml-6">
                        {event.title}
                      </p>
                    </div>

                    {/* Icon */}
                    <div className="flex-shrink-0">
                      {index === 0 ? (
                        <Hammer className="w-5 h-5 text-[#00D4FF]/50" />
                      ) : index === TIMELINE_EVENTS.length - 1 ? (
                        <Briefcase className="w-5 h-5 text-[#00D4FF]/50" />
                      ) : (
                        <Calendar className="w-5 h-5 text-[#00D4FF]/50" />
                      )}
                    </div>
                  </div>

                  {/* Description (visible on hover) */}
                  <div className="mt-3 pl-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-white/50">
                      {event.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#00D4FF] rounded-full group-hover:h-12 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="font-mono-custom text-sm text-white/60 mb-4">
            {aboutConfig.ctaText}
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4FF] text-[#050508] font-display text-sm uppercase tracking-wider rounded-full hover:bg-[#00D4FF]/80 transition-colors"
          >
            <span>{aboutConfig.ctaButtonText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" />
    </section>
  );
};

export default About;
