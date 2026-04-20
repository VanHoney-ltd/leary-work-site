import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Unauthorized() {
  useEffect(() => {
    document.title = 'Unauthorized';
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <h1 className="relative z-10 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight text-center px-4">
        Who Are You?
      </h1>
      <p className="relative z-10 mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-md text-center px-6">
        Wrong credentials. Wrong vibe. Wrong everything.
      </p>
      <Link
        to="/"
        className="relative z-10 mt-8 inline-block px-8 py-3 border border-white/30 text-white rounded-sm backdrop-blur-sm bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
      >
        Return Home
      </Link>
    </main>
  );
}
