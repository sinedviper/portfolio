import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA: Root = {
  name: "Denis Repyev",
  initials: "DR",
  url: "https://sinedviper.com",
  location: "Odessa, UK",
  locationLink: "https://www.google.com/maps/place/odessa",
  description:
    "Fullstack developer with 4+ years of experience. Building web and mobile apps, AI pipelines, and scalable systems. Passionate about clean code and mentorship.",
  summary: `I have over 4 years of experience as a Fullstack developer. My programming journey started at university, where I studied C#, C++, Java, JavaScript, and TypeScript. I began my professional career as a Fullstack intern at Bulgaria BulBank, working on frontend projects: fixing bugs, optimizing code, and implementing new features. After that, I joined Digital Invest Advisor as a Frontend React developer, where I built key functionality, worked with WebSocket, WebRTC, Firebase, Google Maps API, Redux Toolkit, and Web Audio, contributing to projects like Moow Landing, Moow, and Tentai.

  Currently, I work at Incant, a startup where I contributed to multiple platforms including Incant, Mentme, Globasity, Gymate, Kuku, Enforcy, and BeachMe. In these projects, I work across both frontend and backend: developing UI components, profile pages, cards, forms, editors, and interactive workflows; designing and implementing APIs with Node.js, NestJS, and Hono; handling data processing, database schemas, migrations, batch processing, and ensuring data consistency. I also build mobile applications with React Native and Expo, fully publishing them to the App Store and Google Play. Additionally, I develop AI and automation pipelines for document analysis, image generation, and multi-step workflows using OpenAI, Gemini, Anthropic, and FalAi.

  I specialize in creating scalable, maintainable, and high-performance systems, and I enjoy optimizing code, reducing duplication, and applying best practices such as KISS, DRY, and SOLID. I am passionate about mentoring and collaborating with teammates to improve code quality, architecture, and product experience.`,
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Hono",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
    "Radix UI",
    "React Native",
    "Expo",
    "Docker",
    "Google Cloud",
    "AI / LLM pipelines",
  ],
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
      company: "Incant (Startup)",
      href: "https://tryincant.com/",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer",
      logoUrl: "/incant.webp",
      start: "April 2024",
      end: "Present",
      description:
        "Worked on multiple web and mobile platforms with fullstack development, contributing to frontend, backend, and AI features; developed and maintained React Native iOS/Android apps, successfully publishing to App Store and Google Play; built UI components, profile pages, cards, forms, editors, and interactive workflows, improving UX, performance, and page logic; designed and implemented backend APIs with Node.js/NestJS and Hono, handling data processing, migrations, batch jobs, retries, and data consistency; built AI-powered automation pipelines (RAG, MCP) for document analysis, schema extraction, multi-step workflows, image generation, chunking, and deduplication using OpenAI, Gemini, and Mistral; integrated authentication systems including Kinde, Better Auth, and social logins with session management, password recovery, and access control; managed infrastructure and developer tooling such as Turborepo + pnpm, Docker, ESLint/Prettier/Biome, CI/CD pipelines, and Jest, while conducting code reviews and mentoring developers; worked with databases and cloud platforms including Supabase, PostgreSQL/Neon, Redis, Firebase, and Google Cloud for storage, messaging, background tasks, and deployments; key projects include Incant (dynamic workflow builder with node creation, connections, template loading, and element search), Kuku (AI-driven media generation interface with backend model management and file storage), Gymate (user dashboards, workout tracking, analytics, backend APIs, and database schema management), and BeachMe (authentication and user profiles with email/password and social login, session handling, password recovery, and profile management).",
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
      description:
        "Developed and optimized frontend architecture in React, including components, routing, and state management; implemented user registration and authentication with Google login; built chat functionality, video/audio calls, audio messages, and notification systems using WebSocket, WebRTC, and WebAudio; handled file uploads and downloads with proper storage and processing; wrote reusable and testable TypeScript/JavaScript code with unit tests; optimized performance and ensured cross-browser compatibility.",
    },
    {
      company: "BulBank",
      href: "https://www.unicreditbulbank.bg/en/individual-clients/",
      badges: [],
      location: "Plovdiv, Bulgaria",
      title: "Fullstack Developer",
      logoUrl: "/bulbank.webp",
      start: "February 2022",
      end: "July 2022",
      description:
        "Created and optimized reusable front-end components, built a fullstack Telegram clone, developed REST API foundations and fixed existing requests, resolved various front-end bugs, and implemented websites using HTML, CSS/SCSS, JavaScript, and TypeScript.",
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
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
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
