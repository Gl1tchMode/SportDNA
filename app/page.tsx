import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071A35] text-white flex items-center justify-center relative overflow-hidden">
      <Navbar />

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl top-[-120px] left-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      {/* Hero Section */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-5">
          AI SPORTS ASSESSMENT PLATFORM
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-none">
          SPORT<span className="text-cyan-400">DNA</span>
        </h1>

        <p className="mt-6 text-xl text-slate-300">
          The Right Sport for Every Child
        </p>

        <p className="mt-3 text-slate-400 max-w-2xl mx-auto leading-7">
          Helping schools discover every child&apos;s natural sporting strengths
          through AI-powered physical assessments.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-cyan-300 transition">
            Enter Teacher Portal
          </button>

          <button className="border border-slate-600 px-8 py-4 rounded-xl font-semibold hover:border-cyan-400 hover:text-cyan-400 transition">
            Learn More
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">35</h3>
            <p className="text-slate-400 text-sm mt-1">Sports</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">8</h3>
            <p className="text-slate-400 text-sm mt-1">Physical Tests</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">AI</h3>
            <p className="text-slate-400 text-sm mt-1">Powered Analysis</p>
          </div>
        </div>
      </div>
    </main>
  );
}