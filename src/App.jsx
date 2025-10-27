import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white antialiased">
      <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#0b0f1a]/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded bg-gradient-to-br from-[#6b7cff] to-[#b66dff]" />
            <span className="font-semibold">CloudPilot AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#workflow" className="hover:text-white">Workflow</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10">Sign in</a>
          </nav>
          <a href="#pricing" className="md:hidden rounded-lg bg-gradient-to-r from-[#6b7cff] to-[#b66dff] px-3 py-1.5 text-sm font-semibold">Try Free</a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features"><Features /></div>
        <Workflow />
        <Showcase />
      </main>
    </div>
  );
}

export default App;
