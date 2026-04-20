import { useEffect, useState } from 'react';

export default function ServerError() {
  const [showBsod, setShowBsod] = useState(false);

  useEffect(() => {
    document.title = 'System Meltdown';
    const timer = setTimeout(() => {
      setShowBsod(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showBsod) {
    return (
      <main className="fixed inset-0 bg-[#0078d7] text-white font-mono text-lg sm:text-xl md:text-2xl p-8 sm:p-12 md:p-16 overflow-hidden select-none cursor-none">
        <div className="max-w-4xl">
          <p className="text-4xl sm:text-6xl md:text-7xl mb-6">:(</p>
          <p className="mb-8">
            Your device ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.
          </p>
          <p className="mb-4">
            <span className="inline-block w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mr-4 align-middle" />
            <span className="align-middle">0% complete</span>
          </p>
          <div className="mt-12 text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
            <p className="mb-2">
              If you'd like to know more, you can search online later for this error:
            </p>
            <p>STOP_CODE: SYSTEM_BREACH_DETECTED</p>
            <p>WHAT_FAILED: UNAUTHORIZED_ACCESS.sys</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
        Error 500
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
        You have entered a secured area without proper authorization. All of your photos from your device have been posted to your social media accounts. You can download your receipt from the link below. Have a great day and thank you for shopping with us.
      </p>
      <a
        href="/"
        className="inline-block px-8 py-3 border border-white/30 text-white rounded-sm backdrop-blur-sm bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
      >
        Download Receipt
      </a>
    </main>
  );
}
