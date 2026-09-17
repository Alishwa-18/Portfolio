const education = [
  {
    degree: "Bachelor of Software Engineering (BSSE)",
    org: "University of Agriculture, Faisalabad",
    period: "2023 - 2027 (Expected)",
  },
  {
    degree: "ICS (Intermediate in Computer Science)",
    org: "Masoomeen College",
    period: "2021 - 2023",
  },
  {
    degree: "Matriculation (Sciences)",
    org: "Chenab College, Chiniot",
    period: "2019 - 2021",
  },
];

const leadership = [
  {
    title: "Open-Source Contributor",
    body: "Actively share agentic memory management templates and advanced n8n workflow logic with the automation community.",
  },
  {
    title: "Project Lead: Kisan Connect",
    body: "Managed a team of 3 developers on a React Native project, coordinating API architecture and GitHub version control.",
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <div className="section-label">Education</div>
          <h2 className="mt-2 text-2xl font-bold">Academic background</h2>
          <div className="mt-8 space-y-4">
            {education.map((e) => (
              <div key={e.degree} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-sm font-semibold">{e.degree}</h3>
                <p className="mt-1 text-sm text-accent2">{e.org}</p>
                <p className="mt-1 font-mono text-xs text-muted">{e.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="section-label">Leadership & Community</div>
          <h2 className="mt-2 text-2xl font-bold">Beyond the day job</h2>
          <div className="mt-8 space-y-4">
            {leadership.map((l) => (
              <div key={l.title} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-sm font-semibold">{l.title}</h3>
                <p className="mt-2 text-sm text-muted">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
