import styles from "./SidebarOffers.module.scss";
import { Bookmark, Building2, MapPin } from "lucide-react";
import { StrapiJob } from "../../types/Job";

interface Props {
  jobs: StrapiJob[];
}

export default function SidebarOffers(props: Props) {
  return (
    <div className={styles.offerContainer}>
      <h2>ZOBACZ PODOBNE OFERTY</h2>
      {props.jobs?.map((job) => (
        <div className={styles.jobCard}>
          <div className={styles.logoWrapper}>
            <img src={job.logo?.url} alt="logo" />
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
        </div>
      ))}
    </div>
  );
}
