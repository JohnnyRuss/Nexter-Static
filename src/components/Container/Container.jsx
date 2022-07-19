import styles from './container.module.scss';

function Container({children}) {
  return <div className={styles.mainContainer}>{children}</div>;
}

export default Container;
