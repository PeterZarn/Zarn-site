'use client';
import React from "react";
import { motion } from "framer-motion";
import { Eye, Radar, ScanLine, Lock, Bell, Globe2, ArrowRight, CheckCircle2, Sparkles, Building2, Megaphone, Siren, ShieldAlert } from "lucide-react";
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
        <Guidance />
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
          <a href="#guidance" className="hover:text-white">Guidance</a>
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
            Born to protect. <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-300">Quietly terrifying</span> to attackers.
          </motion.h1>
          <p className="mt-5 text-neutral-300 md:text-lg max-w-xl">
            Zarn detects threats across websites, social media, and public platforms—before they escalate. AI-powered scanning that sees what humans miss, tuned by real-world expertise.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button className="gap-2"><Sparkles className="h-4 w-4" /> Try the live demo</Button>
            <Button variant="outline" className="gap-2"><PlayIcon /> Watch overview (2 min)</Button>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-neutral-400">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" /> No code to install
            <span className="opacity-30">•</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-400" /> SOC-ready exports
            <span className="opacity-30">•</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Privacy-first by design
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
              <DemoRow icon={<Eye className="h-4 w-4" />} label="Personal data exposure" value="Employee emails published on /contact" severity="High" />
              <DemoRow icon={<Megaphone className="h-4 w-4" />} label="Event announcement risk" value="Open guest list; impersonation risk" severity="Medium" />
              <DemoRow icon={<Building2 className="h-4 w-4" />} label="Org details leak" value="Direct dials + job titles on team page" severity="High" />
              <DemoRow icon={<Siren className="h-4 w-4" />} label="Social media threat" value="Executive doxxing in replies" severity="Critical" />
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-neutral-800/60 p-4">
              <p className="text-sm text-neutral-300">Recommended mitigation copy:</p>
              <p className="mt-2 text-sm text-violet-200/90">
                “Never publish individual email addresses. Use a shared, role-based inbox to reduce the risk of impersonation, phishing, and unauthorised access to sensitive information.”
              </p>
              <p className="mt-2 text-sm text-violet-200/90">“This event is open to attendees. Security protocols are in place.”</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DemoRow({ icon, label, value, severity }: { icon: React.ReactNode; label: string; value: string; severity: "Low"|"Medium"|"High"|"Critical" }) {
  const badge = {
    Low: "bg-emerald-500/20 text-emerald-200 border-emerald-500/30",
    Medium: "bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-500/30",
    High: "bg-violet-500/20 text-violet-200 border-violet-500/30",
    Critical: "bg-rose-500/20 text-rose-200 border-rose-500/30",
  }[severity];
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-neutral-900/60 p-3">
      <div className="flex items-center gap-3">
        <div className="grid place-items-center h-8 w-8 rounded-lg bg-white/5">{icon}</div>
        <div>
          <p className="text-sm text-neutral-300">{label}</p>
          <p className="text-xs text-neutral-400">{value}</p>
        </div>
      </div>
      <span className={`text-xs border px-2.5 py-1 rounded-full ${badge}`}>{severity}</span>
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
    { icon: <ScanLine className="h-5 w-5" />, title: "AI threat scanning", desc: "Models tuned on real-world patterns catch risky disclosures, impersonation vectors, and social escalation signals." },
    { icon: <Eye className="h-5 w-5" />, title: "Human-tuned precision", desc: "Expert-crafted rules reduce noise and surface what actually matters to your comms and security teams." },
    { icon: <ShieldAlert className="h-5 w-5" />, title: "Mitigation guidance", desc: "Pre-approved, plain-English copy your team can drop in immediately—aligned with policy and legal." },
    { icon: <Bell className="h-5 w-5" />, title: "Alerts & workflows", desc: "Routes incidents to the right people with context, evidence, and suggested next steps." },
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What Zarn does</h2>
          <p className="mt-4 text-neutral-300 max-w-prose">
            Zarn continuously monitors your public footprint and flags exposures before they become headlines. Connect your domains and social handles; we’ll do the rest.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-300">
            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" /> Website & CMS pages</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" /> Social media posts & replies</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" /> Press releases & job ads</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" /> Event pages & sign-up flows</li>
          </ul>
          <div className="mt-8 flex gap-3">
            <Button className="gap-2">Start free pilot <ArrowRight className="h-4 w-4" /></Button>
            <Button variant="outline">Read docs</Button>
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
    { step: 1, title: "Connect & scope", text: "Add your domains, social handles, and risk preferences. No code or pixel required." },
    { step: 2, title: "Scan & detect", text: "Zarn parses pages and posts for exposures: personal data, org detail, events, impersonation vectors, and more." },
    { step: 3, title: "Triage & act", text: "Receive concise alerts with evidence and approved mitigation copy. Sync to Slack, email, or ticketing." },
  ];
  return (
    <section id="how" className="bg-neutral-900/40 border-y border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How it works</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative rounded-2xl border border-white/10 bg-neutral-900 p-6">
              <div className="absolute -top-3 -left-3 h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-400 text-neutral-950 grid place-items-center font-bold shadow-lg shadow-violet-500/30">{s.step}</div>
              <h3 className="mt-10 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-neutral-300 text-sm">{s.text}</p>
            </div>
          ))}
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
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Where Zarn shines</h2>
          <p className="mt-4 text-neutral-300 max-w-prose">
            Designed for teams who must communicate publicly without inviting risk. Comms leaders, CISOs, and press offices use Zarn to publish confidently.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (<span key={t} className="text-sm border border-white/10 rounded-full px-3 py-1.5 bg-white/5">{t}</span>))}
          </div>
        </div>
        <Card>
          <CardHeader><CardTitle>Example findings</CardTitle></CardHeader>
          <CardContent>
            <Finding label="Job ad exposes building access details" impact="High" />
            <Finding label="Team page lists direct dials for execs" impact="High" />
            <Finding label="Event page reveals VIP arrival time" impact="Medium" />
            <Finding label="Recruitment tweet invites off-platform applications" impact="Medium" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Finding({ label, impact }: { label: string; impact: "Low"|"Medium"|"High" }) {
  const cls = impact === "High" ? "text-violet-300" : impact === "Medium" ? "text-fuchsia-300" : "text-emerald-300";
  return (
    <div className="flex items-center justify-between text-sm">
      <span>{label}</span>
      <span className={`text-xs ${cls}`}>{impact}</span>
    </div>
  );
}

function Guidance() {
  return (
    <section id="guidance" className="bg-neutral-900/40 border-y border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Standard guidance</h2>
            <p className="mt-4 text-neutral-300 max-w-prose">Zarn ships with pre-approved language your team can use immediately. Here are two examples you can customise:</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="p-4 rounded-xl bg-neutral-900 border border-white/10 text-violet-200/90">
                Never publish individual email addresses. Use a shared, role-based inbox to reduce the risk of impersonation, phishing, and unauthorised access to sensitive information.
              </li>
              <li className="p-4 rounded-xl bg-neutral-900 border border-white/10 text-violet-200/90">This event is open to attendees. Security protocols are in place.</li>
            </ul>
          </div>
          <Card>
            <CardHeader><CardTitle>Request a tailored policy pack</CardTitle></CardHeader>
            <CardContent>
              <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Your name" />
                <Input placeholder="Work email" type="email" />
                <Textarea placeholder="Tell us about your public risk challenges" />
                <Button>Send request</Button>
              </form>
            </CardContent>
          </Card>
        </div>
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
