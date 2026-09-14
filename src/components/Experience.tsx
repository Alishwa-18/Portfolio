const items = [
  {
    role: "AI Automation Engineer",
    org: "Thinkrr",
    period: "Current",
    points: [
      "Own production voice AI agents (including Ava) handling real customer calls end-to-end.",
      "Analyze full conversation journeys: tool calls, structured data, prompt behavior, transfers, API failures, latency, and conversation loops.",
      "Diagnose why an agent failed and which part of the workflow needs to change — not just re-prompt and hope.",
      "Build n8n/Make workflows for email, CRM, and API-driven customer-intent routing.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <div className="section-label">Experience</div>
      <h2 className="mt-2 max-w-2xl text-3xl font-bold sm:text-4xl">
        Professional background
      </h2>

      <div className="mt-12 space-y-6">
        {items.map((item) => (
          <div
            key={item.role}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">
                {item.role} · <span className="text-accent2">{item.org}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{item.period}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {item.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
