import styles from './logo.module.scss';

function Logo({ className }) {
  return (
    <figure className={`${className} ${styles.logoFigure}`}>
      <img src='/assets/logo.png' alt='trillo logo' className={styles.logo} />
    </figure>
  );
}

export default Logo;
