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
      title: "Full Stack Developer",
      logoUrl: "/s.webp",
      start: "August 2025",
      end: "Present",
      description: `- Developed new features and optimized backend processes across projects built with NestJS in a monorepo setup.
- Migrated and refactored business logic between services, improving storage structure and code reuse across the codebase.
- Designed and maintained PostgreSQL schemas and migrations, and optimized slow queries — cutting response times from ~8s to ~300ms.
- Conducted load testing with k6 across multiple server scenarios to find the most efficient configuration, doubling throughput.
- Implemented API caching, request throttling, and full async job processing with BullMQ and Redis for background and scheduled tasks.
- Set up a complete observability stack — Prometheus, Loki, Node Exporter, and Grafana — with dashboards, running in Docker.
- Implemented Redis-backed WebSocket communication across all required endpoints and wrote the socket documentation for the team.
- Integrated Stripe payments and Google and Apple sign-in, including session management and access control.
- Implemented AI-powered community validation with the OpenAI API to automatically review user-submitted content.
- Deployed and operated services on AWS: S3, ECS, RDS, IAM, and CloudWatch Logs.
- Set up and maintained CI/CD pipelines and Docker-based deployment, conducted code reviews, and mentored developers.
- Developed two multilingual, SEO-optimized landing pages with Next.js.

Key projects:
- Judah — a gamified Bible study app with quizzes, reading streaks, leaderboards, and a community feed.
- TwoBetter — a relationship guide with gamified lessons and quizzes on emotional maturity, healing, and intentional dating.`,
    },
    {
      company: "Incant",
      href: "https://tryincant.com/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/incant.webp",
      start: "April 2024",
      end: "August 2025",
      description: `- Built AI-powered automation pipelines (RAG, MCP) for document analysis, schema extraction, multi-step workflows, image generation, chunking, and deduplication using OpenAI, Anthropic, Gemini, and Mistral.
- Trained custom image models from user photos and built the generation pipelines on top of them.
- Implemented AI features: file generation (pdf, docx), chat systems, image analysis, and web search.
- Built backend APIs with Node.js, NestJS, and Hono — data processing, migrations, batch jobs, retries, and data consistency.
- Developed and maintained React Native iOS and Android apps, published end-to-end to the App Store and Google Play.
- Built UI components, cards, forms, editors, and interactive workflows with Next.js and Tailwind CSS, improving UX, performance, and page logic.
- Designed and operated the data layer across Supabase, PostgreSQL/Neon, MongoDB, Redis, and Firebase with Prisma ORM and Drizzle Kit, deployed on Google Cloud.
- Integrated authentication systems — Kinde, Better Auth, and social logins — with session management, password recovery, and access control.
- Managed infrastructure and developer tooling: Turborepo + pnpm, Docker, ESLint/Prettier, CI/CD pipelines, and Jest; conducted code reviews and mentored developers.

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
      description: `- Developed and optimized the frontend architecture in React for two OLX-style marketplace platforms, one of them built for the Asian market — component structure, routing, and state management with Redux Toolkit.
- Built real-time communication end-to-end: chat, video and audio calls, voice messages, and notifications with WebSocket, WebRTC, and Web Audio.
- Implemented user registration and authentication with Firebase Auth, including Google login, with session handling and access control.
- Strengthened client-side security through token handling and storage, input validation, and file upload restrictions.
- Integrated the Google Maps API for location-based search and listing features across the marketplace.
- Implemented file upload and download over REST APIs with upload progress tracking and client-side file previews.
- Improved runtime performance through lazy loading, memoization of heavy components, and reduction of the existing codebase.
- Wrote reusable TypeScript/JavaScript modules covered by Jest unit tests.

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
      title: "Full Stack Developer",
      logoUrl: "/bulbank.webp",
      start: "February 2022",
      end: "July 2022",
      description: `- Built a Telegram clone end-to-end, covering both the React interface and the REST API behind it.
- Developed the REST API foundation and refactored existing request handlers.
- Created and optimized shared UI components reused across internal projects.
- Built responsive interfaces with HTML, CSS/SCSS, JavaScript and TypeScript.`,
    },
  ],
  education: [
    {
      school: "University by Paisii Hilendarski",
      href: "https://uni-plovdiv.bg/en/",
      degree: "Bachelor's Degree",
      logoUrl: "/university.webp",
      start: "2018",
      end: "2022",
    },
    {
      school: "Odesa Technical Vocational College",
      href: "https://otfk.od.ua/",
      degree: "Junior Specialist",
      logoUrl: "/college.webp",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "TwoBetter",
      href: "https://www.twobetterlearning.com/",
      dates: "Feb 2026 - Present",
      active: true,
      description:
        "TwoBetter Learning is a relationship guide that helps people build healthy connections, using gamified lessons and quizzes to explore emotional maturity, healing, and intentional dating, making growing in wisdom and love a little more fun and a little less overwhelming. It shares the same NestJS/PostgreSQL backend foundation as Judah, and I maintain and extend it here as well — async job processing with BullMQ and Redis, observability with Prometheus, Loki, and Grafana, OpenAI-based content validation, and SEO-optimized Next.js landing pages.",
      technologies: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "TypeORM",
        "Redis",
        "BullMQ",
        "Docker",
        "AWS",
        "Terraform",
        "Prometheus",
        "Loki",
        "Grafana",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.twobetterlearning.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/twobetter.webp",
      video: "",
    },
    {
      title: "Judah",
      href: "https://www.judahapp.com/",
      dates: "Aug 2025 - Present",
      active: true,
      description:
        "Judah turns Bible study into an adventure, with quizzes, reading streaks, a leaderboard, and a community of believers, making growing in faith a little more fun and a little less overwhelming. I work on the backend with NestJS, optimizing PostgreSQL queries and cutting response times from ~8s down to ~300ms, running k6 load tests that doubled throughput, and adding async job processing and caching with BullMQ and Redis. I set up observability with Prometheus, Loki, and Grafana in Docker, integrated OpenAI-based community content validation, and built SEO-optimized landing pages with Next.js.",
      technologies: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "TypeORM",
        "Redis",
        "BullMQ",
        "Docker",
        "AWS",
        "Terraform",
        "Prometheus",
        "Loki",
        "Grafana",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.judahapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/judah.webp",
      video: "",
    },
    {
      title: "BeachMe",
      href: "",
      dates: "Jul 2025 - Aug 2025",
      active: false,
      description:
        "BeachMe is a modern web application for booking seaside accommodations, where users can manage their profiles, authenticate via email/password or social logins (Google, Facebook), view payment history, and configure account security. I worked on the profile pages, implementing advanced user settings, password management, payment history, security options, account deletion, and integrating authentication and session management via Better Auth.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Radix UI",
        "Shadcn UI",
        "Drizzle ORM",
        "Neon.db",
        "Better Auth",
        "Formik",
        "Zod",
        "AWS S3",
        "Firebase",
        "i18n",
      ],
      links: [],
      image: "/beachme.webp",
      video: "",
    },
    {
      title: "Enforcy",
      href: "",
      dates: "May 2025 - Jul 2025",
      active: false,
      description:
        "Enforcy is a web app for AI-powered contract analysis, supporting PDF, DOCX, and TXT files with document viewing, text highlighting, and analytics dashboards. I optimized document upload and analysis logic, including chunking and batch processing, implemented search across document elements and policy mappings, built and improved UI components (document viewer, text highlighting, editor), integrated authentication via Kinde, managed file storage with Supabase, and set up error handling, retries, and data deduplication for the contract analysis pipeline.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "TailwindCSS",
        "Radix UI",
        "PlateJS",
        "Chart.js",
        "Supabase",
        "OpenAI API",
        "Kinde",
        "PostgreSQL",
        "Firebase",
        "Drizzle ORM",
        "Zod",
        "PDFLib",
        "Puppeteer",
      ],
      links: [],
      image: "/enforcy.webp",
      video: "",
    },
    {
      title: "FluxBoard",
      href: "",
      dates: "Jun 2025 - Jul 2025",
      active: false,
      description:
        "FluxBoard is a monorepo for a web dashboard and API built around a visual flow editor using React Flow, enabling users to create, edit, and save elements and connections, work with templates, and search for elements. I optimized the React Flow page logic — moving elements, creating new ones, deleting connections, and linking nodes — implemented opening and loading of existing templates with their elements and connections, and added search functionality for elements.",
      technologies: [
        "React",
        "React Flow",
        "TypeScript",
        "Redux Toolkit",
        "Vite",
        "NestJS",
        "Drizzle ORM",
        "Prisma ORM",
        "TypeORM",
        "PostgreSQL",
        "Docker",
        "Swagger",
        "OpenAI API",
        "Formik",
        "Yup",
        "Zod",
        "TailwindCSS",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Incant",
      href: "https://www.tryincant.com/",
      dates: "Sep 2024 - Jul 2025",
      active: false,
      description:
        "Incant Workflow Platform is a visual platform for building business workflows and websites with an integrated AI assistant, letting users design custom processes, integrate AI-powered chats, handle file uploads, and automate tasks. I integrated AI (OpenAI/Anthropic) into chats and workflows, built multi-chat with file upload and preview via AWS S3, improved the UI/UX for landing pages, forms, and the admin panel, implemented localization (i18n, RTL), and refactored APIs and integrations.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Drizzle ORM",
        "Prisma ORM",
        "PostgreSQL",
        "Supabase",
        "AWS S3",
        "Upstash Redis",
        "OpenAI API",
        "Anthropic Claude",
        "Google Gemini",
        "FalAi",
        "Better Auth",
        "Kinde",
        "React Flow",
        "Puppeteer",
        "PDFLib",
        "MCP",
        "i18n",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.tryincant.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/incant-site.webp",
      video: "",
    },
    {
      title: "Kuku",
      href: "",
      dates: "Jan 2025 - Jul 2025",
      active: false,
      description:
        "Kuku is a mobile reminders and notes app with AI-processed voice notes. On the mobile side (React Native, Expo Router) I implemented phone authentication with code verification, CRUD reminders with daily/weekly/monthly navigation, push notifications with deep links to reminder cards, audio reminders and file uploads, local caching, and UI/UX improvements with custom components and animations. On the backend (NestJS + PostgreSQL) I implemented JWT authentication, CRUD reminders, AI parsing of Hebrew text via OpenAI GPT-4o, audio-to-text transcription via OpenAI Whisper and Google Speech-to-Text, scheduled push notifications, S3 image storage, and Swagger-documented, strictly validated endpoints. I independently built and published the app on the App Store and Google Play.",
      technologies: [
        "React Native",
        "Expo",
        "Expo Router",
        "Redux Toolkit",
        "RTK Query",
        "AsyncStorage",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "TypeORM",
        "JWT",
        "OpenAI API",
        "Whisper",
        "Google Speech-to-Text",
        "AWS S3",
        "Firebase",
      ],
      links: [],
      image: "/kuku.webp",
      video: "",
    },
    {
      title: "Workflow",
      href: "",
      dates: "Jan 2025 - Jun 2025",
      active: false,
      description:
        "A platform for building and executing AI workflows using nodes and actions, supporting input/output handling, website and file analysis, OCR scans, structured text extraction (Schema Finder), multi-step execution, and multi-flow support. I built functionality for reading and processing scanned documents and various file formats and integrating them with existing actions, implemented image-model creation and image generation from those models, optimized the workflow execution core and runtime for readability and structure, and helped maintain platform stability and performance.",
      technologies: [
        "Bun",
        "TypeScript",
        "Hono",
        "Effect",
        "Docker",
        "MongoDB",
        "Supabase",
        "Upstash Redis",
        "OpenAI API",
        "Anthropic Claude",
        "Google Gemini",
        "FalAi",
        "Puppeteer",
        "PDFLib",
        "Drizzle ORM",
        "Prisma ORM",
        "Zod",
        "Kinde",
        "AWS S3",
        "PostgreSQL",
        "MCP",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Globasity",
      href: "https://globasity.com/",
      dates: "",
      active: false,
      description:
        "Globasity helps startups find ideal corporate partners using AI-driven matchmaking between startups and retailers. I built the frontend end-to-end, implementing the Startups, Retailers, Contacts, and Settings pages, and designed the UI/UX for all roles. I integrated Meilisearch for search and AI-driven matching, set up analytics with Mixpanel, built file uploads for logos and presentations with the UI and server API, and integrated Kinde to fetch and display user data in cards.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Framer Motion",
        "Radix UI",
        "Formik",
        "Yup",
        "Zod",
        "Meilisearch",
        "Mixpanel",
        "Kinde",
        "AWS S3",
        "PostgreSQL",
        "Drizzle ORM",
        "Supabase",
        "Firebase",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://globasity.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/globasity.webp",
      video: "",
    },
    {
      title: "Gymate",
      href: "https://apps.apple.com/us/app/gymate/id6737630272",
      dates: "Jun 2024 - Mar 2025",
      active: false,
      description:
        "Gymate is a fitness platform I built solo, end-to-end: a mobile app for clients and a web platform for personal trainers. The mobile app (React Native, Expo Router) covers workouts, check-ins/check-ups, a vault, calorie tracking, and AI-based calorie analysis from food photos, with native camera, gallery, PDF viewer, and notification integrations. The trainer web platform (Next.js + TypeScript) includes an admin panel, client management, a workout builder, a nutrition system with a kcal/macro calculator and AI analysis, check-ins and reports, and AWS S3 file storage, with Firebase Auth + JWT authentication and multilingual support. I published the mobile app to the App Store and Google Play myself.",
      technologies: [
        "React Native",
        "Expo",
        "Expo Router",
        "Next.js",
        "TypeScript",
        "React 18",
        "Redux Toolkit",
        "React Query",
        "NativeWind",
        "TailwindCSS",
        "Radix UI",
        "Framer Motion",
        "Formik",
        "React Hook Form",
        "Yup",
        "Zod",
        "PostgreSQL",
        "Neon.db",
        "Drizzle ORM",
        "Supabase",
        "Firebase Auth",
        "Kinde",
        "JWT",
        "AWS S3",
        "OpenAI API",
        "Twilio",
        "Puppeteer",
        "PDFLib",
        "Vercel API",
      ],
      links: [
        {
          type: "App Store",
          href: "https://apps.apple.com/us/app/gymate/id6737630272",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/gymate.webp",
      video: "",
    },
    {
      title: "Codenames",
      href: "https://github.com/sinedviper/codenames-client",
      dates: "Oct 2023 - Nov 2024",
      active: false,
      description:
        "A web version of the party game Codenames. Two teams each have a leader who gives a one-word clue pointing to one or more words on a shared board, trying to get their team to guess the matching words without picking the words that belong to the other team. A wrong guess ends the turn, and can cost the team a point or hand one to the opponent.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "TailwindCSS",
        "Shadcn UI",
        "Formik",
        "Zod",
        "NestJS",
        "Drizzle ORM",
        "TypeORM",
        "PostgreSQL",
        "Firebase",
        "Better Auth",
        "JWT",
      ],
      links: [
        {
          type: "Source Client",
          href: "https://github.com/sinedviper/codenames-client",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source Server",
          href: "https://github.com/sinedviper/codenames-server",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Tentai",
      href: "https://tentai.pro/",
      dates: "Dec 2023 - Apr 2024",
      active: false,
      description:
        "Tentai is the same OLX-style classifieds marketplace product as Moow, built and adapted for the Asian market. I worked on the frontend architecture, components, routing, and state management, and reused the core real-time communication features (chat, video/audio calls, notifications) and Google Maps integration from the Moow platform.",
      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Formik",
        "Zod",
        "WebSocket",
        "WebRTC",
        "WebAudio",
        "MongoDB",
        "JWT",
        "Webpack",
        "i18n",
      ],
      links: [
        {
          type: "Website",
          href: "https://tentai.pro/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tentai.webp",
      video: "",
    },
    {
      title: "Moow",
      href: "https://moow.pro/",
      dates: "Aug 2022 - Jan 2024",
      active: false,
      description:
        "Moow is an OLX-style marketplace where users post listings and sell goods directly to buyers. I developed key pages including authorization, filtering, chats, maps, order placement, and order tracking, along with reusable header, footer, and modal components. I also built real-time communication features — chat, video/audio calls, and audio messages with notifications using WebSocket, WebRTC, and Web Audio — and integrated the Google Maps API for location-based search and listings.",
      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Formik",
        "Zod",
        "WebSocket",
        "WebRTC",
        "WebAudio",
        "MongoDB",
        "JWT",
        "Webpack",
        "i18n",
      ],
      links: [
        {
          type: "Website",
          href: "https://moow.pro/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/moow.webp",
      video: "",
    },
    {
      title: "Moow (landing)",
      href: "",
      dates: "Aug 2022 - Nov 2022",
      active: false,
      description:
        "Moow Landing is the promotional landing page for Moow, an OLX-style marketplace for buying and selling goods. I worked on the frontend architecture, built reusable React components, implemented multi-language support (i18n), and translated Figma designs into responsive, pixel-accurate pages.",
      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Webpack",
        "HTML5",
        "CSS",
        "i18n",
      ],
      links: [],
      image: "/moow-app.webp",
      video: "",
    },
    {
      title: "Dove",
      href: "",
      dates: "Feb 2022 - Jul 2022",
      active: false,
      description:
        "Dove is a messaging app similar to Telegram, featuring real-time chats with media and emoji support, file sharing, notifications, and authentication. I developed the frontend (React, Redux Toolkit, Apollo Client), integrated the GraphQL API, implemented JWT-based authentication, and worked on the backend (Node.js, Express, Apollo Server, TypeORM, MySQL). I also added file uploads to AWS S3 and integrated email notifications via Nodemailer and Courier.",
      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Apollo Client",
        "Styled-components",
        "React Router",
        "Node.js",
        "Express",
        "Apollo Server",
        "GraphQL",
        "TypeORM",
        "MySQL",
        "AWS S3",
        "Multer",
        "Sharp",
        "Nodemailer",
        "Courier",
        "JWT",
        "bcrypt",
      ],
      links: [
        {
          type: "Website",
          href: "https://dove-client.vercel.app/login",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Client",
          href: "https://github.com/sinedviper/dove-client",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source Server",
          href: "https://github.com/sinedviper/dove-server",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dove.webp",
      video: "",
    },
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
