"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const roles = ["Voice AI Agents.", "n8n & Make Workflows.", "Multi-Agent Systems.", "CRM Automations."];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
              n8n · Make.com · Claude &amp; OpenAI Agents · CRM Automation
            </span>
            <span className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open for Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl"
          >
            AI AUTOMATION
            <br />
            <span className="text-gradient">ENGINEER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            I build conversational AI agents and business automation systems —
            from production voice agents handling real customer calls to n8n/Make
            workflows that move leads, invoices, and CRM data without a human
            touching them.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 font-mono text-sm italic text-accent2"
          >
            &ldquo;I debug agents by tracing the tool call, not by guessing.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glow-border rounded-2xl border border-border bg-surface p-6">
            <div className="section-label mb-4">System Status</div>
            <div className="space-y-3 font-mono text-sm">
              <StatusRow label="Voice Agent" value="Active" />
              <StatusRow label="Lead Router" value="Online" />
              <StatusRow label="CRM Sync" value="Online" />
              <StatusRow label="Task Bot" value="Listening..." />
            </div>
            <div className="mt-6 border-t border-border pt-4">
              <div className="section-label mb-2">Currently Rotating</div>
              <RoleTicker />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-surface2 px-3 py-2">
      <span className="text-muted">{label}</span>
      <span className="flex items-center gap-2 text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {value}
      </span>
    </div>
  );
}

function RoleTicker() {
  return (
    <div className="flex flex-col gap-1 text-sm text-white">
      {roles.map((r) => (
        <span key={r}>{r}</span>
      ))}
    </div>
  );
}
