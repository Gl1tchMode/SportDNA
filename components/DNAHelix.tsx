export default function DNAHelix() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <svg viewBox="0 0 200 200" className="relative h-56 w-56 md:h-64 md:w-64">
        {/* Large Ring */}
        <circle
          cx="100"
          cy="100"
          r="82"
          fill="none"
          stroke="#22D3EE"
          strokeWidth="1.5"
          opacity="0.45"
        />

        {/* DNA */}
        <g stroke="#67E8F9" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M65 25 C135 45,65 70,135 100 S65 155,135 175" />
          <path d="M135 25 C65 45,135 70,65 100 S135 155,65 175" />

          <line x1="78" y1="35" x2="122" y2="35" />
          <line x1="72" y1="55" x2="128" y2="55" />
          <line x1="78" y1="75" x2="122" y2="75" />
          <line x1="72" y1="95" x2="128" y2="95" />
          <line x1="78" y1="115" x2="122" y2="115" />
          <line x1="72" y1="135" x2="128" y2="135" />
          <line x1="78" y1="155" x2="122" y2="155" />
        </g>
      </svg>
    </div>
  );
}