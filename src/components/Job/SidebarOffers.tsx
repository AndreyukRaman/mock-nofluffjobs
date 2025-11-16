import styles from "./SidebarOffers.module.scss";
import { Jobs } from "../../types/Job";
import { Bookmark, Building2, MapPin } from "lucide-react";

interface Props {
  otherJobs: Jobs[];
}

export default function SidebarOffers(props: Props) {
  return (
    <div className={styles.offerContainer}>
      <h2>ZOBACZ PODOBNE OFERTY</h2>
      {props.otherJobs.map((job) => (
        <div className={styles.jobCard}>
          <div className={styles.logoWrapper}>
            <img src={job.logo} alt="logo" />
          </div>
          <div className={styles.infoWrapper}>
            <h5>{job.title}</h5>
            <button>{job.salary}</button>
            <ul>
              {job.skills.map((skill) => (
                <li key={skill}>
                  <button>{skill}</button>
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
        </div>
      ))}
    </div>
  );
}
