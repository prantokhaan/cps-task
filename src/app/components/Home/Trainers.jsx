"use client";

import Link from "next/link";

export default function TrainersSection() {
  const trainers = [
    {
      id: 1,
      name: "Rakib Joy",
      codeforcesHandle: "RakibJoy",
      codeforcesRating: 2136,
      rank: "Master",
      currentCompany: "Inverse AI",
      role: "Software Engineer",
      achievement: "ICPC Asia West Finalist, 2025",
      specialization: ["Algorithms", "Data Structures", "DP"],
      yearsExperience: 2,
    },
    {
      id: 2,
      name: "Sayeef Mahmud",
      codeforcesHandle: "thisIsMorningStar",
      codeforcesRating: 2183,
      rank: "Master",
      currentCompany: "Cefalo",
      role: "Software Engineer",
      achievement: "ICPC World Finalist, 2022",
      specialization: ["Graph Theory", "Math", "Advanced DS"],
      yearsExperience: 5,
    },
    {
      id: 3,
      name: "Nafiul Islam",
      codeforcesHandle: "Ami_Nafi",
      codeforcesRating: 2034,
      rank: "Candidate Master",
      currentCompany: "N/A",
      role: "N/A",
      achievement: "5th in ICPC Preliminary, 2022",
      specialization: ["Greedy", "Number Theory", "Implementation"],
      yearsExperience: 3,
    },
    {
      id: 4,
      name: "Adnan Zawad Toky",
      codeforcesHandle: "adnan_toky",
      codeforcesRating: 2269,
      rank: "Master",
      currentCompany: "Cefalo",
      role: "Software Engineer",
      achievement: "ICPC World Finalist, 2022",
      specialization: ["Combinatorics", "Geometry", "Game Theory"],
      yearsExperience: 4,
    },
  ];

  const getRatingColor = (rating) => {
    if (rating >= 2100 && rating <= 2299) return "text-orange-400";
    if (rating >= 1900 && rating <= 2099) return "text-violet-500";
    return "text-gray-500";
  };

  const getRankBadge = (rank) => {
    const rankColors = {
      Master: "from-orange-400 to-orange-300",
      "Candidate Master": "from-violet-500 to-violet-400",
    };

    return rankColors[rank] || "from-gray-500 to-gray-600";
  };


  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-400 text-sm font-medium tracking-wide">
              MEET OUR TRAINERS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Learn from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Bangladeshi Masters
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get trained by top competitive programmers from Bangladesh. Learn
            from their extensive contest experience and industry knowledge.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group relative bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 shadow-2xl transition-all duration-300 hover:border-amber-500/30 hover:transform hover:scale-105"
            >
              {/* Trainer Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300 mb-1">
                    {trainer.name}
                  </h3>
                  <div
                    className={`text-xs px-3 py-1 bg-gradient-to-r ${getRankBadge(
                      trainer.rank
                    )} text-white rounded-full font-bold inline-block`}
                  >
                    {trainer.rank}
                  </div>
                </div>

                {/* Codeforces Rating */}
                <div className="text-right">
                  <div
                    className={`text-lg font-bold ${getRatingColor(
                      trainer.codeforcesRating
                    )}`}
                  >
                    {trainer.codeforcesRating}
                  </div>
                  <div className="text-slate-400 text-sm">Rating</div>
                </div>
              </div>

              {/* Codeforces Handle */}
              <div className="mb-4 p-3 bg-slate-700/30 rounded-xl border border-slate-600/50">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Codeforces:</span>
                  <a
                    href={`https://codeforces.com/profile/${trainer.codeforcesHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 font-mono font-bold hover:text-amber-300 transition-colors duration-300"
                  >
                    {trainer.codeforcesHandle}
                  </a>
                </div>
              </div>

              {/* Current Company & Role */}
              <div className="mb-4">
                <div className="p-3 bg-slate-700/30 rounded-xl border border-slate-600/50">
                  <div className="text-slate-400 text-sm mb-1">
                    Current Role
                  </div>
                  <div className="text-white font-semibold">
                    {trainer.role} • {trainer.currentCompany}
                  </div>
                </div>
              </div>

              {/* Achievement */}
              <div className="mb-4">
                <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                  <div className="text-amber-400 text-sm mb-1">
                    Notable Achievement
                  </div>
                  <div className="text-white font-medium text-sm">
                    {trainer.achievement}
                  </div>
                </div>
              </div>

              {/* Specialization */}
              <div className="mb-6">
                <h4 className="text-slate-400 text-sm mb-3">Specialization</h4>
                <div className="flex flex-wrap gap-2">
                  {trainer.specialization.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs font-medium rounded-full border border-slate-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
}
