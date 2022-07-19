/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './footerNavItem.module.scss';

function FooterNavItem({ path, caption }) {
  return (
    <li className={styles.navListItem}>
      <a href={path} className={styles.navListItemLink}>
        {caption}
      </a>
    </li>
  );
}

export default FooterNavItem;
