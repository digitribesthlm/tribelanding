import { useMemo } from 'react';
import Head from 'next/head';

function particles(count, cx, cy) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
    const velocity = 80 + Math.random() * 200;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity - 40;
    const drift = (Math.random() - 0.5) * 60;
    const hue = 30 + Math.random() * 35;
    const size = 2 + Math.random() * 3;
    const dur = 1.4 + Math.random() * 1.2;
    const delay = Math.random() * 0.15;

    return { i, tx, ty, drift, hue, size, dur, delay, cx, cy };
  });
}

export default function Surprise() {
  const bursts = useMemo(() => [
    particles(50, 25, 20),
    particles(50, 75, 18),
    particles(44, 50, 75),
    particles(44, 20, 72),
    particles(38, 82, 55),
    particles(38, 15, 48),
  ], []);

  return (
    <>
      <Head>
        <title>✨</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="fixed inset-0 bg-black flex items-center justify-center p-4 overflow-hidden">
        {/* Image */}
        <img
          src="/brochure_final_edit.png"
          alt=""
          className="max-w-full max-h-full object-contain relative"
          style={{ zIndex: 20, animation: 'reveal 4.5s ease-out forwards' }}
        />

        {/* Particle layer */}
        <div className="absolute inset-0" style={{ zIndex: 10 }}>
          {bursts.map((group, gi) =>
            group.map((p) => (
              <i
                key={`${gi}-${p.i}`}
                className="particle"
                style={{
                  left: `${p.cx}%`,
                  top: `${p.cy}%`,
                  '--tx': `${p.tx}px`,
                  '--ty': `${p.ty}px`,
                  '--drift': `${p.drift}px`,
                  '--hue': p.hue,
                  '--size': `${p.size}px`,
                  animationDuration: `${p.dur}s`,
                  animationDelay: `${0.3 + gi * 0.55 + p.delay}s`,
                }}
              />
            ))
          )}
        </div>

        <style jsx>{`
          /* ── Image reveal with glow pulse ── */
          @keyframes reveal {
            0%   { opacity: 0; transform: scale(0.9); filter: blur(12px) brightness(0.5); }
            20%  { opacity: 0; transform: scale(0.9); filter: blur(12px) brightness(0.5); }
            45%  { opacity: 0.2; filter: blur(6px) brightness(0.7); }
            70%  { opacity: 0.6; filter: blur(2px) brightness(0.9); }
            85%  { opacity: 1; filter: blur(0); transform: scale(1); }
            90%  { filter: brightness(1.3); }
            100% { opacity: 1; transform: scale(1); filter: blur(0) brightness(1); }
          }

          /* ── Particle ── */
          .particle {
            position: absolute;
            width: var(--size);
            height: var(--size);
            border-radius: 50%;
            background: hsl(var(--hue), 100%, 65%);
            box-shadow: 0 0 calc(var(--size) * 2) hsl(var(--hue), 100%, 60%),
                        0 0 calc(var(--size) * 4) hsl(var(--hue), 90%, 50%);
            opacity: 0;
            pointer-events: none;
            animation-name: shoot;
            animation-timing-function: cubic-bezier(0, 0.7, 0.3, 1);
            animation-fill-mode: forwards;
          }

          @keyframes shoot {
            0%   { opacity: 0; transform: translate(0, 0) scale(0); }
            8%   { opacity: 1; transform: translate(0, 0) scale(1.3); }
            35%  { opacity: 1; transform: translate(calc(var(--tx) * 0.5), calc(var(--ty) * 0.35)) scale(1); }
            60%  { opacity: 0.8; transform: translate(var(--tx), var(--ty)) scale(0.7); }
            100% { opacity: 0; transform: translate(calc(var(--tx) + var(--drift)), calc(var(--ty) + 120px)) scale(0); }
          }
        `}</style>
      </div>
    </>
  );
}
