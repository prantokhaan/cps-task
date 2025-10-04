"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl py-2 border-b border-slate-700/50"
          : "bg-slate-900 py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 border-2 border-amber-400/20">
                <span className="font-bold text-slate-900 text-lg">CPS</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight">
                Academy
              </span>
              <span className="text-xs text-amber-400 font-medium tracking-wide">
                PREMIUM EDUCATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <div
              className={`flex items-center space-x-1 mr-8 px-4 py-2 rounded-2xl transition-all duration-300 ${
                isScrolled
                  ? "bg-slate-800/80 backdrop-blur-sm border border-slate-700/50"
                  : "bg-slate-800/50 backdrop-blur-sm border border-slate-700/30"
              }`}
            >
              {[
                { href: "/", label: "Home" },
                { href: "/courses", label: "Courses" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-xl font-medium transition-all duration-300 relative group text-slate-200 hover:text-white"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-amber-500" />
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <Link
                href="/login"
                className="px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border-2 border-amber-500/50 text-amber-500 hover:bg-amber-500/10 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2.5 bg-amber-500 text-slate-900 rounded-xl font-semibold shadow-lg border-2 border-amber-500 transform hover:scale-105 transition-all duration-300 hover:bg-amber-400 hover:shadow-amber-400/25 hover:border-amber-400"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled
                ? "hover:bg-slate-800 text-slate-200"
                : "hover:bg-slate-800 text-slate-200"
            }`}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`lg:hidden mt-4 rounded-2xl p-6 backdrop-blur-xl border transition-all duration-500 bg-slate-800/95 border-slate-700/50 shadow-2xl`}
          >
            <div className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/courses", label: "Courses" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl font-medium transition-all duration-300 text-slate-200 hover:bg-slate-700/50 hover:text-white border border-transparent hover:border-slate-600/50"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 space-y-3 border-t border-slate-700/50">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-center rounded-xl font-semibold transition-all duration-300 border-2 border-amber-500/50 text-amber-500 hover:bg-amber-500/10 hover:border-amber-500"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-center bg-amber-500 text-slate-900 rounded-xl font-semibold border-2 border-amber-500 transform hover:scale-105 transition-all duration-300 hover:bg-amber-400 hover:border-amber-400"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
