import React from 'react';

export default function Logo({ className = '', isScrolled = false, isFooter = false }) {
  const textColor = isFooter ? 'text-white' : (isScrolled ? 'text-[#556B2F]' : 'text-white');
  const subTextColor = isFooter ? 'text-white/70' : (isScrolled ? 'text-gray-600' : 'text-white/80');
  const lineColor = isFooter ? 'bg-white/50' : (isScrolled ? 'bg-gray-400' : 'bg-white/50');
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer dark olive green circle with nodes */}
          <path
            d="M 20 8 A 12 12 0 0 1 28 12"
            stroke="#556B2F"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 20 8 A 12 12 0 0 0 12 12"
            stroke="#556B2F"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Nodes at ends */}
          <circle cx="28" cy="12" r="2" fill="#556B2F" />
          <circle cx="12" cy="12" r="2" fill="#556B2F" />
          
          {/* Inner lime green arcs */}
          <path
            d="M 20 10 A 10 10 0 0 1 26 13"
            stroke="#9ACD32"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 20 10 A 10 10 0 0 0 14 13"
            stroke="#9ACD32"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Center leaf */}
          <path
            d="M 20 15 L 18 20 L 20 25 L 22 20 Z"
            fill="#9ACD32"
          />
          <path
            d="M 20 15 L 20 25"
            stroke="#7CB342"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 19 18 L 20 20 L 21 18"
            stroke="#7CB342"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 19 22 L 20 20 L 21 22"
            stroke="#7CB342"
            strokeWidth="1"
            fill="none"
          />
        </svg>
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

