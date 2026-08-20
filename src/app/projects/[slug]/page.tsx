import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCover } from "@/components/ProjectCover";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.short,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <main className="mx-auto max-w-4xl px-6 pt-14 pb-28">
        <Link
          href="/#projects"
          className="font-mono text-sm text-fog transition-colors hover:text-violet"
        >
          ← cd ~/projects
        </Link>

        <Reveal className="mt-14">
          <p className="font-mono text-sm text-violet">
            {project.dates} · {project.team}
            {project.status ? ` · ${project.status}` : ""}
          </p>
          <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-snow sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-fog">
            {project.short}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-hairline">
            <ProjectCover motif={project.motif} index={index} />
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-12">
          <div className="grid gap-8 rounded-2xl border border-hairline bg-raise p-8 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs text-fog uppercase">Role</p>
              <p className="mt-2 text-snow">{project.role}</p>
            </div>
            <div>
              <p className="font-mono text-xs text-fog uppercase">Team</p>
              <p className="mt-2 text-snow">{project.team}</p>
            </div>
            <div>
              <p className="font-mono text-xs text-fog uppercase">Timeline</p>
              <p className="mt-2 text-snow">{project.dates}</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-mono text-sm text-violet">~/overview</h2>
          <div className="mt-6 space-y-6">
            {project.summary.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-fog">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-mono text-sm text-violet">~/highlights</h2>
          <ul className="mt-6 space-y-4">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-fog">
                <span aria-hidden="true" className="mt-[10px] block h-1 w-1 shrink-0 rounded-full bg-violet" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-mono text-sm text-violet">~/stack</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-hairline px-3 py-1 font-mono text-xs text-fog"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-24 border-t border-hairline pt-10">
          <p className="font-mono text-sm text-fog">Next project</p>
          <Link
            href={`/projects/${next.slug}`}
            className="group mt-3 inline-block font-display text-3xl font-bold text-snow transition-colors hover:text-violet"
          >
            {next.name}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
