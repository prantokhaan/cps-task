"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "What is the duration of each course?",
      answer:
        "Our courses typically run for 8-12 weeks, with 2-3 live sessions per week. Each session is 2 hours long, supplemented with practice problems and weekly assignments.",
    },
    {
      question: "Do I need prior programming experience?",
      answer:
        "Basic programming knowledge is recommended. We offer beginner-friendly tracks for those new to competitive programming, but familiarity with at least one programming language (C++, Java, or Python) is required.",
    },
    {
      question: "How are the classes conducted?",
      answer:
        "Classes are conducted live online through our interactive platform. You'll get real-time coding practice, immediate doubt resolution, and recorded sessions for later review.",
    },
    {
      question: "What if I miss a live class?",
      answer:
        "All live classes are recorded and available within 2 hours after the session ends. You'll have lifetime access to the course recordings and materials.",
    },
    {
      question: "Is there any placement assistance?",
      answer:
        "Yes! We provide dedicated placement preparation including mock interviews, resume reviews, and referrals to our partner companies. Our alumni network helps with referrals to top tech companies.",
    },
    {
      question: "What makes your courses different from others?",
      answer:
        "Our trainers are active competitive programmers with real contest experience. We focus on problem-solving intuition rather than just solutions, and provide personalized feedback on your coding style and approach.",
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
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Got Questions?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              We've Got Answers
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about our courses, enrollment process,
            and learning experience.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-xl transition-all duration-300 hover:border-amber-500/30"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-amber-400 transition-transform duration-300 ${
                        openItems.has(index) ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`px-6 pb-5 transition-all duration-300 ${
                    openItems.has(index)
                      ? "block opacity-100 max-h-96"
                      : "hidden opacity-0 max-h-0"
                  }`}
                >
                  <div className="border-t border-slate-700/50 pt-4">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-400 mb-6">Still have questions?</p>
            <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-600 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:border-amber-500 hover:bg-amber-500/10 hover:transform hover:scale-105">
              Contact Support
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
