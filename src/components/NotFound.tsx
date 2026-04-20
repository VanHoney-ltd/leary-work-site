import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Dead 404 End';
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

      {/* Return home */}
      <Link
        to="/"
        className="relative z-10 mt-4 inline-block px-8 py-3 border border-white/30 text-white rounded-sm backdrop-blur-sm bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
      >
        Return Home
      </Link>
    </main>
  );
}
