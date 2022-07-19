import styles from './storyContent.module.scss';

function StoryContent() {
  return (
    <div className={styles.storyContent}>
      <h3 className={styles.headingTertiary}>happy custumers</h3>
      <h2 className={styles.headingSecondary}>&ldquo;the best decision of our live&rdquo;</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus exercitationem vero quos
        ipsa blanditiis, perferendis at error deleniti. Corporis, sequi!
      </p>
      <button className={styles.button}>find your own home</button>
    </div>
  );
}

export default StoryContent;
