import styles from './components/feature.module.scss';
import FeatureItem from './components/FeatureItem';
import { features } from '../../lib';

function Features() {
  return (
    <div className={styles.features}>
      {features.map((feature) => (
        <FeatureItem feature={feature} key={feature.id} />
      ))}
    </div>
  );
}

export default Features;
