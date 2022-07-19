import styles from './components/realtor.module.scss';
import RealtorsList from './components/RealtorsList';
import { realtors } from '../../lib';

function Realtors() {
  return (
    <div className={styles.realtors}>
      <h3 className={styles.headingTertiary}>top 3 realtors</h3>
      <RealtorsList realtors={realtors} />
    </div>
  );
}

export default Realtors;
