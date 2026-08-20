import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCover } from "@/components/ProjectCover";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading path="~/projects" title="Selected work." />
      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08}>
            <Link
              href={`/projects/${p.slug}`}
              className="group block overflow-hidden rounded-2xl border border-hairline bg-raise transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-[0_20px_60px_-20px_rgba(124,58,237,0.35)]"
            >
              <ProjectCover
                motif={p.motif}
                index={i}
                className="transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold text-snow">
                    {p.name}
                  </h3>
                  {p.status && (
                    <span className="shrink-0 font-mono text-xs text-violet">
                      {p.status}
                    </span>
                  )}
                </div>
                <p className="mt-3 leading-relaxed text-fog">{p.short}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-hairline px-3 py-1 font-mono text-xs text-fog"
                    >
                      {t}
                    </span>
                  ))}
                  {p.stack.length > 4 && (
                    <span className="px-1 py-1 font-mono text-xs text-fog">
                      +{p.stack.length - 4}
                    </span>
                  )}
                </div>
                <p className="mt-6 font-mono text-sm text-violet">
                  Read case study{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
