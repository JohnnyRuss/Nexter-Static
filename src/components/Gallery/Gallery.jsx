import styles from "./components/gallery.module.scss";
import GalleryItem from "./components/GalleryItem";
import { galleryImages } from "../../lib";

function Gallery() {
  return (
    <div className={styles.gallery}>
      {galleryImages.map((item) => (
        <GalleryItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Gallery;
