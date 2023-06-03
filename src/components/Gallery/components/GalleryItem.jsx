import styles from "./galleryItem.module.scss";

function GalleryItem({ item }) {
  return (
    <figure className={`${styles.imageBox} gallery-img`}>
      <img src={item.img} alt="house intieriers" className={styles.image} />
    </figure>
  );
}

export default GalleryItem;
