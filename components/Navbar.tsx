export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-black">
          SPORT<span className="text-cyan-400">DNA</span>
        </h1>

        <div className="hidden items-center gap-8 text-slate-300 md:flex">
          <a className="hover:text-cyan-400" href="#">Home</a>
          <a className="hover:text-cyan-400" href="#">Schools</a>
          <a className="hover:text-cyan-400" href="#">About</a>
          <a className="hover:text-cyan-400" href="#">Contact</a>
        </div>

        <button className="rounded-lg border border-cyan-400 px-5 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-900">
          Teacher Login
        </button>
      </div>
    </nav>
  );
}