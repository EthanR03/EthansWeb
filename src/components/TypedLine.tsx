"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function TypedLine({
  text,
  startDelay = 0,
  className,
}: {
  text: string;
  startDelay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (reduce) {
      setCount(text.length);
      setStarted(true);
      return;
    }
    const start = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(start);
  }, [reduce, startDelay, text.length]);

  useEffect(() => {
    if (!started || count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), 34);
    return () => clearTimeout(t);
  }, [started, count, text.length]);

  const done = count >= text.length;

  return (
    <p className={className} aria-label={text}>
      <span aria-hidden="true" className="text-violet">
        $&nbsp;
      </span>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span
        aria-hidden="true"
        className={`ml-0.5 inline-block h-[1.1em] w-[0.55ch] translate-y-[0.2em] bg-violet ${
          done ? "animate-pulse" : ""
        }`}
      />
    </p>
  );
}
