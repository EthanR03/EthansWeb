export type Project = {
  slug: string;
  name: string;
  short: string;
  dates: string;
  team: string;
  role: string;
  status?: "in progress";
  stack: string[];
  motif: "graph" | "scan" | "memory" | "route";
  summary: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "cmdb-cockpit",
    name: "CMDB Cockpit",
    short:
      "AI agents that keep a ServiceNow CMDB clean — built by a three-person hackathon team and proven on a live instance.",
    dates: "Jul 2026",
    team: "Team of 3 — KeenStack StackUp Hackathon",
    role: "ServiceNow integration layer & agent pipeline",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "OpenAI API",
      "ServiceNow Table API",
      "IRE",
    ],
    motif: "graph",
    summary: [
      "CMDB Cockpit is an AI-agent tool for ServiceNow CMDB intake and data quality, built from scratch during the KeenStack StackUp hackathon. Agents propose configuration items; humans approve them; the system promotes approved CIs into ServiceNow the right way — through Identification & Reconciliation — instead of blindly inserting records.",
      "I owned the ServiceNow integration layer: a from-scratch Table API and identify-reconcile bridge with module-enforced team scoping, request timeouts, and a classified error taxonomy (auth, ACL, conflict, timeout) surfaced directly in the UI, so failures are diagnosable instead of mysterious.",
    ],
    highlights: [
      "Wired a human-in-the-loop approval flow that creates CMDB identification rules and promotes approved CIs through ServiceNow's Identification & Reconciliation Engine — proving on a live instance that IRE matched a duplicate record instead of creating a second CI.",
      "Diagnosed a duplicate-rejection error that had been misread as an ACL failure; made rule creation idempotent with a pre-insert existence check.",
      "Every applied action writes a rollback snapshot first, so no change is irreversible.",
      "Consolidated three divergent branches into a single deployable main and migrated the agent pipeline to the OpenAI API — taking a run that stalled 10+ minutes on a free-tier model to under a minute.",
    ],
  },
  {
    slug: "referral-intelligence",
    name: "Rheum-Uveitis Referral Intelligence",
    short:
      "A ServiceNow AI proof of concept that automates specialist-referral and prior-authorization intake for rheumatoid arthritis and uveitis patients.",
    dates: "Jun 2026",
    team: "Team of 3 — KeenStack",
    role: "AI integration layer",
    stack: [
      "ServiceNow",
      "Now Assist Skill Kit",
      "Document Intelligence",
      "Flow Designer",
      "Scripted REST APIs",
    ],
    motif: "scan",
    summary: [
      "A scoped ServiceNow application that automates the intake of specialist referrals for RA and uveitis patients — work that is normally slow, manual, and error-prone. I owned the AI integration layer end to end.",
      "The system reads submitted referral PDFs, understands them, scores them, and writes structured results back to the record as the system of record — with every score explainable and deterministic, because healthcare workflows can't run on vibes.",
    ],
    highlights: [
      "Built a custom Now Assist Skill Kit skill that summarizes each referral, classifies condition type, and flags missing prior-authorization documentation (TB screening, step-therapy evidence, baseline labs, hepatitis screening) tuned to RA/uveitis payer requirements.",
      "Configured Now Assist Document Intelligence to auto-extract clinical data — labs, diagnosis, treatment history — from submitted referral PDFs, removing manual data entry.",
      "Engineered a Flow Designer pipeline and custom parser action that derives an explainable, deterministic AI confidence score from a clinical completeness checklist.",
    ],
  },
  {
    slug: "ai-memory-assistant",
    name: "AI Memory Assistant",
    short:
      "A personal RAG assistant in Python that ingests, indexes, and retrieves my own documents to answer questions with real context.",
    dates: "Apr 2026 — present",
    team: "Solo",
    role: "Everything",
    status: "in progress",
    stack: ["Python", "Retrieval-Augmented Generation"],
    motif: "memory",
    summary: [
      "An ongoing personal project: a retrieval-augmented generation assistant that ingests and indexes personal documents, then answers questions with the relevant context pulled back in — a memory that actually works.",
      "Built deliberately, milestone by milestone: the document ingestion pipeline is the foundation, with retrieval and answer synthesis layered on top.",
    ],
    highlights: [
      "Designed and implemented a document ingestion pipeline as the foundation of the system.",
      "Structured the project for iterative, milestone-based development with a complete Python development environment.",
    ],
  },
  {
    slug: "go-together",
    name: "Go Together",
    short:
      "A cross-platform mobile app for secure K-12 school carpool scheduling — ASU capstone, built for a real client.",
    dates: "Fall 2024 — Spring 2025",
    team: "Team of 4 — Go Together Inc.",
    role: "Mobile developer",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "MVVM"],
    motif: "route",
    summary: [
      "My ASU capstone: a production-minded mobile app for Go Together Inc. that lets school families coordinate carpools safely — the kind of app where auth, data integrity, and real-time state all have to hold up.",
      "Four of us built it across two semesters on an MVVM architecture, with weekly agile sprint meetings with real stakeholders.",
    ],
    highlights: [
      "Developed a cross-platform mobile app for secure school carpool scheduling in Flutter.",
      "Implemented login/sign-up, profile setup, trip scheduling, and real-time updates.",
      "Integrated Firebase Authentication and Firestore for data storage and retrieval.",
      "Collaborated via GitHub with weekly agile sprints and stakeholder demos.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
