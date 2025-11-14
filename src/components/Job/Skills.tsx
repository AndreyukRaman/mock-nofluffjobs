import styles from "./Skills.module.scss";
import { Languages } from "lucide-react";

export default function Skills() {
  return (
    <div className={styles.skills}>
      <h3>Opis wymagań</h3>
      <div className={styles.translate}>
        <Languages size={20} />
        <p>Oryginalny tekst.</p>
        <button>Pokaż tłumaczenie</button>
      </div>

      <div className={styles.description}>
        <p>Technical Skills:</p>
        <ul>
          <li>Experience: 3 years of commercial experience with web development.</li>
          <li>Proficiency in JavaScript and familiarity with React and Next.js.</li>
          <li>Understanding of headless CMS platforms (e.g., Contentful, Sanity).</li>
          <li>Familiarity with version control systems (e.g., Git).</li>
        </ul>

        <p>Soft Skills:</p>
        <ul>
          <li>Strong problem-solving skills and a willingness to learn.</li>
          <li>
            Curiosity to explore how AI can enhance frontend development and digital experiences.
          </li>
          <li>Excellent communication skills and a team-oriented mindset.</li>
          <li>Upper-intermediate English proficiency.</li>
        </ul>
      </div>
    </div>
  );
}
