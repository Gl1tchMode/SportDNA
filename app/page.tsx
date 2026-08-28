export default function Home() {
  return (
    <main className="min-h-screen bg-[#071A35] text-white flex items-center justify-center">
      <div className="text-center px-6">
        <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm mb-4">
          AI SPORTS ASSESSMENT PLATFORM
        </p>

        <h1 className="text-6xl md:text-8xl font-black">
          SPORT<span className="text-cyan-400">DNA</span>
        </h1>

        <p className="mt-6 text-xl text-slate-300">
          The Right Sport for Every Child
        </p>

        <button className="mt-10 rounded-xl bg-cyan-400 px-8 py-4 font-bold text-slate-900 hover:bg-cyan-300 transition">
          Enter Teacher Portal
        </button>
      </div>
    </main>
  );
}