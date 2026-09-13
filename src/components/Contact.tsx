import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    value: "github.com/Alishwa-18",
    href: "https://github.com/Alishwa-18",
    icon: Github,
  },
  {
    label: "Email",
    value: "alishwashakeel7@gmail.com",
    href: "mailto:alishwashakeel7@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Add your LinkedIn URL",
    href: "#",
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-surface2 p-10 text-center sm:p-16">
        <div className="section-label justify-center">Open for Projects</div>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Have a process worth automating?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Whether it&apos;s a voice agent, a lead-routing workflow, or a
          multi-agent system — tell me the operational problem and I&apos;ll
          tell you how I&apos;d build it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm transition hover:border-accent"
            >
              <s.icon size={16} className="text-accent2" />
              {s.value}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
