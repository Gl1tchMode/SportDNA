export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-black text-white">
          SPORT<span className="text-cyan-400">DNA</span>
        </h1>

        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#" className="hover:text-cyan-400 transition">Home</a>
          <a href="#" className="hover:text-cyan-400 transition">Schools</a>
          <a href="#" className="hover:text-cyan-400 transition">About</a>
          <a href="#" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        <button className="rounded-lg border border-cyan-400 px-4 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition">
          Teacher Login
        </button>
      </div>
    </nav>
  );
}