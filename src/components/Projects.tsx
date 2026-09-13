import { projects, teamProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="section-label">Featured Projects</div>
      <h2 className="mt-2 max-w-2xl text-3xl font-bold sm:text-4xl">
        Agents and automations built end-to-end.
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        Every project below started as an operational problem and ended as a
        system that runs without me in the loop.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <div className="mt-20">
        <div className="section-label">Collaborative Work</div>
        <h3 className="mt-2 text-2xl font-bold">Team automation builds</h3>
        <p className="mt-3 max-w-2xl text-muted">
          Built as part of a team or client engagement, not solo — included
          here for the workflow design and tooling experience, not solo credit.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
