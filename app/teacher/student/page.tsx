"use client";

import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default function StudentPage() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "Student";
  const id = searchParams.get("id") || "SD000000";

  return (
    <main className="min-h-screen bg-[#06172B] text-white p-8">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => history.back()}
          className="text-cyan-400 mb-6"
        >
          ← Back
        </button>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-6">
          <div className="flex items-center gap-5">
            <div className="w-24 h-24 rounded-full bg-cyan-400/20 flex items-center justify-center text-4xl font-bold text-cyan-300">
              {name.charAt(0)}
            </div>

            <div>
              <h1 className="text-4xl font-black">{name}</h1>
              <p className="text-cyan-400 mt-1">{id}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-6">
          {["Profile", "Health", "Helix", "History"].map((tab) => (
            <div
              key={tab}
              className="bg-white/5 border border-white/10 rounded-xl py-3 text-center font-semibold"
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-5">Profile</h2>

          <div className="grid grid-cols-2 gap-5">
            <Info label="Student Name" value={name} />
            <Info label="SportDNA ID" value={id} />
            <Info label="Admission No." value="—" />
            <Info label="Gender" value="—" />
            <Info label="Date of Birth" value="—" />
            <Info label="Blood Group" value="—" />
            <Info label="Parent Name" value="—" />
            <Info label="Parent Phone" value="—" />
          </div>
        </div>
      </div>
    </main>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-[#0B2548] rounded-xl p-4 border border-white/10">
      <p className="text-slate-400 text-sm">{label}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}