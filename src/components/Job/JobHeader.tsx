import styles from "./JobHeader.module.scss";
import { MapPin, Home, Calendar } from "lucide-react";

import type { Job } from "../../types/Job";

interface Props {
    job: Job;
}

export default function JobHeader({ job }: Props) {
    return (
        <div className={styles.header}>

            {/* LEFT COLUMN — LOGO */}
            <div className={styles.logoWrapper}>
                <img src={job.companyLogo} alt={job.companyName} />
            </div>

            {/* RIGHT CONTENT */}
            <div className={styles.content}>

                {/* TITLE + COMPANY */}
                <h1 className={styles.title}>{job.title}</h1>

                <a className={styles.company}>
                    {job.companyName} <span>→</span>
                </a>

                {/* DETAILS GRID */}
                <div className={styles.detailsGrid}>

                    {/* ROW 1 */}
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <img src="/icons/react.svg" alt="React" className={styles.icon} />
                            <span className={styles.label}>Kategoria:</span>
                            <strong>{job.categories.join(", ")}</strong>
                        </div>

                        <div className={styles.right}>
                            <strong>{job.level}</strong>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    {/* ROW 2 */}
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <Home size={16} />
                            <span>Praca zdalna</span>
                        </div>

                        <div className={styles.right}>
                            <MapPin size={16} />
                            <div className={styles.locationText}>
                                <span>{job.location}</span>
                                <a className={styles.mapLink}>zobacz na mapie</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    {/* ROW 3 */}
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <Calendar size={16} />
                            <span>
                                Oferta ważna do: <strong>{job.validUntil}</strong>
                            </span>
                        </div>

                        <div className={styles.right}></div>
                    </div>

                </div>
            </div>
        </div>
    );
}
