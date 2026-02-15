/**
 * Home hero background: animated gradient mesh + floating blobs.
 * GPU-friendly (transform/opacity only). No extra deps.
 * Palette: indigo → violet → fuchsia with cyan/teal accents.
 */
const COLORS = {
  indigo: "rgb(79 70 229)",
  violet: "rgb(124 58 237)",
  fuchsia: "rgb(192 38 211)",
  cyan: "rgb(34 211 238)",
  teal: "rgb(20 184 166)",
  rose: "rgb(251 113 133)",
}

export default function HomeBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Base gradient – animated shift */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background: `
            linear-gradient(135deg, #0f0f23 0%, #1e1b4b 25%, #312e81 45%, #4c1d95 65%, #701a75 85%, #0f0f23 100%)
          `,
          backgroundSize: "400% 400%",
          animation: `home-bg-gradient 18s ease infinite`,
        }}
      />

      {/* Secondary layer – richer gradient */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 20% 20%, ${COLORS.indigo}40 0%, transparent 50%),
            radial-gradient(ellipse 100% 100% at 80% 80%, ${COLORS.fuchsia}35 0%, transparent 50%),
            radial-gradient(ellipse 80% 120% at 50% 50%, ${COLORS.violet}25 0%, transparent 45%)
          `,
        }}
      />

      {/* Floating blobs – slow morph and move */}
      <div className="absolute inset-0">
        <div
          className="absolute -left-[20%] top-[10%] h-[70vmax] w-[70vmax] rounded-full opacity-40 blur-[80px]"
          style={{
            background: `radial-gradient(circle, ${COLORS.violet} 0%, ${COLORS.fuchsia}60 40%, transparent 70%)`,
            transform: "scale(1)",
            animation: `home-blob-1 22s ease-in-out infinite`,
          }}
        />
        <div
          className="absolute -right-[15%] top-[40%] h-[60vmax] w-[60vmax] rounded-full opacity-50 blur-[90px]"
          style={{
            background: `radial-gradient(circle, ${COLORS.cyan}50 0%, ${COLORS.teal}40 35%, transparent 65%)`,
            animation: `home-blob-2 26s ease-in-out infinite`,
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[30%] h-[55vmax] w-[55vmax] rounded-full opacity-35 blur-[70px]"
          style={{
            background: `radial-gradient(circle, ${COLORS.fuchsia}70 0%, ${COLORS.rose}50 40%, transparent 65%)`,
            animation: `home-blob-3 24s ease-in-out infinite`,
          }}
        />
        <div
          className="absolute right-[20%] top-[-15%] h-[45vmax] w-[45vmax] rounded-full opacity-30 blur-[60px]"
          style={{
            background: `radial-gradient(circle, ${COLORS.indigo} 0%, ${COLORS.violet}70 45%, transparent 65%)`,
            animation: `home-blob-4 20s ease-in-out infinite`,
          }}
        />
      </div>

      {/* Subtle noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Bottom vignette – keeps content readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, transparent 40%, rgba(15,15,35,0.4) 100%)",
        }}
      />

      <style>{`
        @keyframes home-bg-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes home-blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(8%, -10%) scale(1.08); }
          66% { transform: translate(-5%, 5%) scale(0.95); }
        }
        @keyframes home-blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-10%, 8%) scale(1.05); }
          66% { transform: translate(5%, -5%) scale(0.98); }
        }
        @keyframes home-blob-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-8%, -12%) scale(1.1); }
        }
        @keyframes home-blob-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(6%, 10%) scale(1.06); }
        }
      `}</style>
    </div>
  )
}
