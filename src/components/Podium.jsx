import React from 'react';
import styles from './Podium.module.css';
import { ReactComponent as PodiumImage } from '../assets/podium.svg';
import { ReactComponent as CrownIcon } from '../assets/crown-icon.svg';

function Podium({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.wrapper}>
        <PodiumImage className={styles.podium} />

        <div className={styles.fplace}>
          <p className={styles.rating}>{data[1].meta_score}</p>
          <p className={styles.name}>{data[1].name}</p>
          <p className={styles.releaseyear}>{data[1].release_year}</p>
        </div>
        <div className={styles.splace}>
          <CrownIcon className={styles.crown} />
          <p className={styles.rating}>{data[0].meta_score}</p>
          <p className={styles.name}>{data[0].name}</p>
          <p className={styles.releaseyear}>{data[0].release_year}</p>
        </div>
        <div className={styles.tplace}>
          <p className={styles.rating}>{data[2].meta_score}</p>
          <p className={styles.name}>{data[2].name}</p>
          <p className={styles.releaseyear}>{data[2].release_year}</p>
        </div>
      </div>
    </div>
  );
}

export default Podium;
