import styles from "./Details.module.scss";
import { IDetails } from "../../types/Job";

export default function Details({ details }: IDetails) {
  return (
    <div className={styles.details}>
      <h3>Szczegóły oferty</h3>
      <div className={styles.detailsWrapper}>
        {details.map((detail) => (
          <button>{detail}</button>
        ))}
      </div>
    </div>
  );
}
