import styles from "./AboutCompany.module.scss";
import { Flag, Users, Home, ArrowRight } from "lucide-react";

interface Props {
  name: string;
  founded: string;
  size: string;
  locations: string;
}

export default function AboutCompany({ name, founded, size, locations }: Props) {
  return (
    <section className={styles.about}>
      <div className={styles.header}>
        <h3>
          O firmie <span>{name}</span>
        </h3>
        <ArrowRight className={styles.arrow} />
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.item}>
          <Flag size={18} />
          <div>
            <p className={styles.label}>Utworzona w:</p>
            <p className={styles.value}>{founded}</p>
          </div>
        </div>

        <div className={styles.item}>
          <Users size={18} />
          <div>
            <p className={styles.label}>Wielkość firmy:</p>
            <p className={styles.value}>{size}</p>
          </div>
        </div>

        <div className={styles.item}>
          <Home size={18} />
          <div>
            <p className={styles.label}>Lokalizacje:</p>
            <p className={styles.value}>{locations}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
