import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      id="preloader"
      className={`fixed inset-0 bg-[#FAF8FF] flex items-center justify-center z-[99999] transition-opacity duration-500 ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden="true"
    >
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div
          className="absolute w-16 h-16 border-4 border-[#E8DFF5] border-t-[#7952B3] rounded-full animate-spin"
          style={{ animationDuration: '0.8s' }}
        ></div>
        <span className="text-base font-bold text-[#7952B3] tracking-wider select-none">
          US
        </span>
      </div>
    </div>
  );
};

export default Preloader;

