import { StrapiJobPayload } from "./src/types/Job";

const STRAPI_URL = process.env.STRAPI_URL!;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN!;

const jobs: StrapiJobPayload[] = [
  {
    title: "Senior Frontend developer",
    salary: "21 840 – 26 880 PLN",
    company: "Fream",
    location: "Wroclaw",
    level: "Senior",
    validUntil: "2025-12-03 (zostalo 19 dni)",
    workLocation: "Hybrid",

    skills: [{ name: "Frontend" }, { name: "React" }, { name: "JavaScript" }, { name: "CSS" }],

    requirements: [
      { requirement: "React" },
      { requirement: "JavaScript" },
      { requirement: "Next.js" },
      { requirement: "CMS" },
      { requirement: "Contentfull" },
      { requirement: "Sanity" },
      { requirement: "Git" },
      { requirement: "Angielski (B2)" },
    ],

    additionalReqs: [
      { additionalReq: "CSS" },
      { additionalReq: "Tailwind" },
      { additionalReq: "REST API" },
    ],

    logo: "/icons/logo1.svg",
  },
  // {
  //   title: "Frontend Developer (React, Golang)",
  //   salary: "20 160 – 23 520 PLN",
  //   skills: [
  //     { name: "Frontend" },
  //     { name: "JavaScript" },
  //     { name: "TypeScript" },
  //     { name: "React" },
  //   ],
  //   company: "Devire",
  //   logo: "/icons/logo7.svg",
  //   location: "Zdalnie",
  // },
  // {
  //   title: "Mid React Developer",
  //   salary: "13 000 – 16 500 PLN",
  //   skills: [
  //     { name: "Frontend" },
  //     { name: "React" },
  //     { name: "JavaScript" },
  //     { name: "TypeScript" },
  //   ],
  //   company: "Link Group",
  //   logo: "/icons/logo2.svg",
  //   location: "Zdalnie",
  // },
  // {
  //   title: "Senior React Developer",
  //   salary: "18 000 – 23 000 PLN",
  //   skills: [
  //     { name: "Frontend" },
  //     { name: "React" },
  //     { name: "TypeScript" },
  //     { name: "JavaScript" },
  //   ],
  //   company: "Link Group",
  //   logo: "/icons/logo3.svg",
  //   location: "Зdalnie",
  // },
  // {
  //   title: "Senior Frontend Developer",
  //   salary: "23 100 PLN",
  //   skills: [{ name: "Frontend" }, { name: "NgRx" }, { name: "Angular" }, { name: "TypeScript" }],
  //   company: "Upvanta",
  //   logo: "/icons/logo4.svg",
  //   location: "Zdalnie +1",
  // },
  // {
  //   title: "Mid/Senior Frontend Developer",
  //   salary: "11 300 – 22 000 PLN",
  //   skills: [
  //     { name: "Frontend" },
  //     { name: "React" },
  //     { name: "JavaScript" },
  //     { name: "TypeScript" },
  //   ],
  //   company: "Blurfiy",
  //   logo: "/icons/logo5.svg",
  //   location: "Wroclaw",
  // },
  // {
  //   title: "Frontend Developer (React)",
  //   salary: "16 800 – 18 900 PLN",
  //   skills: [
  //     { name: "Frontend" },
  //     { name: "React" },
  //     { name: "JavaScript" },
  //     { name: "TypeScript" },
  //   ],
  //   company: "Onwelo Sp. z o.o.",
  //   logo: "/icons/logo6.svg",
  //   location: "Зdalnie +2",
  // },
];

async function importJob(job: StrapiJobPayload) {
  const payload = {
    title: job.title,
    salary: job.salary,
    company: job.company,
    location: job.location,
    level: job.level,
    validUntil: job.validUntil,
    workLocation: job.workLocation ?? "",

    skills: job.skills ?? [],
    requirements: job.requirements ?? [],
    additionalReqs: job.additionalReqs ?? [],

    // logo upload from dashboard
  };

  const res = await fetch(`${STRAPI_URL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    body: JSON.stringify({ data: payload }),
  });

  const json = await res.json();

  if (!res.ok) {
    console.log("❌", JSON.stringify(json, null, 2));
    return;
  }
}

//run
async function run() {
  for (const job of jobs) {
    await importJob(job);
  }

  console.log("🎉import created!");
}

run();
