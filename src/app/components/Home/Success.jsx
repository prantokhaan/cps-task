"use client";

export default function StudentSuccessSection() {
  const stats = [
    {
      rank: "Expert",
      count: 4,
      color: "from-blue-500 to-blue-400",
      textColor: "text-blue-400",
      description: "Advanced problem solvers",
    },
    {
      rank: "Specialist",
      count: 29,
      color: "from-cyan-500 to-cyan-400",
      textColor: "text-cyan-400",
      description: "Strong algorithmic thinkers",
    },
    {
      rank: "Pupil",
      count: 106,
      color: "from-green-500 to-green-400",
      textColor: "text-green-400",
      description: "Rising coding stars",
    },
    {
      rank: "Big Tech Placements",
      count: 40,
      color: "from-amber-500 to-amber-400",
      textColor: "text-amber-400",
      description: "Placed in top companies",
    },
  ];

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
              STUDENT SUCCESS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Transforming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Coders' Careers
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Our students have achieved remarkable success in competitive
            programming and secured positions at top tech companies worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.rank}
              className="group relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 shadow-xl transition-all duration-300 hover:transform hover:scale-105 hover:border-amber-500/30"
            >
              <div className="text-center">
                <div
                  className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.count}
                </div>
                <div className={`text-lg font-semibold ${stat.textColor} mb-1`}>
                  {stat.rank}
                </div>
                <div className="text-slate-400 text-sm">{stat.description}</div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
