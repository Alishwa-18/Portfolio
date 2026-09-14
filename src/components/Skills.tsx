const groups = [
  {
    title: "Enterprise Automation",
    items: ["n8n (advanced logic, merge, error triggers)", "Make.com", "Zapier", "Webhooks", "REST APIs"],
  },
  {
    title: "AI & LLMs",
    items: ["LangChain", "OpenAI Assistants API", "Claude", "Pinecone", "RAG Pipelines", "Prompt Engineering"],
  },
  {
    title: "Development & Prototyping",
    items: ["Python (scraping, SQL, regex)", "JavaScript", "Node.js", "React.js", "Next.js", "Cursor", "Replit"],
  },
  {
    title: "Business Systems",
    items: ["HubSpot", "Zoho CRM", "GoHighLevel", "Airtable", "Supabase", "Notion API", "Google Workspace"],
  },
  {
    title: "Voice AI & Testing",
    items: [
      "ElevenLabs",
      "Whisper",
      "Conversation-flow testing",
      "Call analysis",
      "Tool-call validation",
      "API error debugging",
    ],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
      <div className="section-label">Skills</div>
      <h2 className="mt-2 max-w-2xl text-3xl font-bold sm:text-4xl">
        The stack behind the work.
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold text-accent2">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-surface2 px-2.5 py-1.5 font-mono text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
