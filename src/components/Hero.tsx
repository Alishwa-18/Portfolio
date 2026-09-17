"use client";

import { useState } from "react";
import { ArrowRight, MapPin, Radio, Sparkles } from "lucide-react";

const building = ["Voice AI agents", "n8n & Make workflows"];

export default function Hero() {
  return (
    <section id="top" className="relative pb-32 pt-40">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="fade-up mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
              n8n · Make.com · Claude &amp; OpenAI Agents · CRM Automation
            </span>
            <span className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open for Projects
            </span>
          </div>

          <h1 className="fade-up fade-up-1 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            AI AUTOMATION
            <br />
            <span className="text-gradient">ENGINEER</span>
          </h1>

          <p className="fade-up fade-up-2 mt-6 max-w-xl text-lg text-muted">
            I build conversational AI agents and business automation systems,
            from production voice agents handling real customer calls to n8n/Make
            workflows that move leads, invoices, and CRM data without a human
            touching them.
          </p>

          <div className="fade-up fade-up-3 mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin size={14} />
            Faisalabad, Pakistan · Remote
          </div>

          <div className="fade-up fade-up-4 mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
            >
              Explore My Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-white transition hover:border-accent"
            >
              Work With Me
            </a>
          </div>
        </div>

        <div className="fade-in relative mx-auto mt-6 w-full max-w-sm px-6 pb-24 pt-4">
          <ProfilePhoto />

          <div className="glow-border absolute bottom-6 left-0 z-10 w-40 rounded-2xl border border-border bg-surface/95 p-3.5 shadow-2xl backdrop-blur">
            <div className="mb-2 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted">
              <Sparkles size={11} className="text-accent2" />
              Currently building
            </div>
            <ul className="space-y-1.5">
              {building.map((item) => (
                <li key={item} className="text-xs font-medium text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glow-border absolute -bottom-10 left-10 z-20 w-48 rounded-2xl border border-border bg-surface/95 p-4 shadow-2xl backdrop-blur">
            <div className="mb-3 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted">
              <Radio size={11} className="text-accent2" />
              System status
            </div>
            <div className="space-y-2">
              <StatusRow label="Voice Agent" value="Active" />
              <StatusRow label="Lead Router" value="Online" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfilePhoto() {
  const [broken, setBroken] = useState(false);

  const checkAlreadyBroken = (img: HTMLImageElement | null) => {
    if (img && img.complete && img.naturalWidth === 0) setBroken(true);
  };

  if (broken) {
    return (
      <div className="glow-border flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-surface to-surface2">
        <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent2 text-3xl font-bold text-bg">
          AS
        </span>
      </div>
    );
  }

  return (
    <div className="glow-border aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/profile.jpg"
        alt="Alishwa Shakeel"
        className="h-full w-full object-cover"
        ref={checkAlreadyBroken}
        onError={() => setBroken(true)}
      />
    </div>
  );
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 text-xs">
      <span className="text-muted">{label}</span>
      <span className="flex items-center gap-1.5 font-medium text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {value}
      </span>
    </div>
  );
}
