import styles from "./SidebarOffersSkeleton.module.scss";

export default function SidebarOffersSkeleton() {
  const skeletons = Array.from({ length: 8 });

  return (
    <div className={styles.offerContainer}>
      <h2>ZOBACZ PODOBNE OFERTY</h2>

      {skeletons.map((_, i) => (
        <div key={i} className={styles.jobCard}>
          <div className={styles.logoWrapper}>
            <div className={styles.skeletonLogo}></div>
          </div>

          <div className={styles.infoWrapper}>
            <div className={styles.skeletonTitle}></div>
            <div className={styles.skeletonSalary}></div>

            <ul className={styles.skillsSkeleton}>
              <li className={styles.skeletonSkill}></li>
              <li className={styles.skeletonSkill}></li>
              <li className={styles.skeletonSkill}></li>
            </ul>

            <div className={styles.detailsRow}>
              <span className={styles.skeletonLine}></span>
              <span className={styles.skeletonLine}></span>
            </div>

            <div className={styles.skeletonBookmark}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
