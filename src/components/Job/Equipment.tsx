import styles from "./Equipment.module.scss";

export default function Equipment() {
  return (
    <div className={styles.equipment}>
      <h3>Sprzęt</h3>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src="/icons/apple.svg" alt="apple" /> <span>Apple</span>
        </div>
        <div className={styles.wrapper}>
          <img src="/icons/laptop.jpg" alt="laptop" />{" "}
          <span>
            {" "}
            Komputer: <br /> Notebook
          </span>
        </div>
        <div className={styles.wrapper}>
          <img src="/icons/monitor.jpg" alt="monitor" />{" "}
          <span>
            Monitory: <br /> Opcjonalnie{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
