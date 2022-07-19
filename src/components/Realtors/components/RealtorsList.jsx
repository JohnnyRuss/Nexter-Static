import styles from './realtorsList.module.scss';
import RealtorsListItem from './RealtorsListItem';

function RealtorsList({ realtors }) {
  return (
    <div className={styles.realtorsList}>
      {realtors.map((realtor) => (
        <RealtorsListItem realtor={realtor} key={realtor.id} />
      ))}
    </div>
  );
}

export default RealtorsList;
