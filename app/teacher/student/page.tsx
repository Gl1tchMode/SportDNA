"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function StudentProfile() {
  const params = useSearchParams();

  const name = params.get("name") || "Unknown Student";
  const id = params.get("id") || "SD00000";
  const grade = params.get("grade") || "1";
  const section = params.get("section") || "A";

  const tests = [
    "20m Sprint",
    "Agility Run",
    "Standing Broad Jump",
    "Vertical Jump",
    "Medicine Ball Throw",
    "Balance",
    "Endurance Run",
    "Reaction Test",
  ];

  return (
    <main className="min-h-screen bg-[#06172B] text-white p-8">
      <Link
        href="/teacher"
        className="text-cyan-400 hover:text-cyan-300"
      >
        ← Back
      </Link>

      <div className="flex items-center gap-6 mt-8">
        <div className="h-24 w-24 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center text-4xl font-bold">
          {name.charAt(0)}
        </div>

        <div>
          <h1 className="text-4xl font-black">{name}</h1>
          <p className="text-cyan-400 mt-1">{id}</p>
          <p className="text-slate-400 mt-2">
            Grade {grade}-{section} • 2026-27
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-5 mt-10">
        <Card title="Age" value="Not Added" />
        <Card title="Gender" value="Not Added" />
        <Card title="Height" value="Not Added" />
        <Card title="Weight" value="Not Added" />
      </div>

      <div className="mt-10 rounded-3xl bg-white/5 border border-white/10 p-6">
        <h2 className="text-2xl font-bold mb-6">
          Helix Assessment
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {tests.map((test) => (
            <div
              key={test}
              className="rounded-2xl bg-white/5 border border-white/10 p-4"
            >
              <h3 className="font-semibold">{test}</h3>
              <p className="text-slate-400 text-sm mt-2">
                Not completed
              </p>
            </div>
          ))}
        </div>

        <button className="mt-6 bg-cyan-400 text-[#06172B] rounded-xl px-6 py-3 font-bold">
          Start Assessment
        </button>
      </div>

      <div className="mt-8 rounded-3xl bg-white/5 border border-white/10 p-6">
        <h2 className="text-2xl font-bold mb-4">
          Progress History
        </h2>

        <div className="text-center py-10 text-slate-400">
          No assessments recorded yet.
        </div>
      </div>
    </main>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
      <p className="text-slate-400 text-sm">{title}</p>
      <h3 className="text-xl font-bold mt-2">{value}</h3>
    </div>
  );
}