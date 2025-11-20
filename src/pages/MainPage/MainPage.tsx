import styles from "./MainPage.module.scss";

import { Bookmark, Building2, MapPin, MessagesSquare } from "lucide-react";
import { StrapiJobListItem } from "../../types/Job";
import { JSX, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SubscribeFooter from "../../components/Footer/SubscribeFooter";

interface Props {
  jobs: StrapiJobListItem[];
}

export default function MainPage(props: Props): JSX.Element {
  const [jobs, setJobs] = useState<StrapiJobListItem[]>([]);
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

  return (
    <div className={styles.page}>
      {/* OUTER CONTAINER – 1900px */}
      <div className={styles.outer}>
        {/* INNER CONTAINER – 1200px */}
        <div className={styles.inner}>
          <main className={styles.main}>
            <div className={styles.offerContainer2}>
              <h2> OFERTY</h2>
              {jobs?.map((job) => (
                <Link to={`/job/${job.documentId}`} className={styles.jobCard2}>
                  <div className={styles.logoWrapper}>
                    {job.logo?.url && <img src={job.logo.url} alt={job.title} />}
                  </div>
                  <div className={styles.infoWrapper}>
                    <h5>{job.title}</h5>
                    <button>{job.salary}</button>
                    <ul>
                      {job.skills?.map((skill) => (
                        <li key={skill.id}>
                          <button>{skill.name}</button>
                        </li>
                      ))}
                    </ul>
                    <div className={styles.detailsRow}>
                      <span>
                        {" "}
                        <Building2 size={14} />
                        {job.company}
                      </span>
                      <span>
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>

                    <Bookmark className={styles.bookmark} />
                  </div>
                </Link>
              ))}
            </div>
          </main>
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
