import React from "react";
import styles from './Ball.module.css'

const Ball = ({ company, average, index, actived, setActived }) => {
  return (
    <div
      onMouseEnter={() => setActived(index)}
      onMouseLeave={() => setActived(null)}
      className={`${styles.ball} ${actived === index && styles.actived}`}
    >
      <p className={styles.company}>{company}</p>
      <p className={styles.average}>{average}</p>
    </div>
  );
};

export default Ball