import styles from "./JobRequirements.module.scss";
import { StrapiAdditionalReq, StrapiRequirement } from "../../types/Job";

interface Props {
  requirements: StrapiRequirement[];
  additionalReqs: StrapiAdditionalReq[];
}

export default function JobRequirements({ requirements, additionalReqs }: Props) {
  return (
    <div className={styles.reqContainer}>
      <h3>Obowiązkowe</h3>
      <div className={styles.requirements}>
        {requirements.map((req) => (
          <button>{req.requirement}</button>
        ))}
      </div>
      <h3>Mile widziane</h3>
      <div className={styles.additional}>
        {additionalReqs.map((add) => (
          <button>{add.additionalReq}</button>
        ))}
      </div>
    </div>
  );
}
