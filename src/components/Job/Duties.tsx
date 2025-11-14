import styles from "./Duties.module.scss";
import { Languages } from "lucide-react";
import { useState } from "react";

interface Props {
  items: string[];
}

export default function Duties({ items }: Props) {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded ? items : items.slice(0, 6);

  return (
    <div className={styles.duties}>
      <h3>Zakres obowiązków</h3>

      <div className={styles.translate}>
        <Languages size={20} />
        <p>Oryginalny tekst.</p>
        <button>Pokaż tłumaczenie</button>
      </div>

      <div className={styles.dutiesList}>
        <ul className={styles.numberedList}>
          {visibleItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {items.length > 6 && (
          <div className={styles.showMoreWrapper}>
            <button className={styles.toggleButton} onClick={() => setExpanded(!expanded)}>
              {expanded ? "Pokaż mniej" : `Pokaż wszystko (${items.length})`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
