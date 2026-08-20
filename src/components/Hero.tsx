"use client";

import { motion, useReducedMotion } from "motion/react";
import { Image } from "@imagekit/next";
import { TypedLine } from "@/components/TypedLine";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const lineReveal = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { y: "110%" },
          animate: { y: "0%" },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-svh max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-20 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:pt-0"
    >
      {/* Left: type */}
      <div className="relative z-10">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-mono text-sm text-fog"
        >
          {site.role} · {site.location}
        </motion.p>

        <h1 className="mt-6 font-display font-extrabold leading-[0.92] tracking-tight text-snow">
          <span className="block overflow-hidden text-[clamp(3.5rem,11vw,8.5rem)]">
            <motion.span className="block" {...lineReveal(0.25)}>
              {site.firstName}
            </motion.span>
          </span>
          <span className="block overflow-hidden text-[clamp(3.5rem,11vw,8.5rem)]">
            <motion.span className="block" {...lineReveal(0.38)}>
              {site.lastName}
              <span className="text-violet">.</span>
            </motion.span>
          </span>
        </h1>

        <TypedLine
          text={site.tagline}
          startDelay={1150}
          className="mt-8 font-mono text-base text-snow sm:text-lg"
        />

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease }}
          className="mt-4 max-w-md text-base leading-relaxed text-fog"
        >
          {site.heroNote}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-violet px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-hairline px-6 py-3 font-mono text-sm text-snow transition-colors hover:border-violet/50 hover:text-violet"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Right: headshot, lit like a film still */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease }}
        className="relative mx-auto w-full max-w-sm lg:max-w-none"
      >
        {/* violet key light */}
        <div
          aria-hidden="true"
          className="absolute -inset-16 -z-10 rounded-full bg-violet-deep/25 blur-3xl"
        />
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}
            src="/Ethan_HeadShot.PNG"
            alt="Headshot of Ethan Rivera"
            width={880}
            height={1100}
            transformation={[{ width: 880, height: 1100, focus: "face" }]}
            priority
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="h-auto w-full object-cover [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)] contrast-[1.04] saturate-[0.92]"
          />
          {/* cinematic grade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-violet-deep/10"
          />
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute bottom-8 left-6 hidden items-center gap-3 font-mono text-xs text-fog lg:flex"
      >
        scroll
        <span className="relative block h-px w-12 overflow-hidden bg-hairline">
          <motion.span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-6 bg-violet"
            animate={reduce ? {} : { x: [-24, 48] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
