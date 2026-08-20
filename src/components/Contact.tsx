import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-32">
      <Reveal>
        <p className="font-mono text-sm text-violet">~/contact</p>
        <h2 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-snow sm:text-7xl">
          Let&apos;s build something real.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-block text-xl text-fog underline decoration-hairline underline-offset-8 transition-colors hover:text-violet hover:decoration-violet sm:text-2xl"
        >
          {site.email}
        </a>
      </Reveal>
      <Reveal delay={0.18}>
        <div className="mt-12 flex flex-wrap gap-8 font-mono text-sm">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fog transition-colors hover:text-violet"
          >
            GitHub ↗
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fog transition-colors hover:text-violet"
          >
            LinkedIn ↗
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fog transition-colors hover:text-violet"
          >
            Resume ↓
          </a>
        </div>
      </Reveal>
    </section>
  );
}
