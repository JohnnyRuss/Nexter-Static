import styles from "./partners.module.scss"

function Partners() {
  return (
    <div className={styles.logos}>
      <img src='/assets/logo-bbc.png' alt='partner company logo' className={styles.logo} />
      <img src='/assets/logo-forbes.png' alt='partner company logo' className={styles.logo} />
      <img src='/assets/logo-techcrunch.png' alt='partner company logo' className={styles.logo} />
      <img src='/assets/logo-bi.png' alt='partner company logo' className={styles.logo} />
    </div>
  );
}

export default Partners;
