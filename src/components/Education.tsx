import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading path="~/education" title="Where it started." />
      <Reveal delay={0.1}>
        <div className="mt-12 rounded-2xl border border-hairline bg-raise p-8 sm:p-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-display text-3xl font-bold text-snow sm:text-4xl">
              {education.school}
            </h3>
            <p className="font-mono text-sm text-fog">
              {education.dates} · {education.campus}
            </p>
          </div>
          <p className="mt-4 text-lg text-fog">
            {education.degree} —{" "}
            <span className="text-snow">{education.concentration}</span>{" "}
            <span className="font-mono text-sm">· GPA {education.gpa}</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {education.focus.map((f) => (
              <span
                key={f}
                className="rounded-full border border-hairline px-3 py-1 font-mono text-xs text-fog"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
