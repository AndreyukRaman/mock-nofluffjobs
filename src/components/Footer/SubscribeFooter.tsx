import styles from "./SubscribeFooter.module.scss";

export default function SubscribeFooter() {
  return (
    <section className={styles.subscribe}>
      <h2 className={styles.title}>OTRZYMUJ DOPASOWANE OFERTY PRACY</h2>

      <div className={styles.criteria}>
        Twoje kryteria: <span className={styles.tag}>Javascript</span>
      </div>

      <div className={styles.form}>
        <input type="email" placeholder="Adres e-mail *" />
        <button>Subskrybuj</button>
      </div>

      <label className={styles.checkbox}>
        <input type="checkbox" />
        Chcę otrzymywać nowe oferty pracy spełniające wybrane kryteria *
      </label>

      <label className={styles.checkbox}>
        <input type="checkbox" />
        Chcę otrzymywać informacje o wynagrodzeniach, trendach i innych ofertach IT
      </label>

      <div className={styles.benefitsBox}>
        <div className={styles.benefitsTitle}>
          Załóż konto lub subskrypcję ofert i skorzystaj z <b>dodatkowych benefitów:</b>
        </div>

        <div className={styles.benefitsGrid}>
          <div className={styles.item}>
            <img src="/icons/onet.svg" alt="Onet" />
            <p>90 dni prenumeraty Onet Premium</p>
          </div>

          <div className={styles.item}>
            <img src="/icons/infakt.svg" alt="Infakt" />
            <p>100 złotych rabatu na księgowość w inFakcie</p>
          </div>

          <div className={styles.item}>
            <img src="/icons/speechify.png" alt="Speechify" />
            <p>365 dni dostępu Speechify Premium</p>
          </div>
        </div>

        <div className={styles.note}>*Kody do Onet Premium są dostępne po wyczerpaniu zapasów.</div>
      </div>

      <div className={styles.disclaimer}>W każdej chwili możesz zrezygnować z subskrypcji</div>
    </section>
  );
}
