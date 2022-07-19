import styles from './components/homes.module.scss';
import Card from './components/Card';
import { availableHouses } from '../../lib';

function Homes() {
  return (
    <div className={styles.homes}>
      {availableHouses.map((house) => (
        <Card house={house} key={house.id} />
      ))}
    </div>
  );
}

export default Homes;
