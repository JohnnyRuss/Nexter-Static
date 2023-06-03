import { useEffect } from "react";
import calcImageDimention from "../../lib/calcImageDimention";

import styles from "./components/gallery.module.scss";
import "./components/galleryGrid.scss";
import GalleryItem from "./components/GalleryItem";
import { galleryImages } from "../../lib";

function Gallery() {
  useEffect(() => {
    calcImageDimention();
  }, []);

  return (
    <div className={styles.gallery}>
      {galleryImages.map((item) => (
        <GalleryItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Gallery;
