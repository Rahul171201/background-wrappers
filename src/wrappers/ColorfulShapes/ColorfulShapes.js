import styles from "./ColorfulShapes.module.css";

const ColorfulShapes = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.square} ${styles.squareOne}`}></div>
      <div className={`${styles.square} ${styles.squareTwo}`}></div>
      <div className={`${styles.square} ${styles.squareThree}`}></div>
      <div className={`${styles.square} ${styles.squareFour}`}></div>
      <div className={`${styles.square} ${styles.squareFive}`}></div>
      <div className={`${styles.circle} ${styles.circleOne}`}></div>
      <div className={`${styles.circle} ${styles.circleTwo}`}></div>
      <div className={`${styles.circle} ${styles.circleThree}`}></div>
      <div className={`${styles.circle} ${styles.circleFour}`}></div>
      <div className={`${styles.circle} ${styles.circleFive}`}></div>
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
};

export default ColorfulShapes;
