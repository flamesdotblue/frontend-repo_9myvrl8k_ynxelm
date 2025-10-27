import React from 'react';
import { Star, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Showcase() {
  return (
    <section className="relative bg-[#090d16] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,140,255,0.12),transparent_55%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Testimonials */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold">Trusted by modern teams</h2>
            <p className="mt-2 text-white/70">What customers say about the unified cloud experience.</p>
            <div className="mt-6 space-y-4">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />)
              )}
            </div>
          </div>

          {/* Pricing */}
          <div id="pricing" className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Free trial • No credit card</span>
              <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs text-indigo-300">Future‑ready</span>
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl font-bold">Simple, transparent pricing</h3>
            <p className="mt-1 text-white/70">Start free, scale when you need. Enterprise‑grade security in every plan.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((p) => (
                <PlanCard key={p.name} {...p} />
              ))}
            </div>

            {/* Footer */}
            <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <div className="text-lg font-semibold">CloudPilot AI</div>
                <div className="text-sm text-white/60">Unified cloud control. DevOps at lightspeed.</div>
              </div>
              <div className="flex items-center gap-6 text-sm text-white/70">
                <a href="#features" className="hover:text-white">Product</a>
                <a href="#workflow" className="hover:text-white">Workflow</a>
                <a href="#pricing" className="hover:text-white">Pricing</a>
                <a href="#" className="hover:text-white">Docs</a>
                <a href="#" className="hover:text-white">Contact</a>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <a aria-label="Twitter" href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
                <a aria-label="LinkedIn" href="#" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
                <a aria-label="GitHub" href="#" className="hover:text-white"><Github className="h-5 w-5" /></a>
                <a aria-label="Email" href="#" className="hover:text-white"><Mail className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, quote }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="flex items-center gap-1 text-amber-300">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-3 text-sm text-white/80">“{quote}”</p>
      <div className="mt-4 text-xs text-white/60">{name} • {role}</div>
      <div className="pointer-events-none absolute inset-px rounded-[14px] ring-1 ring-white/10" />
    </div>
  );
}

function PlanCard({ name, price, badge, features, cta }) {
  return (
    <div className="relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="mt-1 text-3xl font-extrabold tracking-tight">
            {price}
          </div>
        </div>
        {badge ? (
          <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs text-indigo-300">{badge}</span>
        ) : null}
      </div>
      <ul className="mt-5 space-y-2 text-sm text-white/75">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#6b7cff] to-[#b66dff]" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#6b7cff] to-[#b66dff] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:opacity-95 transition">
        {cta}
      </a>
      <div className="pointer-events-none absolute inset-px rounded-[14px] ring-1 ring-white/10" />
    </div>
  );
}

const testimonials = [
  {
    name: 'Alicia M.',
    role: 'Head of Platform, Fintech',
    quote: 'CloudPilot AI gives us a single source of truth across clouds with predictive healing that just works.',
  },
  {
    name: 'Jon K.',
    role: 'SRE Lead, SaaS',
    quote: 'Migrated 40% of workloads with zero downtime. The AI insights cut our cloud bill by 28%.',
  },
  {
    name: 'Priya R.',
    role: 'DevOps Manager, Retail',
    quote: 'From chaos to clarity. One dashboard, powerful automation, and stellar DX.',
  },
];

const plans = [
  {
    name: 'Free',
    price: '$0',
    badge: 'Starter',
    features: [
      'Up to 3 clusters • 10 nodes',
      'Basic dashboards',
      'Community support',
    ],
    cta: 'Start Free',
  },
  {
    name: 'Pro',
    price: '$49/mo',
    badge: 'Most Popular',
    features: [
      'Unlimited clusters',
      'AI auto‑healing & runbooks',
      'SAML/SSO + token access',
      'Cost optimization suite',
    ],
    cta: 'Start Pro Trial',
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    badge: 'Security First',
    features: [
      'Private cloud / on‑prem',
      'Dedicated VPC & SLAs',
      'Custom policies & RBAC',
      'White‑glove onboarding',
    ],
    cta: 'Contact Sales',
  },
];
