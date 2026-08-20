export const site = {
  name: "Ethan Rivera",
  firstName: "Ethan",
  lastName: "Rivera",
  role: "Software Engineer",
  location: "Phoenix, AZ",
  tagline: "CS grad turning AI into working software",
  heroNote:
    "B.S. Computer Science, Arizona State University. Most recently building AI-powered ServiceNow applications at KeenStack.",
  email: "ethanjose1111@gmail.com",
  github: "https://github.com/EthanR03",
  linkedin: "https://www.linkedin.com/in/ethan-rivera",
  resume: "/resume.pdf",
  intro: [
    "I'm Ethan Rivera, a Computer Science (Software Engineering) graduate from Arizona State University. I build software where AI does real work — agents that keep enterprise data clean, pipelines that read clinical documents, assistants that actually remember.",
    "At KeenStack I shipped AI-powered intake tooling on the ServiceNow platform with Now Assist and Document Intelligence, and my hackathon team proved an AI-agent CMDB tool on a live instance. The part I care about most is the unglamorous engineering that makes AI trustworthy: validation, rollback safety, idempotent operations, and error taxonomies that tell you the truth.",
    "I work across the stack — Next.js and Node on the web, Flutter on mobile, Python for AI — and I'm looking for a full-time software engineering role where I can keep turning models into products.",
  ],
  facts: [
    { value: 4, suffix: "", label: "AI-powered projects shipped" },
    { value: 3, suffix: "", label: "platforms — web, mobile, ServiceNow" },
    { value: 7, suffix: "", label: "programming languages" },
    {
      value: 60,
      prefix: "<",
      suffix: "s",
      label: "agent pipeline runtime, down from 10+ min",
    },
  ],
} as const;
