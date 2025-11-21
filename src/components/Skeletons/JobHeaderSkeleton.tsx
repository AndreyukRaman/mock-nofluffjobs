import styles from "./JobSkeleton.module.scss";

export default function JobHeaderSkeleton() {
  return (
    <div className={styles.headerCard}>
      <div className={styles.logo}></div>

      <div className={styles.headerContent}>
        <div className={styles.title}></div>
        <div className={styles.company}></div>
        <div className={styles.location}></div>

        <div className={styles.tagsRow}>
          <div className={styles.tag}></div>
          <div className={styles.tag}></div>
          <div className={styles.tag}></div>
        </div>
      </div>
    </div>
  );
}
