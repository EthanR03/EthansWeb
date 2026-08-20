import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  path,
  title,
}: {
  path: string;
  title: string;
}) {
  return (
    <Reveal>
      <p className="font-mono text-sm text-violet">{path}</p>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-snow sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
