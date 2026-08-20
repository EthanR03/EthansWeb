"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { site } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > window.innerHeight * 0.6);
  });

  return (
    <motion.header
      initial={false}
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-ink/75 backdrop-blur-md"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm text-snow">
          er<span className="text-violet">.</span>
        </a>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden text-sm text-fog transition-colors hover:text-snow sm:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-violet/40 px-4 py-1.5 font-mono text-xs text-violet transition-colors hover:bg-violet hover:text-ink"
          >
            Resume
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
