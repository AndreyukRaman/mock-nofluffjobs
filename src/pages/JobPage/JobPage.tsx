import styles from "./JobPage.module.scss";
import { Link } from "react-router-dom";
import { ArrowLeft, MessagesSquare } from "lucide-react";
import JobHeader from "../../components/Job/JobHeader";
import JobRequirements from "../../components/Job/JobRequirements";
import { Job, IDetails, ISteps, StrapiJobListItem, StrapiJobSingle } from "../../types/Job";
import Skills from "../../components/Job/Skills";
import Description from "../../components/Job/Description";
import Duties from "../../components/Job/Duties";
import Details from "../../components/Job/Details";
import Steps from "../../components/Job/Steps";
import Equipment from "../../components/Job/Equipment";
import ChecklistSection from "../../components/Job/ChecklistSection";
import SidebarSalary from "../../components/Job/SidebarSalary";
import Rate from "../../components/Job/Rate";
import SidebarOffers from "../../components/Job/SidebarOffers";
import AboutCompany from "../../components/Job/AboutCompany";
import SubscribeFooter from "../../components/Footer/SubscribeFooter";
import { useEffect, useState } from "react";
import SidebarOffersSkeleton from "../../components/SidebarOffersSkeleton";
import { useParams } from "react-router-dom";

