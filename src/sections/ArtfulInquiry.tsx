import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, ExternalLink, Palette } from 'lucide-react';
import { artfulInquiryConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const ArtfulInquiry = () => {
  if (!artfulInquiryConfig.sectionTitle) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

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
        '.artwork-card',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [isVisible]);

  const handlePlayVideo = () => {
    setShowVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
      setIsPlaying(true);
    }, 100);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowVideo(false);
    // Redirect to gallery
    window.location.href = artfulInquiryConfig.galleryLink;
  };

  return (
    <section
      id="artful-inquiry"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050508] py-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="font-mono-custom text-xs text-[#FF006E]/60 uppercase tracking-wider mb-2">
            {artfulInquiryConfig.sectionLabel}
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-6">
            {artfulInquiryConfig.sectionTitle}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {artfulInquiryConfig.description}
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-20">
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-[#1F1F1F]/50 border border-[#FF006E]/20">
            {!showVideo ? (
              <>
                {/* Thumbnail */}
                <img
                  src={artfulInquiryConfig.videoThumbnail}
                  alt="Artful Inquiry Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
                
                {/* Play Button */}
                <button
                  onClick={handlePlayVideo}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#FF006E] flex items-center justify-center hover:bg-[#FF006E]/80 transition-all hover:scale-110"
                >
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </button>

                {/* Artist Name Overlay */}
                <div className="absolute bottom-6 left-6">
                  <p className="font-mono-custom text-xs text-[#FF006E]/60 uppercase tracking-wider mb-1">
                    Artist
                  </p>
                  <p className="font-display text-2xl text-white">
                    {artfulInquiryConfig.artistName}
                  </p>
                </div>
              </>
            ) : (
              <video
                ref={videoRef}
                src={artfulInquiryConfig.videoSrc}
                className="w-full h-full object-cover"
                onEnded={handleVideoEnd}
                controls={false}
                autoPlay
              />
            )}
          </div>

          {/* Video CTA */}
          {!showVideo && (
            <div className="text-center mt-8">
              <p className="font-mono-custom text-sm text-white/60 mb-4">
                {artfulInquiryConfig.ctaText}
              </p>
              <button
                onClick={handlePlayVideo}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF006E] text-white font-display text-sm uppercase tracking-wider rounded-full hover:bg-[#FF006E]/80 transition-colors"
              >
                <Play className="w-4 h-4" />
                <span>{artfulInquiryConfig.ctaButtonText}</span>
              </button>
            </div>
          )}
        </div>

        {/* Featured Artworks */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-2xl text-white flex items-center gap-3">
              <Palette className="w-6 h-6 text-[#FF006E]" />
              Featured Works
            </h3>
            <a
              href={artfulInquiryConfig.galleryLink}
              className="inline-flex items-center gap-2 text-[#FF006E] hover:text-[#FF006E]/80 transition-colors"
            >
              <span className="font-mono-custom text-sm">View Gallery</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {artfulInquiryConfig.artworks.map((artwork) => (
              <a
                key={artwork.id}
                href={artfulInquiryConfig.galleryLink}
                className="artwork-card group relative aspect-square rounded-xl overflow-hidden bg-[#1F1F1F]/30 border border-[#FF006E]/10 cursor-pointer"
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="font-display text-sm text-white truncate">{artwork.title}</p>
                  <p className="font-mono-custom text-xs text-[#FF006E]/60">{artwork.year}</p>
                </div>

                <div className="absolute inset-0 border-2 border-[#FF006E] opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF006E]/20 to-transparent" />
    </section>
  );
};

export default ArtfulInquiry;
