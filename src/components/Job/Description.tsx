import styles from "./Description.module.scss";
import { Languages } from "lucide-react";

export default function Description() {
  return (
    <div className={styles.description}>
      <h3>Opis oferty</h3>
      <div className={styles.translate}>
        <Languages size={20} />
        <p>Oryginalny tekst.</p>
        <button>Pokaż tłumaczenie</button>
      </div>

      <div className={styles.description}>
        <ul>
          <li>
            The opportunity to work on a variety of small and large projects, enhancing your
            portfolio.
          </li>
          <li>A collaborative environment where you can influence how you want to work.</li>
          <li>Freedom to explore new solutions involving cutting-edge technology.</li>
          <li>
            Opportunities to learn new techniques, tools, and programming languages through regular
            exchanges of expertise with colleagues.
          </li>
          <li>Attractive salary and benefits package.</li>
          <li>
            A flexible work environment in a brand new office that prioritizes a good work-life
            balance.
          </li>
        </ul>
      </div>
    </div>
  );
}
