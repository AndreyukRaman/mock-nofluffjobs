import styles from "./SidebarOffers.module.scss";
import { Bookmark, Building2, MapPin } from "lucide-react";
import { StrapiJobListItem, StrapiSkill } from "../../types/Job";
import { Link } from "react-router-dom";

interface Props {
  jobs: StrapiJobListItem[];
}

export default function SidebarOffers(props: Props) {
  return (
    <div className={styles.offerContainer}>
      <h2>ZOBACZ PODOBNE OFERTY</h2>
      {props.jobs?.map((job) => (
        <Link key={job.id} to={`/job/${job.documentId}`} className={styles.jobCard}>
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
  );
}
