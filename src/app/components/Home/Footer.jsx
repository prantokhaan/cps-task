"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 border-t border-slate-700/50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg border-2 border-amber-400/20">
                  <span className="font-bold text-slate-900 text-lg">CPS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">
                    CPS Academy
                  </span>
                  <span className="text-xs text-amber-400 font-medium tracking-wide">
                    COMPETITIVE PROGRAMMING
                  </span>
                </div>
              </Link>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Master competitive programming with Bangladesh's top coders.
                Transform your problem-solving skills and accelerate your tech
                career.
              </p>
              {/* <div className="flex space-x-4">
                {[
                  { name: "Facebook", icon: "📘", url: "#" },
                  { name: "Codeforces", icon: "⚡", url: "#" },
                  { name: "GitHub", icon: "🐙", url: "#" },
                  { name: "LinkedIn", icon: "💼", url: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/10 transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "Courses", href: "/courses" },
                  { name: "Trainers", href: "/trainers" },
                  { name: "Contests", href: "/contests" },
                  { name: "Practice", href: "/practice" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <svg
                        className="w-3 h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Courses</h3>
              <ul className="space-y-3">
                {[
                  { name: "Advanced Algorithms", href: "/courses/algorithms" },
                  { name: "Dynamic Programming", href: "/courses/dp" },
                  { name: "Graph Theory", href: "/courses/graph" },
                  { name: "Math for CP", href: "/courses/math" },
                  { name: "Data Structures", href: "/courses/ds" },
                ].map((course) => (
                  <li key={course.name}>
                    <Link
                      href={course.href}
                      className="text-slate-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <svg
                        className="w-3 h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {course.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 text-amber-400 mt-1">📧</div>
                  <div>
                    <div className="text-slate-400 text-sm">Email</div>
                    <a
                      href="mailto:hello@cpsacademy.com"
                      className="text-white hover:text-amber-400 transition-colors duration-300"
                    >
                      hello@cpsacademy.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 text-amber-400 mt-1">📱</div>
                  <div>
                    <div className="text-slate-400 text-sm">Phone</div>
                    <a
                      href="tel:+880123456789"
                      className="text-white hover:text-amber-400 transition-colors duration-300"
                    >
                      +880 1234 56789
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 text-amber-400 mt-1">📍</div>
                  <div>
                    <div className="text-slate-400 text-sm">Address</div>
                    <div className="text-white">Dhaka, Bangladesh</div>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-3">
                  Stay Updated
                </h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white text-sm placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors duration-300"
                  />
                  <button className="px-4 py-2 bg-amber-500 text-slate-900 text-sm font-bold rounded-xl hover:bg-amber-400 transition-colors duration-300 transform hover:scale-105">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © {currentYear} CPS Academy. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Refund Policy", href: "/refund" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-amber-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
