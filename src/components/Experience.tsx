"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading path="~/experience" title="Where I've built." />
      <div ref={ref} className="relative mt-14 pl-8 sm:pl-12">
        {/* timeline rail */}
        <div
          aria-hidden="true"
          className="absolute top-1 bottom-1 left-[5px] w-px bg-hairline sm:left-[7px]"
        />
        <motion.div
          aria-hidden="true"
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute top-1 bottom-1 left-[5px] w-px bg-violet sm:left-[7px]"
        />
        <ol className="space-y-16">
          {experience.map((role, i) => (
            <li key={role.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-8 block h-[11px] w-[11px] rounded-full border-2 border-violet bg-ink sm:-left-12 sm:h-[15px] sm:w-[15px]"
              />
              <Reveal delay={i * 0.05}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-2xl font-bold text-snow">
                    {role.title}
                  </h3>
                  <p className="font-mono text-sm text-violet">{role.dates}</p>
                </div>
                <p className="mt-1 text-fog">
                  {role.org} · {role.location}
                </p>
                <ul className="mt-5 space-y-3">
                  {role.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-fog">
                      <span aria-hidden="true" className="mt-[9px] block h-1 w-1 shrink-0 rounded-full bg-violet" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {role.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-hairline px-3 py-1 font-mono text-xs text-fog"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
