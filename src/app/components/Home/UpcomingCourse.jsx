"use client";

import { useState } from "react";
import Link from "next/link";

export default function UpcomingCourses() {
  const [notifyEmail, setNotifyEmail] = useState("");
  const [showNotifyForm, setShowNotifyForm] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Advanced Algorithms & Data Structures",
      description:
        "Master complex algorithms and advanced data structures for competitive programming.",
      batch: "Batch 5",
      enrollmentStart: "2025-10-15",
      enrollmentEnd: "2025-11-15",
      status: "upcoming",
      seats: 50,
      currentEnrollment: 0,
      price: 2999,
      originalPrice: 3999,
      discount: 25
    },
    {
      id: 2,
      title: "Dynamic Programming Masterclass",
      description:
        "Complete guide to mastering DP patterns and solving complex optimization problems.",
      batch: "Batch 3",
      enrollmentStart: "2025-10-01",
      enrollmentEnd: "2025-10-31",
      status: "enrolling",
      seats: 40,
      currentEnrollment: 28,
      price: 1999,
      originalPrice: 2499,
      discount: 20
    },
    {
      id: 3,
      title: "Math & Geometry for Coders",
      description:
        "In-depth course on mathematical concepts and geometry techniques used in competitive programming.",
      batch: "Batch 1",
      enrollmentStart: "2025-11-01",
      enrollmentEnd: "2025-11-30",
      status: "upcoming",
      seats: 35,
      currentEnrollment: 0,
      price: 1499,
      originalPrice: 1999,
      discount: 25
    },
    {
      id: 4,
      title: "Competitive Programming Bootcamp",
      description:
        "Intensive training for ICPC, CodeJam, and other major coding competitions.",
      batch: "Batch 5",
      enrollmentStart: "2025-10-20",
      enrollmentEnd: "2025-11-20",
      status: "upcoming",
      seats: 60,
      currentEnrollment: 0,
      price: 2499,
      originalPrice: 3499,
      discount: 30
    },
  ];

  const handleNotifySubmit = async (courseId, courseTitle) => {
    if (!notifyEmail) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(
        `Notification requested for ${courseTitle} by ${notifyEmail}`
      );
      setSubmitted(true);
      setShowNotifyForm(null);
      setNotifyEmail("");

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting notification:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "enrolling":
        return (
          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
            🔥 Enrollment Open
          </span>
        );
      case "upcoming":
        return (
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">
            ⏰ Coming Soon
          </span>
        );
      default:
        return null;
    }
  };

  const getEnrollmentProgress = (course) => {
    if (course.status === "enrolling") {
      const progress = (course.currentEnrollment / course.seats) * 100;
      return (
        <div className="mt-3">
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>
              Enrolled: {course.currentEnrollment}/{course.seats}
            </span>
            <span>{Math.round(progress)}% filled</span>
          </div>
          <div className="w-full bg-slate-600 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      );
    }
    return null;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden pt-4">
      {/* Success Message */}
      {submitted && (
        <div className="fixed top-4 right-4 z-50 px-6 py-4 bg-green-500/20 border border-green-500/30 rounded-xl backdrop-blur-xl">
          <div className="flex items-center gap-2 text-green-400 font-semibold">
            <span>We'll notify you when enrollment opens!</span>
          </div>
        </div>
      )}

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-400 text-sm font-medium tracking-wide">
              UPCOMING BATCHES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Join Our Next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Coding Batches
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Limited seats available for our specialized competitive programming
            courses. Enroll early to secure your spot.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 shadow-2xl transition-all duration-300 hover:border-amber-500/30 hover:transform hover:scale-105"
            >
              {/* Batch Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-slate-700/50 text-amber-400 text-sm font-bold rounded-lg border border-amber-500/20">
                  {course.batch}
                </span>
                {getStatusBadge(course.status)}
              </div>

              {/* Course Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                {course.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Enrollment Period */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-slate-700/30 rounded-xl border border-slate-600/50">
                  <div className="text-xs text-slate-400 mb-1">Starts</div>
                  <div className="text-sm font-semibold text-white">
                    {formatDate(course.enrollmentStart)}
                  </div>
                </div>
                <div className="text-center p-3 bg-slate-700/30 rounded-xl border border-slate-600/50">
                  <div className="text-xs text-slate-400 mb-1">Ends</div>
                  <div className="text-sm font-semibold text-white">
                    {formatDate(course.enrollmentEnd)}
                  </div>
                </div>
              </div>

              {/* Enrollment Progress */}
              {getEnrollmentProgress(course)}

              {/* Course Price */}
              <div className="mt-4 p-3 bg-slate-700/30 rounded-xl border border-amber-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-slate-400 font-medium">
                      Price:
                    </span>
                    <div className="text-lg font-bold text-amber-400">
                      Tk {course.price}
                    </div>
                    {course.originalPrice && (
                      <div className="text-sm text-slate-400 line-through">
                        Tk {course.originalPrice}
                      </div>
                    )}
                  </div>
                  {course.discount && (
                    <div className="text-xs font-bold text-green-400 bg-green-500/20 px-2 py-1 rounded border border-green-500/30">
                      Save {course.discount}%
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                {course.status === "enrolling" ? (
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 border-2 border-amber-500">
                    Enroll Now - Limited Seats
                  </button>
                ) : showNotifyForm === course.id ? (
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={notifyEmail}
                      onChange={(e) => setNotifyEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700/50 border-2 border-amber-500/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors duration-300"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleNotifySubmit(course.id, course.title)
                        }
                        disabled={isSubmitting || !notifyEmail}
                        className="flex-1 px-4 py-3 bg-amber-500 text-slate-900 font-bold rounded-xl transition-all duration-300 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Submitting..." : "Notify Me"}
                      </button>
                      <button
                        onClick={() => setShowNotifyForm(null)}
                        className="px-4 py-3 bg-slate-700/50 text-slate-300 font-bold rounded-xl border-2 border-slate-600 transition-all duration-300 hover:border-slate-500 hover:text-white"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowNotifyForm(course.id)}
                    className="w-full px-6 py-3 bg-slate-700/50 text-slate-300 font-bold rounded-xl border-2 border-slate-600 transition-all duration-300 hover:border-amber-500 hover:text-amber-400"
                  >
                    Notify Me When Available
                  </button>
                )}
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">
            Can't find what you're looking for?
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-600 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:border-amber-500 hover:bg-amber-500/10 hover:transform hover:scale-105"
          >
            View All Courses
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
          </Link>
        </div>
      </div>
    </section>
  );
}
