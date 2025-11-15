import styles from "./ChecklistSection.module.scss";
import { Check } from "lucide-react";

interface Props {
  title: string;
  items: string[];
  color: string;
}

export default function ChecklistSection({ title, items, color }: Props) {
  return (
    <div className={styles.section}>
      <h3>{title}</h3>

      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <span className={styles.icon} style={{ borderColor: color, background: `${color}15` }}>
              <Check size={14} color={color} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
