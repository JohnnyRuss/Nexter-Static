import styles from './footerNav.module.scss';
import FooterNavItem from './FooterNavItem';

function FooterNav() {
  return (
    <nav className='nav'>
      <ul className={styles.navList}>
        <FooterNavItem path='#' caption='find your dream house' />
        <FooterNavItem path='#' caption='request proposal' />
        <FooterNavItem path='#' caption='download home planner' />
        <FooterNavItem path='#' caption='contact us' />
        <FooterNavItem path='#' caption='submit your property' />
        <FooterNavItem path='#' caption='come work with us' />
      </ul>
    </nav>
  );
}

export default FooterNav;
