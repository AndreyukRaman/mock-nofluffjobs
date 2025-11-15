import styles from "./Steps.module.scss";
import { ISteps } from "../../types/Job";

export default function Steps({ steps }: ISteps) {
  return (
    <div className={styles.steps}>
      <h3>Kroki w procesie rekrutacyjnym</h3>
      <ul className={styles.numberedList}>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
}
