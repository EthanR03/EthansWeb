export type Role = {
  title: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
  tech: string[];
};

export const experience: Role[] = [
  {
    title: "ServiceNow Developer Intern",
    org: "KeenStack",
    location: "Chandler, AZ",
    dates: "May 2026 — Jul 2026",
    bullets: [
      "Developed and customized scoped applications on the ServiceNow platform, including AI-powered intake solutions built with Now Assist Skill Kit and Document Intelligence.",
      "Authored Business Rules to automate server-side logic and enforce data validation across records.",
      "Wrote Client Scripts to control form behavior and improve the end-user experience.",
      "Built UI Actions and Flow Designer automations to streamline workflows and add custom functionality to forms and lists.",
    ],
    tech: ["ServiceNow", "Now Assist", "Document Intelligence", "Flow Designer", "JavaScript"],
  },
  {
    title: "Capstone Developer",
    org: "Go Together Inc. × ASU",
    location: "Tempe, AZ",
    dates: "Fall 2024 — Spring 2025",
    bullets: [
      "Built a cross-platform mobile app for secure K-12 school carpool scheduling with a four-person team, for a real client.",
      "Shipped login/sign-up, profile setup, trip scheduling, and real-time updates on an MVVM architecture.",
      "Integrated Firebase Authentication and Firestore; ran weekly agile sprints with stakeholders.",
    ],
    tech: ["Flutter", "Dart", "Firebase", "MVVM"],
  },
];
