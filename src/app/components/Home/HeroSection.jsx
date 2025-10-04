"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden mt-8 pb-8">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8 transform transition-transform hover:scale-105">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-amber-400 text-sm font-medium tracking-wide">
                MASTER COMPETITIVE PROGRAMMING
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Dominate Coding{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Competitions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Join elite coders mastering algorithms, data structures, and
              problem-solving. ICPC, Google Code Jam, and top coding interviews
              with expert guidance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/courses"
                className="group relative px-8 py-4 bg-amber-500 text-slate-900 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 border-2 border-amber-500"
              >
                <span className="relative z-10">Start Coding Now</span>
                <div className="absolute inset-0 bg-amber-400 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
              </Link>

              <Link
                href="/courses"
                className="group px-8 py-4 border-2 border-slate-600 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:border-amber-500 hover:bg-amber-500/10"
              >
                <span className="flex items-center justify-center gap-2">
                  View Courses
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-700/50">
              {[
                { number: "5K+", label: "Active Coders" },
                { number: "500+", label: "Problems Solved" },
                { number: "100+", label: "Contest Wins" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center lg:text-left transform transition-transform hover:scale-105"
                >
                  <div className="text-2xl font-bold text-amber-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 shadow-2xl transform transition-transform hover:scale-105">
              {/* Coding Progress Cards */}
              <div className="space-y-6">
                {[
                  {
                    title: "Advanced Algorithms & Data Structures",
                    progress: 75,
                    color: "bg-amber-500",
                  },
                  {
                    title: "Dynamic Programming Masterclass",
                    progress: 60,
                    color: "bg-blue-500",
                  },
                  {
                    title: "Competitive Programming Bootcamp",
                    progress: 85,
                    color: "bg-emerald-500",
                  },
                ].map((course) => (
                  <div
                    key={course.title}
                    className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/50 hover:border-amber-500/30 transition-all duration-300 group transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-semibold text-lg group-hover:text-amber-400 transition-colors duration-300">
                        {course.title}
                      </h3>
                      <div className="text-amber-400 text-sm font-bold">
                        {course.progress}%
                      </div>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${course.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-amber-500 text-slate-900 px-4 py-2 rounded-xl font-bold shadow-lg border-2 border-amber-400 transform transition-transform hover:scale-110">
                🏆 ICPC Ready
              </div>

              <div className="absolute -bottom-4 -left-4 bg-slate-800 text-amber-400 px-4 py-2 rounded-xl font-bold shadow-lg border-2 border-amber-500/30 transform transition-transform hover:scale-110">
                ⚡ Live Ranking
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 rounded-3xl blur-xl" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-amber-500 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
