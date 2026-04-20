import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Denied() {
  useEffect(() => {
    document.title = 'Denied';
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Centered video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="relative z-0 w-auto h-auto max-w-full max-h-[50vh] mb-8 opacity-90"
        src="/videos/404-dance.mp4"
      />

      {/* Glowing text */}
      <h1
        className="relative z-10 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight text-center px-4 select-none"
        style={{
          textShadow:
            '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.4), 0 0 80px rgba(255,255,255,0.3)',
        }}
      >
        Nice Try
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-md text-center px-6">
        You must be lost, little fella. That is not allowed here.
      </p>

      {/* Return home */}
      <Link
        to="/"
        className="relative z-10 mt-8 inline-block px-8 py-3 border border-white/30 text-white rounded-sm backdrop-blur-sm bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
      >
        Return Home
      </Link>
    </main>
  );
}
