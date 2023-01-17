import { useEffect, useState } from "react";

import styles from "./galleryItem.module.scss";
import calcImageDimention from "../../../lib/calcImageDimention";

function GalleryItem({ item }) {
  const [cl, setCl] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCl(calcImageDimention(item.img));
    }, 150);
  }, []);

  return (
    <figure className={`${styles.imageBox} ${styles[cl]}`}>
      <img
        src={item.img}
        alt="house intieriers"
        loading="eager"
        className={styles.image}
      />
    </figure>
  );
}

export default GalleryItem;
