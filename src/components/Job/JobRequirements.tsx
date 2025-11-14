import styles from "./JobRequirements.module.scss";
import { JobRequirementsProps } from "../../types/job";

export default function JobRequirements({ requirements, additionalReqs }: JobRequirementsProps) {
  return (
    <div className={styles.reqContainer}>
      <h3>Obowiązkowe</h3>
      <div className={styles.requirements}>
        {requirements.map((req) => (
          <button>{req}</button>
        ))}
      </div>
      <h3>Mile widziane</h3>
      <div className={styles.additional}>
        {additionalReqs.map((add) => (
          <button>{add}</button>
        ))}
      </div>
    </div>
  );
}
