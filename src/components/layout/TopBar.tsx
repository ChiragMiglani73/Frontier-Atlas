"use client";

import React from "react";

export const TOPBAR_H = 52;

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white border-b border-[#e5e5e5] h-[52px]">
      <div className="flex items-center h-full px-4 lg:px-6 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-[#F97316]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span className="font-bold text-[22px] text-[#111111] tracking-tight">Frontier Atlas</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-auto">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="6.5" cy="6.5" r="5.5" />
              <line x1="10.5" y1="10.5" x2="14" y2="14" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search papers, authors, topics..."
              className="w-full pl-9 pr-16 py-2 bg-[#f9f9f9] border border-[#e5e5e5] rounded-lg text-sm text-[#111111] placeholder:text-[#888888] focus:outline-none focus:border-[#e5e5e5] transition-colors"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[11px] font-medium text-[#888888] bg-white border border-[#e5e5e5] rounded">
              <span className="text-[10px]">⌘</span>K
            </kbd>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#F97316] hover:bg-[#ea580c] text-white font-medium text-sm rounded-lg transition-colors">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="8" y1="11" x2="8" y2="2" />
              <polyline points="5,5 8,2 11,5" />
              <path d="M3 10v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3" />
            </svg>
            Submit
          </button>

          <div className="flex items-center gap-1.5 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-[#f9f9f9] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 text-[#555555]">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-[#888888]">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}