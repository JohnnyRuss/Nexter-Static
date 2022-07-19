import styles from './storyPictures.module.scss';

function StoryPictures() {
  return (
    <div className={styles.storyPictures}>
      <img
        src='/assets/story-1.jpeg'
        alt='customers'
        className={`${styles.image} ${styles['image--1']}`}
      />
      <img
        src='/assets/story-2.jpeg'
        alt='new house'
        className={`${styles.image} ${styles['image--2']}`}
      />
    </div>
  );
}

export default StoryPictures;
