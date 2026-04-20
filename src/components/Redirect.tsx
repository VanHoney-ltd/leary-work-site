import { useEffect } from 'react';

export default function Redirect() {
  useEffect(() => {
    document.title = '302 Found';
  }, []);

  return (
    <main className="w-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-auto h-auto max-w-full max-h-[80vh]"
          src="/videos/302-redirect.mp4"
        />

        {/* Location link overlay */}
        <a
          href="https://surprise.leary.work"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-[15%] left-[24%] z-10 text-white text-sm sm:text-base md:text-lg font-mono underline decoration-white/50 underline-offset-4 hover:text-yellow-300 hover:decoration-yellow-300 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
        >
          https://surprise.leary.work
        </a>
      </div>
    </main>
  );
}
