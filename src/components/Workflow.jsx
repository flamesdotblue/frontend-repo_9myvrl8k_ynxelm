import React from 'react';
import { Cpu, GitBranch, Server, Cloud, Wrench } from 'lucide-react';

export default function Workflow() {
  return (
    <section id="workflow" className="relative bg-[#0b0f1a] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(155,123,255,0.15),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">How CloudPilot AI Orchestrates</h2>
          <p className="mt-3 text-white/70">
            AI engine in the center → cloud providers & DevOps tools around.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left satellites */}
          <div className="flex flex-col gap-6">
            <Satellite icon={GitBranch} title="CI/CD" subtitle="Pipelines & GitOps" />
            <Satellite icon={Wrench} title="Observability" subtitle="Metrics • Logs • Traces" />
          </div>

          {/* Core engine */}
          <div className="relative mx-auto h-72 w-72 rounded-full bg-gradient-to-br from-[#6b7cff]/20 to-[#b66dff]/20 p-1 ring-1 ring-white/10">
            <div className="relative h-full w-full rounded-full bg-[#0b0f1a] flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(124,140,255,0.35),transparent),radial-gradient(circle_at_70%_70%,rgba(182,109,255,0.35),transparent)]" />
              <Cpu className="relative h-12 w-12" />
              <h3 className="relative mt-3 text-lg font-semibold">CloudPilot AI Engine</h3>
              <p className="relative mt-1 px-6 text-xs text-white/70">
                Predictive automation, policy orchestration, cost intelligence.
              </p>
            </div>
          </div>

          {/* Right satellites */}
          <div className="flex flex-col gap-6 lg:items-end">
            <Satellite icon={Server} title="On‑Prem" subtitle="VMware • Proxmox • K8s" right />
            <Satellite icon={Cloud} title="Clouds" subtitle="AWS • Azure • GCP" right />
          </div>
        </div>
      </div>
    </section>
  );
}

function Satellite({ icon: Icon, title, subtitle, right }) {
  return (
    <div className={`group relative max-w-xs ${right ? 'ml-auto text-right' : ''}`}>
      <div className="relative rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
        <div className={`flex items-center ${right ? 'flex-row-reverse text-right' : ''} gap-3`}>
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#6b7cff]/30 to-[#b66dff]/30 ring-1 ring-white/10">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold">{title}</div>
            <div className="text-xs text-white/70">{subtitle}</div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-[14px] ring-1 ring-white/10" />
      </div>
    </div>
  );
}
