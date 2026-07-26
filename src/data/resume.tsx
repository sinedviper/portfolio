import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA: Root = {
  name: "Denis Repyev",
  initials: "DR",
  url: "https://sinedviper.com",
  resume: "/Denis_Repyev_Full_Stack_Resume.pdf",
  location: "Odessa, UK",
  locationLink: "https://www.google.com/maps/place/odessa",
  description:
    "Fullstack developer with 5 years of experience. Building backend services, cloud infrastructure, AI pipelines, and web and mobile apps. Passionate about scalable architecture and mentorship.",
  summary: `Full Stack Developer with 5 years of experience building web applications end-to-end, with a strong focus on backend development and infrastructure. Works primarily with TypeScript and JavaScript.

Backend. APIs and services with Node.js and NestJS — database schemas, migrations, and data processing; async job processing with BullMQ and Redis; API caching and request throttling; Google and Apple authentication; payment integration with Stripe. Databases: PostgreSQL, MongoDB, Neon, and Firebase, with Pinecone for vector search, using Prisma ORM, TypeORM, and Drizzle Kit.

Infrastructure & deployment. Containerized deployment with Docker and CI/CD pipelines; AWS — S3, ECS, RDS, IAM, and CloudWatch Logs; a full observability stack with Prometheus, Loki, Node Exporter, and Grafana; load testing with k6.

AI integrations. OpenAI GPT, Anthropic, and Gemini for file generation (pdf, docx), chat systems with custom instructions, image analysis, and internet search. Built image generation pipelines that train custom models from user photos and generate new images from them.

Frontend. Performant, cross-browser interfaces with React, Next.js, and Tailwind CSS; mobile apps with React Native and Expo, published to the App Store and Google Play; real-time features with WebSocket, WebRTC, and Web Audio; authentication flows with Google, Apple, Facebook, email, and phone.

Engineering approach. Building scalable, maintainable systems — reducing duplication and applying KISS, DRY, and SOLID. Mentors junior developers and contributes to architectural decisions.`,
  avatarUrl: "/me.webp",
  skills: {
    languages: ["TypeScript", "JavaScript"],

    frontend: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Radix UI",
      "Shadcn UI",
      "Redux Toolkit",
      "Zustand",
      "Jotai",
      "TanStack Query",
      "Web RTC",
      "Web Audio",
      "Web Socket",
    ],

    mobile: ["React Native", "Expo", "App Store / Google Play publishing"],

    backend: [
      "Node.js",
      "NestJS",
      "Hono",
      "Fastify",
      "REST API",
      "Socket.io",
      "BullMQ",
      "Cron Jobs",
      "Zod",
      "class-validator",
      "Joi",
      "Sharp",
      "Stripe",
    ],

    databases: [
      "PostgreSQL",
      "MongoDB",
      "Neon",
      "Supabase",
      "Firebase",
      "Redis",
      "Pinecone",
      "Prisma ORM",
      "Type ORM",
      "Drizzle ORM",
    ],

    authentication: [
      "Google Auth",
      "Apple Auth",
      "Facebook Auth",
      "Firebase Auth",
      "Email & phone authentication",
    ],

    infrastructure: [
      "Docker",
      "AWS (S3, ECS, RDS, IAM, CloudWatch Logs)",
      "Google Cloud",
      "CI/CD (GitHub Actions)",
      "Turborepo",
      "pnpm",
      "npm",
      "bun",
      "Git / GitHub",
    ],

    monitoring: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Node Exporter",
      "k6 (load testing)",
    ],

    ai: [
      "OpenAI API",
      "Anthropic Claude API",
      "Gemini API",
      "FalAi",
      "AI / LLM pipelines",
      "RAG",
      "Image generation & analysis",
      "PDF / DOCX generation",
    ],

    ["testing & quality"]: ["Jest", "ESLint", "Prettier"],
  },
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "sinedviper@gmail.com",
    tel: "+380668077237",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sinedviper",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sinedviper/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Stealth Startup",
      href: "",
      badges: [],
      location: "Remote",
      title: "FullStack Developer",
      logoUrl: "/s.webp",
      start: "August 2025",
      end: "Present",
      description: `- Developing new features and optimizing backend processes on the projects with NestJS, working within a monorepo setup.
- Migrated and refactored business logic between services, improving storage structure and code reuse across the codebase.
- Designed and maintained PostgreSQL schemas and migrations, and optimized slow queries — reducing response times from around 2s down to 200ms.
- Conducted load testing with k6 across multiple server scenarios to find the most efficient configuration, doubling throughput as a result.
- Implemented API caching, request throttling, and full async job processing with BullMQ and Redis for background and scheduled tasks.
- Set up a complete observability stack with Prometheus, Loki, Node Exporter, and Grafana, building dashboards and running it in Docker.
- Implemented WebSocket communication backed by Redis across all required endpoints and wrote the accompanying socket documentation for the team.
- Integrated Stripe payments and authentication flows with Google and Apple sign-in, including session management and access control.
- Implemented AI-powered community validation using the OpenAI API to automatically review user-submitted content.
- Worked with AWS services — S3 for file storage, ECS for container deployment, RDS for managed databases, IAM for access management, and CloudWatch Logs for monitoring.
- Set up and maintained CI/CD pipelines and Docker-based deployment, conducted code reviews, and mentored developers.
- Developed two multilingual, SEO-optimized landing pages with Next.js.`,
    },
    {
      company: "Incant",
      href: "https://tryincant.com/",
      badges: [],
      location: "Remote",
      title: "FullStack Developer",
      logoUrl: "/incant.webp",
      start: "April 2024",
      end: "August 2025",
      description: `- Worked on multiple web and mobile platforms as a fullstack developer across frontend, backend, and AI features.
- Developed and maintained React Native iOS and Android apps, published end-to-end to the App Store and Google Play.
- Built UI components, cards, forms, editors, and interactive workflows with Next.js and Tailwind CSS, improving UX, performance, and page logic.
- Built backend APIs with Node.js, NestJS, and Hono — data processing, migrations, batch jobs, retries, and data consistency.
- Built AI-powered automation pipelines (RAG, MCP) for document analysis, schema extraction, multi-step workflows, image generation, chunking, and deduplication using OpenAI, Anthropic, Gemini, and Mistral.
- Implemented AI features: file generation (PDF, DOCX), chat systems, image analysis, and web search.
- Integrated authentication systems — Kinde, Better Auth, and social logins — with session management, password recovery, and access control.
- Managed infrastructure and developer tooling: Turborepo + pnpm, Docker, ESLint/Prettier, CI/CD pipelines, and Jest; conducted code reviews and mentored developers.
- Worked with databases and cloud platforms — Supabase, PostgreSQL/Neon, MongoDB, Redis, Firebase, and Google Cloud — using Prisma ORM and Drizzle Kit for storage, messaging, background tasks, and deployments.

Key projects:
- Gymate — fitness platform built solo end-to-end: trainer web app for workout programs, meal plans, and client progress reports, plus a client mobile app with workout logging, calorie tracking, and AI food recognition from photos.
- BeachMe — beach reservation app with payments (frontend + backend): owners lay out tables, chairs, and sunbeds; clients find beaches via Google Maps and book and pay for specific spots.
- Kuku — voice-driven notes and reminders app with AI transcription and processing; built frontend and backend.
- Incant — dynamic workflow builder with node creation, connections, template loading, and element search.`,
    },
    {
      company: "<DIA/>",
      badges: [],
      href: "https://digitalitadvisor.com/",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/dia.webp",
      start: "August 2022",
      end: "April 2024",
      description: `- Developed and optimized the frontend architecture in React — components, routing, and state management with Redux Toolkit.
- Implemented user registration and authentication with Firebase Auth, including Google login, and ensured website security.
- Built chat functionality, video and audio calls, audio messages, and notification systems using WebSocket, WebRTC, and Web Audio.
- Integrated the Google Maps API for location-based features across the marketplace.
- Handled file uploads and downloads through REST APIs, ensuring proper storage and processing.
- Wrote reusable and testable TypeScript/JavaScript code, covered by unit tests.
- Optimized performance and ensured cross-browser compatibility.

Key projects:
- Moow — classifieds marketplace where users post listings and sell goods directly to buyers, in the style of OLX.
- Moow Landing — marketing site presenting the Moow marketplace and driving user sign-ups.
- Tentai — the same marketplace product, built for the Asian market.`,
    },
    {
      company: "BulBank",
      href: "https://www.unicreditbulbank.bg/en/individual-clients/",
      badges: [],
      location: "Plovdiv, Bulgaria",
      title: "FullStack Developer",
      logoUrl: "/bulbank.webp",
      start: "February 2022",
      end: "July 2022",
      description: `- Created simple components and optimization components
- Successful Telegram clone as a fullstack developer
- Developed RestApi foundation and corrected exist requests
- Fixed different bugs as a front-end developer and created general components
- Coded websites using HTML, CSS/SCSS, JS, TS`,
    },
  ],
  education: [
    {
      school: "University by Paisii Hilendarski",
      href: "https://uni-plovdiv.bg/en/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/university.webp",
      start: "2018",
      end: "2022",
    },
    {
      school: "Odessa Technical Vocational College",
      href: "https://otfk.od.ua/",
      degree: "Diploma in Computer Engineering, Vocational Secondary Education",
      logoUrl: "/college.webp",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://chatcollect.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
  ],
  hackathons: [],
} as const;

export interface Root {
  name: string;
  initials: string;
  resume: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: Record<string, string[]>;
  navbar: Navbar[];
  contact: Contact;
  work: Work[];
  education: Education[];
  projects: Project[];
  hackathons: Hackathon[];
}

export interface Navbar {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
}

export interface Contact {
  email: string;
  tel: string;
  social: Social;
}

export interface Social {
  GitHub: Media;
  LinkedIn: Media;
}

export interface Media {
  name: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  navbar: boolean;
}

export interface Work {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}

export interface Education {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
}

export interface Project {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: Link[];
  image: string;
  video: string;
}

export interface Link {
  type: string;
  href: string;
  icon: React.ReactNode;
}

export interface Hackathon {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  links: Link2[];
  win?: string;
}

export interface Link2 {
  title: string;
  icon: React.ReactNode;
  href: string;
}
