import React from 'react';

export default function Logo({ className = '', isScrolled = false, isFooter = false }) {
  const textColor = isFooter ? 'text-white' : (isScrolled ? 'text-[#556B2F]' : 'text-white');
  const subTextColor = isFooter ? 'text-white/70' : (isScrolled ? 'text-gray-600' : 'text-white/80');
  const lineColor = isFooter ? 'bg-white/50' : (isScrolled ? 'bg-gray-400' : 'bg-white/50');
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative flex items-center justify-center flex-shrink-0 overflow-visible">
        <img 
          src="/Images/Heartland%20Circle%20New.png"
          alt="Heartland Ag Tech Logo"
          className="h-10 w-auto object-contain"
        />
      </div>
      
      {/* Text */}
      <div className="hidden sm:block">
        <p className={`font-bold tracking-wide ${textColor}`}>
          HEARTLAND
        </p>
        <div className="flex items-center gap-2">
          <div className={`h-px flex-1 ${lineColor}`}></div>
          <p className={`text-xs tracking-[0.2em] ${subTextColor}`}>
            AG TECH
          </p>
          <div className={`h-px flex-1 ${lineColor}`}></div>
        </div>
      </div>
    </div>
  );
}

