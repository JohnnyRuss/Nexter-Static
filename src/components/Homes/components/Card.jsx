import styles from './card.module.scss';
import { Icon } from '../../Layouts';

function Card({ house }) {
  return (
    <div className={styles.home}>
      <img src={house.image} alt={`house:${house.title}`} className={styles.image} />
      <Icon iconSrc='heart-full' className={`${styles.houseIcon} ${styles.heartIcon}`} />
      <h5 className={styles.title}>{house.title}</h5>
      <div className={styles.listItem}>
        <Icon iconSrc='map-pin' className={styles.houseIcon} /> {house.location}
      </div>
      <div className={styles.listItem}>
        <Icon iconSrc='profile-male' className={styles.houseIcon} /> {house.rooms} rooms
      </div>
      <div className={`${styles.listItem} ${styles.space}`}>
        <Icon iconSrc='expand' className={styles.houseIcon} /> {house.space}m
        <sup className={styles.cube}>2</sup>
      </div>
      <div className={styles.listItem}>
        <Icon iconSrc='key' className={styles.houseIcon} /> ${house.price}
      </div>
      <button className={styles.button}>contact realtor</button>
    </div>
  );
}

export default Card;
