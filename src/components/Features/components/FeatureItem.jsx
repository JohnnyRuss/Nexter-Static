import styles from './featureItem.module.scss';
import { Icon } from '../../Layouts';

function FeatureItem({ feature }) {
  return (
    <div className={styles.feature}>
      <Icon iconSrc={feature.icon} className={styles.featureIcon} />
      <h4 className={styles.featureHeading}>{feature.title}</h4>
      <p className={styles.featureText}>{feature.text}</p>
    </div>
  );
}

export default FeatureItem;
