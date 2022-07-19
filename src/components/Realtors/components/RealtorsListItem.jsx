import styles from './realtorsListItem.module.scss';

function RealtorsListItem({ realtor }) {
  return (
    <div className={styles.realtor} key={realtor.id}>
      <img src={realtor.img} alt='company realtor' className={styles.image} />
      <div className={styles.realtorDetails}>
        <h4 className={styles.userName}>{realtor.name}</h4>
        <p className={styles.sold}>{realtor.solds} houses sold</p>
      </div>
    </div>
  );
}

export default RealtorsListItem;
