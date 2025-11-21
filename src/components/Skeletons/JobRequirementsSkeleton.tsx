import styles from "./JobSkeleton.module.scss";

export default function JobRequirementsSkeleton() {
  return (
    <div className={styles.reqCard}>
      <div className={styles.sectionTitle}></div>

      <div className={styles.reqItem}></div>
      <div className={styles.reqItem}></div>
      <div className={styles.reqItem}></div>
      <div className={styles.reqItemShort}></div>

      <div className={styles.sectionTitleSmall}></div>

      <div className={styles.reqItem}></div>
      <div className={styles.reqItem}></div>
    </div>
  );
}
