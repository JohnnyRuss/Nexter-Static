import styles from './components/footer.module.scss';
import FooterNav from './components/FooterNav';

function Footer() {
  return (
    <div className={styles.footer}>
      <FooterNav />
      <p className={styles.copyright}>&copy; copyright by Jonas Schmedtmann</p>
    </div>
  );
}

export default Footer;
