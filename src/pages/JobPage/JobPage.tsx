import styles from "./JobPage.module.scss";
import { Link } from "react-router-dom";
import { ArrowLeft, MessagesSquare } from "lucide-react";
import JobHeader from "../../components/Job/JobHeader";
import JobRequirements from "../../components/Job/JobRequirements";
import { Job, IDetails, ISteps } from "../../types/Job";
import Skills from "../../components/Job/Skills";
import Description from "../../components/Job/Description";
import Duties from "../../components/Job/Duties";
import Details from "../../components/Job/Details";
import Steps from "../../components/Job/Steps";
import Equipment from "../../components/Job/Equipment";

export default function JobPage() {
  const job: Job = {
    companyLogo: "/public/VaimoLogo.jpg",
    title: "Frontend Developer",
    companyName: "Vaimo",
    categories: ["Frontend", "React"],
    level: "Mid",
    location: "Wroclaw, Szczytnicka 11, Business Link",
    validUntil: "2025-12-03 (zostalo 19 dni)",
  };

  const requirements: string[] = [
    "React",
    "JavaScript",
    "Next.js",
    "CMS",
    "Contentfull",
    "Sanity",
    "Git",
    "Angielski(B2)",
  ];
  const additionalReqs: string[] = ["CSS", "Tailwind", "REST API"];

  const dutiesItems: string[] = [
    "User Interface Development: Develop and maintain user interfaces using JavaScript, React, and Next.js.",
    "Collaboration: Work closely with designers to implement visually appealing and functional web applications.",
    "Headless CMS Integration: Integrate headless CMS solutions like Contentful and Sanity into projects.",
    "Cloud Operations: Utilize cloud platforms like Vercel to build, deploy, and scale modern web applications and static sites.",
    "Code Reviews: Participate in code reviews and contribute to team discussions to enhance code quality and team collaboration.",
    "Mentorship: Provide guidance and support to junior developers, fostering a collaborative learning environment.",
    "Continuous Learning: Stay updated with the latest web development trends and technologies to enhance your skills and knowledge.",
  ];

  const details: IDetails = [
    "Rekrutacja online",
    "Start ASAP",
    "Praca w pełni zdalna",
    "Elastyczne godziny pracy",
  ];

  const steps: ISteps = ["Recruitment call", "Technical interview", "Manager interview"];

  return (
    <div className={styles.page}>
      {/* OUTER CONTAINER – 1900px */}
      <div className={styles.outer}>
        {/* WRAPPER — 1200px */}
        <div className={styles.breadcrumbsWrapper}>
          <div className={styles.breadcrumbs}>
            <Link to="/">
              <ArrowLeft size={18} />
              Powrot do Wyszukiwania
            </Link>
            <span>&gt; React</span>
            <span>&gt; Frontend</span>
            <span>&gt; Remote</span>
            <span>&gt; Frontend Developer</span>
          </div>
        </div>
        {/* INNER CONTAINER – 1200px */}
        <div className={styles.inner}>
          <main className={styles.main}>
            <JobHeader job={job} />
            <JobRequirements requirements={requirements} additionalReqs={additionalReqs} />
            <Skills />
            <Description />
            <Duties items={dutiesItems} />
            <Details details={details} />
            <Steps steps={steps} />
            <Equipment />
          </main>

          <aside className={styles.sidebar}>{/* TODO*/}</aside>
        </div>
      </div>
      <button className={styles.chatButton}>
        <MessagesSquare />
      </button>
    </div>
  );
}
