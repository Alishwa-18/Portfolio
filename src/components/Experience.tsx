const items = [
  {
    role: "AI Automation Engineer",
    org: "Thinkrr",
    type: "Part-time",
    period: "Jan 2026 — Present",
    points: [
      "Test and review voice AI agents (including Ava) across real call scenarios — customer verification, information lookup, and call transfers.",
      "Analyze call transcripts and tool-call logs to identify conversation issues, edge cases, API failures, and unexpected agent behavior; document findings for developers and retest fixes after updates.",
      "Build and improve n8n and Make.com workflows involving API integrations, data synchronization, email automation, and error handling.",
      "Develop specialized LLM agents using Python and Node.js for automated report generation.",
    ],
  },
  {
    role: "Lead AI Automation Engineer",
    org: "BitzSol",
    type: "Part-time",
    period: "Sep 2025 — Dec 2025",
    points: [
      "Developed a recursive \"Master Agent V3\" system using n8n and LangChain that automatically routes user requests between specialized sub-agents, reducing user friction by 80%.",
      "Designed an end-to-end voice AI pipeline using ElevenLabs and Whisper; built a Telegram-to-Notion workflow that transcribes voice notes and auto-categorizes tasks into databases.",
      "Orchestrated a custom two-way synchronization between Zoho CRM and GoHighLevel using webhooks, maintaining real-time data integrity for a database of 10,000+ leads.",
    ],
  },
  {
    role: "Intern",
    org: "Digital Empowerment Network",
    type: "Internship",
    period: "Jul 2025 — Sep 2025",
    points: ["Web development and full-stack development."],
  },
  {
    role: "Automation Specialist",
    org: "Drobizz Media",
    type: "Full-time",
    period: "Jun 2025 — Aug 2025",
    points: [
      "Spearheaded a full-cycle marketing production pipeline using GPT-4o for copy and DALL-E 3 for visuals, fully automated via API for Instagram and LinkedIn scheduling.",
      "Authored Python scripts for automated lead scoring based on public engagement data, identifying high-intent prospects for the sales team.",
      "Consolidated disparate marketing data sources into a centralized Looker Studio dashboard, giving the executive team real-time ROI tracking and analytics.",
    ],
  },
  {
    role: "Solutions Architect",
    org: "Independent Consultant",
    type: "Remote",
    period: "Jun 2024 — Aug 2024",
    points: [
      "Developed a \"headless\" booking engine using NLP to extract meeting requests from emails and automatically coordinate Outlook calendar invites.",
      "Built \"Wise Invoices,\" an OCR-based automation for high-volume PDF processing that validates line items against purchase orders and triggers Stripe payouts.",
      "Served as technical lead for international SMEs migrating manual Excel-based processes into scalable SQL and Supabase database environments.",
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
            key={`${item.role}-${item.org}`}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">
                {item.role} · <span className="text-accent2">{item.org}</span>
              </h3>
              <span className="font-mono text-xs text-muted">
                {item.period} · {item.type}
              </span>
            </div>
            {item.points.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
