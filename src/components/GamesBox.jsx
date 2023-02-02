import React from 'react';
import styles from './GamesBox.module.css';

function GamesBox({ data, companyChart, choose }) {

  data = companyChart ? data.info[companyChart].games : data.units

  return (
    <div className={styles.box}>
      {data.map((game, index) => (
        <div
          key={index + game.name}
          className={styles.item}
        >
          <span className={styles.position}>{game.position}</span>
          <div className={styles.info}>
            <p className={styles.name}>{game.name}</p>
            <p className={styles.score}>{game[choose]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GamesBox;
