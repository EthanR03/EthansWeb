import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-svh max-w-6xl flex-col items-start justify-center px-6">
      <p className="font-mono text-sm text-violet">error 404</p>
      <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-snow sm:text-7xl">
        page_not_found
      </h1>
      <p className="mt-6 text-lg text-fog">
        This route doesn&apos;t exist. The work does.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-violet px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
      >
        cd ~
      </Link>
    </main>
  );
}
