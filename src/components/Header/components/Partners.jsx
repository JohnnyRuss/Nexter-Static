import styles from "./partners.module.scss"

function Partners() {
  return (
    <div className={styles.logos}>
      <img src='/assets/logo-bbc.webp' alt='partner company logo' className={styles.logo} />
      <img src='/assets/logo-forbes.webp' alt='partner company logo' className={styles.logo} />
      <img src='/assets/logo-techcrunch.webp' alt='partner company logo' className={styles.logo} />
      <img src='/assets/logo-bi.webp' alt='partner company logo' className={styles.logo} />
    </div>
  );
}

export default Partners;
