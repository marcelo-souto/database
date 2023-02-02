<<<<<<< HEAD
import React from 'react';
import styles from './GamesBox.module.css';
import Counter from '../components/helper/Counter';

function GamesBox({ data, companyChart, choose }) {
  let infoCompany;

  if (companyChart !== null) {
    infoCompany = data.info[companyChart];
    data = data.info[companyChart].games;
  } else {
    data = data.units;
  }

  return (
    <div className={styles.container}>
      {infoCompany && (
        <div className={`${styles.companyInfo} comeFromBottom`}>
          <div>
            <p className={styles.company}>{infoCompany.company}</p>
            <p className={styles.quantity}>
              <span>{infoCompany.quantity}</span> jogos
            </p>
          </div>
          <p className={styles.percent}>{infoCompany.percent}%</p>
        </div>
      )}
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
    </div>
  );
}

export default GamesBox;
=======
import React from 'react';
import styles from './GamesBox.module.css';
import Counter from '../components/helper/Counter';

function GamesBox({ data, companyChart, choose }) {
  let infoCompany;

  if (companyChart !== null) {
    infoCompany = data.info[companyChart];
    data = data.info[companyChart].games;
  } else {
    data = data.units;
  }

  return (
    <div className={styles.container}>
      {infoCompany && (
        <div className={`${styles.companyInfo} comeFromBottom`}>
          <div>
            <p className={styles.company}>{infoCompany.company}</p>
            <p className={styles.quantity}>
              <span>{infoCompany.quantity}</span> jogos
            </p>
          </div>
          <p className={styles.percent}>{infoCompany.percent}%</p>
        </div>
      )}
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
    </div>
  );
}

export default GamesBox;
>>>>>>> 0110a05 (pages)
