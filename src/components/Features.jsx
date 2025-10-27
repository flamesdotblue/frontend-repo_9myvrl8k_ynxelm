import React from 'react';
import { Cloud, Activity, LayoutGrid, Shield, MoveRight } from 'lucide-react';

const features = [
  {
    title: 'Multi-Cloud Deployment & Migration',
    desc: 'Provision, orchestrate, and migrate workloads across AWS, Azure, GCP, and on‑prem with zero downtime.',
    icon: Cloud,
  },
  {
    title: 'AI Incident Prediction & Auto-Healing',
    desc: 'Predict failures before they happen and self-heal services with automated runbooks and rollbacks.',
    icon: Activity,
  },
  {
    title: 'Single Pane of Glass Management',
    desc: 'Unified dashboards, metrics, logs, and alerts. Everything you need in one intelligent view.',
    icon: LayoutGrid,
  },
  {
    title: 'Secure Token Access & Cost Optimization',
    desc: 'Scoped access with short‑lived tokens, policy controls, and AI‑powered right‑sizing to cut spend.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section className="relative bg-[#0a0e18] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,140,255,0.15),transparent_50%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Future‑ready Features</h2>
          <p className="mt-3 text-white/70">
            Unified cloud experience. DevOps at lightspeed.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:shadow-[0_0_0_1px_rgba(124,140,255,0.25)] transition">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#6b7cff]/30 to-[#b66dff]/30 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold leading-snug">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs text-white/70">
                Learn more <MoveRight className="h-4 w-4" />
              </div>
              <div className="pointer-events-none absolute inset-px rounded-[14px] ring-1 ring-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
