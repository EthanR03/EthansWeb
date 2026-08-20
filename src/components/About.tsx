import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Counter } from "@/components/Counter";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading path="~/about" title="AI that ships." />
      <div className="mt-12 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          {site.intro.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-fog">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="space-y-8 lg:border-l lg:border-hairline lg:pl-10">
          {site.facts.map((f, i) => (
            <Reveal key={f.label} delay={0.1 + i * 0.08}>
              <p className="font-display text-5xl font-bold text-snow">
                <Counter
                  value={f.value}
                  prefix={"prefix" in f ? f.prefix : ""}
                  suffix={f.suffix}
                />
              </p>
              <p className="mt-1 font-mono text-sm text-fog">{f.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
