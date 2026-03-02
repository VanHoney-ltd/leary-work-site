import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, TrendingUp, Users, ArrowRight, Check } from 'lucide-react';
import { novasignalConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const NovaSignal = () => {
  if (!novasignalConfig.sectionTitle) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => setIsVisible(true),
    });
    return () => st.kill();
  }, []);

  // Video carousel loop
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % novasignalConfig.videos.length);
        setIsTransitioning(false);
      }, 500);
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentVideoIndex]);

  useEffect(() => {
    if (!isVisible) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-item',
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [isVisible]);

  return (
    <section
      id="novasignal"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#0A0A0F] py-20 overflow-hidden"
    >
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#0A0A0F] to-[#0A0A0F]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={novasignalConfig.logoImage}
              alt="NovaSignal Logo"
              className="w-16 h-16 rounded-xl"
            />
            <div>
              <p className="font-mono-custom text-xs text-[#a855f7]/60 uppercase tracking-wider mb-1">
                {novasignalConfig.sectionLabel}
              </p>
              <h2 className="font-display text-5xl md:text-7xl text-white">
                {novasignalConfig.sectionTitle}
              </h2>
            </div>
          </div>
          <p className="text-lg text-white/60 max-w-2xl">
            {novasignalConfig.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mb-16 max-w-md">
          <div className="text-center p-6 bg-[#1F1F1F]/30 rounded-xl border border-[#a855f7]/20">
            <p className="font-display text-4xl text-[#a855f7]">{novasignalConfig.stats.businessesLaunched}</p>
            <p className="font-mono-custom text-xs text-white/50 uppercase tracking-wider mt-2">Businesses</p>
          </div>
          <div className="text-center p-6 bg-[#1F1F1F]/30 rounded-xl border border-[#a855f7]/20">
            <p className="font-display text-4xl text-[#a855f7]">{novasignalConfig.stats.successRate}</p>
            <p className="font-mono-custom text-xs text-white/50 uppercase tracking-wider mt-2">Success Rate</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Services */}
          <div>
            <h3 className="font-display text-xl text-white mb-6 flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-[#a855f7]" />
              Services
            </h3>
            <div className="space-y-3">
              {novasignalConfig.services.map((service, index) => (
                <div
                  key={index}
                  className="service-item flex items-center gap-3 p-4 bg-[#1F1F1F]/30 rounded-xl border border-[#a855f7]/10"
                >
                  <Check className="w-5 h-5 text-[#a855f7]" />
                  <span className="text-white/80">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Project */}
          <div>
            <h3 className="font-display text-xl text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-[#a855f7]" />
              Featured Project
            </h3>
            <div className="relative rounded-2xl overflow-hidden bg-[#1F1F1F]/30 border border-[#a855f7]/20">
              <img
                src={novasignalConfig.featuredProject.image}
                alt={novasignalConfig.featuredProject.name}
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono-custom text-xs text-[#a855f7]/60 uppercase tracking-wider mb-1">
                  {novasignalConfig.featuredProject.name}
                </p>
                <p className="text-sm text-white/60">
                  {novasignalConfig.featuredProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Carousel */}
        <div className="mb-16">
          <h3 className="font-display text-xl text-white mb-6 flex items-center gap-3">
            <Users className="w-5 h-5 text-[#a855f7]" />
            Glover Legacy Collection
          </h3>
          <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden bg-[#1F1F1F]/50 border border-[#a855f7]/20">
            <video
              ref={videoRef}
              src={novasignalConfig.videos[currentVideoIndex]}
              className={`w-full h-full object-cover transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
              autoPlay
              muted
              playsInline
            />
            
            {/* Video Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {novasignalConfig.videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentVideoIndex(index);
                      setIsTransitioning(false);
                    }, 500);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentVideoIndex
                      ? 'w-8 bg-[#a855f7]'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-mono-custom text-sm text-white/60 mb-4">
            {novasignalConfig.ctaText}
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#a855f7] text-white font-display text-sm uppercase tracking-wider rounded-full hover:bg-[#a855f7]/80 transition-colors">
            <Briefcase className="w-4 h-4" />
            <span>{novasignalConfig.ctaButtonText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/20 to-transparent" />
    </section>
  );
};

export default NovaSignal;
