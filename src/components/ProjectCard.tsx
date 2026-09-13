import type { Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/50">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-border bg-surface2 px-3 py-1 text-xs text-accent2">
          {project.category}
        </span>
        {project.team && (
          <span className="rounded-full border border-border bg-surface2 px-3 py-1 text-xs text-muted">
            Team Project
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>

      <div className="mt-4 space-y-3 text-sm">
        <div>
          <div className="font-mono text-xs uppercase tracking-wide text-muted">Problem</div>
          <p className="mt-1 text-muted">{project.problem}</p>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-wide text-muted">
            {project.team ? "My Contribution" : "Approach"}
          </div>
          <p className="mt-1 text-muted">{project.approach}</p>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-wide text-accent2">Result</div>
          <p className="mt-1 text-white/90">{project.result}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md bg-surface2 px-2 py-1 font-mono text-xs text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-5 flex gap-4 border-t border-border pt-4">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-accent2 hover:underline"
            >
              {l.label} <ExternalLink size={13} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
