import styles from "./SidebarSalary.module.scss";
import { MoreVertical } from "lucide-react";

interface Props {
  min: number;
  max: number;
  currency?: string;
  b2b?: boolean;
}

export default function SidebarSalary({ min, max, currency = "PLN", b2b = true }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.salary}>
        <p className={styles.range}>
          {min.toLocaleString()} – {max.toLocaleString()} {currency}
        </p>

        <p className={styles.sub}>+ VAT ({b2b ? "B2B" : "UoP"}) miesięcznie</p>

        <button className={styles.calc}>oblicz "na rękę"</button>
      </div>

      <div className={styles.actions}>
        <button className={styles.history}>Sprawdź historię statusów</button>
        <button className={styles.more}>
          <MoreVertical size={18} color="#2563eb" />
        </button>
      </div>
    </div>
  );
}
