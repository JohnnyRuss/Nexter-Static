import styles from './components/header.module.scss';
import Partners from './components/Partners';

function Header() {
  return (
    <div className={styles.header}>
      <img src='/assets/logo.png' alt='logo' className={styles.appLogo} />
      <h3 className={styles.headingTertiary}>your own home</h3>
      <h1 className={styles.heading}>the ultimate personal free</h1>
      <button className={styles.btn}>view our properties</button>
      <div className={styles.seenOn}>seen on</div>
      <Partners />
    </div>
  );
}

export default Header;
