import styles from "./MainPageJobsSkeleton.module.scss";

export default function MainPageJobsSkeleton() {
  const skeletons = Array.from({ length: 6 });

  return (
    <div className={styles.container}>
      <h2>OFERTY</h2>

      {skeletons.map((_, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.logo} />

          <div className={styles.info}>
            <div className={styles.title} />
            <div className={styles.row}>
              <div className={styles.skill} />
              <div className={styles.skill} />
              <div className={styles.skill} />
            </div>
            <div className={styles.details}>
              <div className={styles.detail} />
              <div className={styles.detail} />
            </div>
          </div>

          <div className={styles.bookmark} />
        </div>
      ))}
    </div>
  );
}
