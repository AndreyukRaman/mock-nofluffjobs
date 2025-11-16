import styles from "./Rate.module.scss";
import { useState } from "react";

interface Props {
  emojis: string[];
  labels: string[];
}
export default function Rate(props: Props) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <div className={styles.rate}>
      <p>Oceń tę ofertę</p>

      <div className={styles.emojiList}>
        {props.emojis.map((emoji, i) => (
          <div
            key={i}
            className={`${styles.emojiWrapper} ${hoverIndex !== null && hoverIndex !== i ? styles.faded : ""}`}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {hoverIndex === i && <span className={styles.tooltip}>{props.labels[i]}</span>}
            <span className={styles.emoji}>{emoji}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
