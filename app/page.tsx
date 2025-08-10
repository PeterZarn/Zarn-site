'use client';
import React from "react";
import { motion } from "framer-motion";
import {
  Eye, Radar, ScanLine, Lock, Bell, Globe2, ArrowRight,
  CheckCircle2, Sparkles, Building2, Megaphone, Siren, ShieldAlert
} from "lucide-react";
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Textarea } from "@/components/ui";

export default function Page() {
  return (
    <div>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <UseCases />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Zarn logo" className="h-9 w-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#use-cases" className="hover:text-white">Use cases</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost">Sign in</Button>
          <Button>Book a demo</Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(139,92,246,0.20),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight"
          >
            Stop <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-300">hostile reconnaissance</span> at the source
          </motion.h1>
          <p className="mt-5 text-neutral-300 md:text-lg max-w-xl">
            Criminals frequently exploit publicly available online information to plan attacks against organisations and their personnel. Zarn detects and disrupts the details—on websites and social media—that enable real-world harm.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button className="gap-2"><Sparkles className="h-4 w-4" /> Get a free risk check</Button>
            <Button variant="outline" className="gap-2"><PlayIcon /> Watch overview (2 min)</Button>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-neutral-400">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Privacy-first
            <span className="opacity-30">•</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-400" /> No code to install
            <span className="opacity-30">•</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-400" /> SOC-ready exports
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-3xl border border-white/10 bg-neutral-900 p-6 shadow-2xl">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-500/20 to-fuchsia-400/10 blur-2xl -z-10" />
            <div className="grid gap-3">
              <DemoRow icon={<Eye className="h-4 w-4" />} label="Unnecessary staff detail" value="Names, job titles and direct dials on team page" />
              <DemoRow icon={<Building2 className="h-4 w-4" />} label="Building & layout exposure" value="Floor plans, routes, access descriptions" />
              <DemoRow icon={<Siren className="h-4 w-4" />} label="Security routine disclosure" value="Patrol timings and schedules mentioned" />
              <DemoRow icon={<Megaphone className="h-4 w-4" />} label="Event & VIP timing risk" value="Arrival times and open guest lists" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DemoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-neutral-900/60 p-3">
      <div className="flex items-center gap-3">
        <div className="grid place-items-center h-8 w-8 rounded-lg bg-white/5">{icon}</div>
        <div>
          <p className="text-sm text-neutral-300">{label}</p>
          <p className="text-xs text-neutral-400">{value}</p>
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  return (
    <section className="py-10 border-y border-white/10 bg-neutral-900/40">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-neutral-300"><Lock className="h-4 w-4" /><span className="text-sm">Privacy-first • ISO-ready controls</span></div>
        <div className="flex items-center gap-2 text-neutral-300"><Radar className="h-4 w-4" /><span className="text-sm">Realtime signal detection</span></div>
        <div className="flex items-center gap-2 text-neutral-300"><Globe2 className="h-4 w-4" /><span className="text-sm">Across web & social</span></div>
        <div className="flex items-center gap-2 text-neutral-300"><Bell className="h-4 w-4" /><span className="text-sm">Actionable alerts</span></div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: <ScanLine className="h-5 w-5" />, title: "AI + expert rules", desc: "Models tuned on hostile reconnaissance patterns, with human-crafted rules to reduce noise." },
    { icon: <Eye className="h-5 w-5" />, title: "Actionable findings", desc: "Clear evidence and impact so comms and security teams can act quickly." },
    { icon: <ShieldAlert className="h-5 w-5" />, title: "Built-in guidance", desc: "Pre-approved, plain-English mitigation copy aligned to policy and legal." },
    { icon: <Bell className="h-5 w-5" />, title: "Alerts & workflows", desc: "Route incidents with context; track status to closure in your tools." },
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Adversarial threat detection for public content</h2>
          <p className="mt-4 text-neutral-300 max-w-prose">
            Most organisations lack effective tools to detect and prevent online data leaks before they are exploited. Zarn identifies and disrupts the digital information criminals use to target physical sites and people.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-300">
            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" /> Staff & contact details exposure</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" /> Building layouts, routes & access descriptions</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" /> Security routines & patrol timings</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" /> Event pages, VIP movements & guest lists</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" /> Job ads, procurement & operational detail</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" /> Social posts & replies (hostile reconnaissance signals)</li>
          </ul>
          <div className="mt-8 flex gap-3">
            <Button className="gap-2">Book a demo <ArrowRight className="h-4 w-4" /></Button>
            <Button variant="outline">See example report</Button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="h-10 w-10 rounded-xl bg-white/5 grid place-items-center mb-2">{it.icon}</div>
                <CardTitle>{it.title}</CardTitle>
              </CardHeader>
              <CardContent>{it.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { step: 1, title: "User-driven checks", text: "Your team enters URLs for websites, social media posts, or other online content they want to assess." },
    { step: 2, title: "Risk detection", text: "The software scans each URL for indicators of risk—such as sensitive information, location cues, or content that could be used to target people or property." },
    { step: 3, title: "Free text box", text: "Users can type or paste content before it’s posted. The software highlights potential risks in real time, making it safer to communicate online." },
    { step: 4, title: "Clear output", text: "The system presents the findings in a straightforward format designed to be easy for your teams to interpret and act on." },
    { step: 5, title: "Support and training", text: "We provide onboarding to get your team up and running, with ongoing support available as needed." },
  ];
  return (
    <section id="how" className="bg-neutral-900/40 border-y border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How it works for your site</h2>
          <div className="mt-8 grid gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative rounded-2xl border border-white/10 bg-neutral-900 p-6">
                <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-400 text-neutral-950 grid place-items-center font-bold shadow-lg shadow-violet-500/30">{i + 1}</div>
                <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-neutral-300 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src="/how-it-works.png" alt="How it works for your site" className="w-full rounded-2xl border border-white/10 bg-neutral-950" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const tags = ["Corporate comms", "Public sector", "Higher education", "Events & venues", "Healthcare", "Utilities", "Financial services"];
  return (
    <section id="use-cases" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Who uses Zarn</h2>
          <p className="mt-4 text-neutral-300 max-w-prose">
            Designed for teams who must communicate publicly without inviting risk. Comms leaders, CISOs, and press offices use Zarn to publish confidently.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (<span key={t} className="text-sm border border-white/10 rounded-full px-3 py-1.5 bg-white/5">{t}</span>))}
          </div>
        </div>
        <Card>
          <CardHeader><CardTitle>Example findings</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm text-neutral-300">
            <div>Team page lists names, roles and direct dials</div>
            <div>Site map reveals building layout and access routes</div>
            <div>Post mentions security patrol timings and locations</div>
            <div>Event page discloses VIP arrival time and open guest list</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_-20%,rgba(139,92,246,0.25),transparent_60%)]" />
        <div className="relative grid md:grid-cols-2 items-center gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Publish confidently with Zarn</h3>
            <p className="mt-3 text-neutral-300 max-w-prose">Run a free pilot on your public pages and social posts. See exactly what we’d flag—and why.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <Button variant="outline">See example report</Button>
            <Button className="gap-2">Book a demo <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Zarn logo" className="h-7 w-auto" />
          </div>
          <p className="mt-3 text-neutral-400 max-w-xs">AI that guards your public footprint—across web and social—so your team can communicate with confidence.</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-neutral-300 font-medium">Product</p>
            <a className="block text-neutral-400 hover:text-white" href="#features">Features</a>
            <a className="block text-neutral-400 hover:text-white" href="#how">How it works</a>
            <a className="block text-neutral-400 hover:text-white" href="#use-cases">Use cases</a>
          </div>
          <div className="space-y-2">
            <p className="text-neutral-300 font-medium">Company</p>
            <a className="block text-neutral-400 hover:text-white" href="#">About</a>
            <a className="block text-neutral-400 hover:text-white" href="#">Security</a>
            <a className="block text-neutral-400 hover:text-white" href="#">Contact</a>
          </div>
        </div>
        <div className="flex md:justify-end">
          <form className="w-full max-w-sm grid gap-3" onSubmit={(e) => e.preventDefault()}>
            <p className="text-neutral-300">Get product updates</p>
            <div className="flex gap-2">
              <Input placeholder="Work email" type="email" />
              <Button>Join</Button>
            </div>
            <p className="text-xs text-neutral-500">By subscribing, you agree to receive occasional emails from Zarn. Unsubscribe anytime.</p>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-xs text-neutral-500 text-center">© {new Date().getFullYear()} Zarn. All rights reserved.</div>
    </footer>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}


