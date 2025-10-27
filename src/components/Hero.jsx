import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0f1a] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f1a]/30 to-[#0b0f1a] pointer-events-none" />
      <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(88,101,242,0.35),transparent)] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.25),transparent)] blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              AI-driven cloud control
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              One Platform. <span className="bg-gradient-to-r from-[#7c8cff] via-[#9b7bff] to-[#ff8f8f] bg-clip-text text-transparent">Infinite Cloud Power.</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-xl">
              Unified control, AI-driven automation, and zero-stress multi-cloud management.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#6b7cff] via-[#7a5cff] to-[#b66dff] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:opacity-95 transition">
                Get Started Free
              </a>
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10 transition">
                <Play className="h-4 w-4" /> Watch Demo
              </a>
            </div>

            {/* Cloud Logos */}
            <div className="mt-10 grid grid-cols-4 items-center gap-4 sm:gap-6 max-w-md">
              <CloudBadge name="AWS" gradient="from-orange-400 to-amber-500" />
              <CloudBadge name="Azure" gradient="from-sky-400 to-blue-500" />
              <CloudBadge name="GCP" gradient="from-rose-400 to-yellow-400" />
              <CloudBadge name="Proxmox" gradient="from-amber-500 to-orange-600" />
            </div>
          </div>
          <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* subtle gradient overlay not blocking interactions */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CloudBadge({ name, gradient }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center backdrop-blur transition hover:bg-white/10">
      <div className={`mx-auto mb-2 h-6 w-6 rounded-sm bg-gradient-to-br ${gradient}`} />
      <span className="text-xs font-medium text-white/80">{name}</span>
      <div className="pointer-events-none absolute inset-px rounded-[10px] ring-1 ring-white/10" />
    </div>
  );
}
