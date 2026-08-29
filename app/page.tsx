
"use client";

import Link from "next/link";
import { useState } from "react";
import DNAHelix from "../components/DNAHelix";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <main
      className={`min-h-screen transition-all duration-500 ${
        dark
          ? "bg-[#06172B] text-white"
          : "bg-[#F7FAFC] text-[#071A35]"
      }`}
    >
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />
      </div>

      <header className="flex justify-center pt-6 px-4">
        <nav
          className={`w-full max-w-6xl rounded-2xl border backdrop-blur-xl px-6 py-4 flex items-center justify-between ${
            dark
              ? "bg-white/5 border-white/10"
              : "bg-white/70 border-slate-200"
          }`}
        >
          <h1 className="text-xl font-black">
            SPORT<span className="text-cyan-400">DNA</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a className="text-cyan-400" href="#">
              Home
            </a>
            <a href="#">Schools</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <button
            onClick={() => setDark(!dark)}
            className={`relative h-8 w-14 rounded-full transition ${
              dark ? "bg-slate-700" : "bg-slate-300"
            }`}
          >
            <div
              className={`absolute top-1 h-6 w-6 rounded-full bg-cyan-400 transition-all ${
                dark ? "left-7" : "left-1"
              }`}
            />
          </button>
        </nav>
      </header>

      <section className="min-h-[calc(100vh-96px)] flex flex-col items-center justify-center text-center px-6">
        <div className="animate-[float_6s_ease-in-out_infinite]">
          <DNAHelix />
        </div>

        <h1 className="mt-6 text-5xl md:text-7xl font-black">
          SPORT<span className="text-cyan-400">DNA</span>
        </h1>

        <p className="mt-3 text-xs tracking-[0.35em] uppercase text-cyan-400">
          THE RIGHT SPORT FOR EVERY CHILD
        </p>

        <p
          className={`mt-6 max-w-2xl text-lg leading-8 ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Helping schools discover every child's natural sporting strengths
          through AI-powered physical assessments.
        </p>

        <Link
          href="/teacher"
          className="mt-8 rounded-xl bg-cyan-400 px-8 py-4 font-bold text-slate-900 shadow-[0_0_35px_rgba(34,211,238,0.45)] hover:scale-105 transition-all duration-300"
        >
          Enter Teacher Portal
        </Link>

        <div className="mt-16 opacity-70">
          <div className="h-10 w-6 rounded-full border border-cyan-400 flex justify-center mx-auto">
            <div className="mt-2 h-2 w-1 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </div>
      </section>

      <HowItWorks />

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </main>
  );
}