export default function JobPage() {
  const [jobs, setJobs] = useState<StrapiJobListItem[]>([]);
  const [jobData, setJobData] = useState<StrapiJobSingle | null>(null);
  const [loader, setLoader] = useState(false);

  const { id } = useParams(); // /job/:id

  //jobs list
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoader(true);
        const res = await fetch(
          "https://useful-freedom-0408a0c57a.strapiapp.com/api/jobs?populate=*",
        );

        const json = await res.json();

        if (!res.ok) {
          console.error("Bad response:", json);
          return;
        }

        console.log(json.data);

        const formatted: StrapiJobListItem[] = json.data.map((item: any) => {
          return {
            id: item.id,
            documentId: item.documentId,
            title: item.title,
            salary: item.salary,
            company: item.company,
            location: item.location,

            skills:
              item.skills?.map((s: any) => ({
                id: s.id,
                name: s.name,
              })) || [],

            logo: item.logo ? { url: item.logo.url } : undefined,
          };
        });
        setJobs(formatted);
      } catch (err) {
        console.error("FETCH ERROR:", err);
      } finally {
        setLoader(false);
      }
    };

    fetchJobs();
  }, []);

  //single job
  useEffect(() => {
    // if (!id) return;

    const fetchSingleJob = async () => {
      try {
        console.log("▶ Fetching single job");
        const documentId = "mt9yd4rzn1vlkstricu3z9xd";
        const res = await fetch(
          `https://useful-freedom-0408a0c57a.strapiapp.com/api/jobs/${documentId}?populate=*`,
        );

        const json = await res.json();

        if (!res.ok) {
          console.error("❌ Error fetching job:", json);
          return;
        }

        console.log("✔ SINGLE JOB:", json.data);

        const item = json.data;

        const formatted: StrapiJobSingle = {
          id: item.id,
          // documentId: item.documentId,
          title: item.title,
          salary: item.salary,
          company: item.company,
          location: item.location,
          level: item.level,
          validUntil: item.validUntil,
          workLocation: item.workLocation,

          skills:
            item.skills?.map((s: any) => ({
              id: s.id,
              name: s.name,
            })) || [],

          requirements:
            item.requirements?.map((r: any) => ({
              id: r.id,
              requirement: r.requirement,
            })) || [],

          additionalReqs:
            item.additionalReqs?.map((a: any) => ({
              id: a.id,
              additionalReq: a.additionalReq,
            })) || [],

          logo: item.logo?.url || null,
        };

        setJobData(formatted);
      } catch (err) {
        console.error("❌ SINGLE JOB FETCH ERROR:", err);
      }
    };

    fetchSingleJob();
  }, [id]);

  // const job: Job = {
  //   companyLogo: "/public/VaimoLogo.jpg",
  //   title: "Frontend Developer",
  //   companyName: "Vaimo",
  //   categories: ["Frontend", "React"],
  //   level: "Mid",
  //   location: "Wroclaw, Szczytnicka 11, Business Link",
  //   validUntil: "2025-12-03 (zostalo 19 dni)",
  // };

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

  const labels: string[] = ["Bardzo źle", "Źle", "Średnio", "Dobrze", "Bardzo dobrze"];
  const emojis: string[] = ["😫", "🙁", "😕", "🙂", "😃"];
  //
  // const jobs: StrapiJobPayload[] = [
  //   {
  //     title: "Senior Frontend developer",
  //     salary: "21 840 – 26 880 PLN",
  //     skills: ["Frontend", "React", "JavaScript", "CSS"],
  //     company: "Fream",
  //     logo: "/icons/logo1.svg",
  //     location: "Wroclaw",
  //   },
  //   {
  //     title: "Frontend Developer (React, Golang)",
  //     salary: "20 160 – 23 520 PLN",
  //     skills: ["Frontend", "JavaScript", "TypeScript", "React"],
  //     company: "Devire",
  //     logo: "/icons/logo7.svg",
  //     location: "Zdalnie",
  //   },
  //   {
  //     title: "Mid React Developer",
  //     salary: "13 000 – 16 500 PLN",
  //     skills: ["Frontend", "React", "JavaScript", "TypeScript"],
  //     company: "Link Group",
  //     logo: "/icons/logo2.svg",
  //     location: "Zdalnie",
  //   },
  //   {
  //     title: "Senior React Developer",
  //     salary: "18 000 – 23 000 PLN",
  //     skills: ["Frontend", "React", "TypeScript", "JavaScript"],
  //     company: "Link Group",
  //     logo: "/icons/logo3.svg",
  //     location: "Zdalnie",
  //   },
  //   {
  //     title: "Senior Frontend Developer",
  //     salary: "23 100 PLN",
  //     skills: ["Frontend", "NgRx", "Angular", "TypeScript"],
  //     company: "Upvanta",
  //     logo: "/icons/logo4.svg",
  //     location: "Zdalnie +1",
  //   },
  //   {
  //     title: "Mid/Senior Frontend Developer",
  //     salary: "11 300 – 22 000 PLN",
  //     skills: ["Frontend", "React", "JavaScript", "TypeScript"],
  //     company: "Blurfiy",
  //     logo: "/icons/logo5.svg",
  //     location: "Wroclaw",
  //   },
  //   {
  //     title: "Frontend Developer (React)",
  //     salary: "16 800 – 18 900 PLN",
  //     skills: ["Frontend", "React", "JavaScript", "TypeScript"],
  //     company: "Onwelo Sp. z o.o.",
  //     logo: "/icons/logo6.svg",
  //     location: "Zdalnie +2",
  //   },
  //   {
  //     title: "Senior Frontend developer",
  //     salary: "21 840 – 26 880 PLN",
  //     skills: ["Frontend", "React", "JavaScript", "CSS"],
  //     company: "Fream",
  //     logo: "/icons/logo1.svg",
  //     location: "Wroclaw",
  //   },
  //   {
  //     title: "Frontend Developer (React, Golang)",
  //     salary: "20 160 – 23 520 PLN",
  //     skills: ["Frontend", "JavaScript", "TypeScript", "React"],
  //     company: "Devire",
  //     logo: "/icons/logo7.svg",
  //     location: "Zdalnie",
  //   },
  //   {
  //     title: "Mid React Developer",
  //     salary: "13 000 – 16 500 PLN",
  //     skills: ["Frontend", "React", "JavaScript", "TypeScript"],
  //     company: "Link Group",
  //     logo: "/icons/logo2.svg",
  //     location: "Zdalnie",
  //   },
  //   {
  //     title: "Senior React Developer",
  //     salary: "18 000 – 23 000 PLN",
  //     skills: ["Frontend", "React", "TypeScript", "JavaScript"],
  //     company: "Link Group",
  //     logo: "/icons/logo3.svg",
  //     location: "Zdalnie",
  //   },
  //   {
  //     title: "Senior Frontend Developer",
  //     salary: "23 100 PLN",
  //     skills: ["Frontend", "NgRx", "Angular", "TypeScript"],
  //     company: "Upvanta",
  //     logo: "/icons/logo4.svg",
  //     location: "Zdalnie +1",
  //   },
  //   {
  //     title: "Mid/Senior Frontend Developer",
  //     salary: "11 300 – 22 000 PLN",
  //     skills: ["Frontend", "React", "JavaScript", "TypeScript"],
  //     company: "Blurfiy",
  //     logo: "/icons/logo5.svg",
  //     location: "Wroclaw",
  //   },
  //   {
  //     title: "Frontend Developer (React)",
  //     salary: "16 800 – 18 900 PLN",
  //     skills: ["Frontend", "React", "JavaScript", "TypeScript"],
  //     company: "Onwelo Sp. z o.o.",
  //     logo: "/icons/logo6.svg",
  //     location: "Zdalnie +2",
  //   },
  // ];

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
            {jobData && <JobHeader job={jobData} />}
            <JobRequirements requirements={requirements} additionalReqs={additionalReqs} />
            <Skills />
            <Description />
            <Duties items={dutiesItems} />
            <Details details={details} />
            <Steps steps={steps} />
            <Equipment />
            <ChecklistSection
              title="Metodologia"
              items={[
                "Agile management",
                "Knowledge repository",
                "Code reviews",
                "Version control system",
              ]}
              color="#6B8EF2"
            />

            <ChecklistSection
              title="Udogodnienia w biurze"
              items={["Darmowa kawa", "Strefa rozrywki", "Bez wymaganego dress code'u"]}
              color="#A66CF2"
            />

            <ChecklistSection
              title="Benefity"
              items={[
                "Prywatna opieka medyczna",
                "Pakiet sportowy",
                "Budżet na szkolenia",
                "Międzynarodowe projekty",
                "Małe zespoły",
                "Płaska struktura",
              ]}
              color="#36C2A6"
            />
            <div className={styles.breadcrumbsWrapperLeft}>
              <div className={styles.breadcrumbs}>
                <span>React</span>
                <span>&gt; Frontend</span>
                <span>&gt; Remote</span>
                <span>&gt; Frontend Developer</span>
              </div>
            </div>
            <AboutCompany name="Vaimo" founded="2008" size="600+" locations="Stockholm +15" />
          </main>

          <aside className={styles.sidebar}>
            <SidebarSalary min={14000} max={22500} />
            <Rate emojis={emojis} labels={labels} />
            {loader ? <SidebarOffersSkeleton /> : <SidebarOffers jobs={jobs} />}

            {/* TODO*/}
          </aside>
        </div>
        <div className={styles.footerWrapper}>
          <SubscribeFooter />
        </div>
      </div>
      <button className={styles.chatButton}>
        <MessagesSquare />
      </button>
    </div>
  );
}
