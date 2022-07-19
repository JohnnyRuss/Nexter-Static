import styles from './galleryItem.module.scss';
import calcImageDimention from '../../../lib/calcImageDimention';

function GalleryItem({ item }) {
  return (
    <figure className={`${styles.imageBox} ${styles[calcImageDimention(item.img)]}`} >
      <img src={item.img} alt='house intieriers' className={styles.image} />
    </figure>
  );
}

export default GalleryItem;
