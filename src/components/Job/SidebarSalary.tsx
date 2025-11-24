import styles from "./SidebarSalary.module.scss";
import { MoreVertical } from "lucide-react";

interface Props {
  salary: string;
  currency?: string;
  b2b?: boolean;
}

export default function SidebarSalary({ salary, currency = "PLN", b2b = true }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.salary}>
        <p className={styles.range}>
          {salary} {currency}
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
