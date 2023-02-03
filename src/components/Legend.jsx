<<<<<<< HEAD
import React from 'react';
import styles from './Legend.module.css';

function Legend({ data, setCompanyChart }) {

  return (
    <div className={styles.legend}>
      {data.map(({ company, color, quantity }, index) => (
        <div
          onClick={() => {
            if (quantity > 0) setCompanyChart(index)
          }}
          key={company + index}
          className={styles.label}
        >
          <div
            className={styles.reference}
            style={{ background: color }}
          ></div>
          <p className={styles.company}>{company}</p>
        </div>
      ))}
    </div>
  );
}

export default Legend;
=======
import React from 'react';
import styles from './Legend.module.css';

function Legend({ data, setCompanyChart }) {

  return (
    <div className={styles.legend}>
      {data.map(({ company, color, quantity }, index) => (
        <div
          onClick={() => {
            if (quantity > 0) setCompanyChart(index)
          }}
          key={company + index}
          className={styles.label}
        >
          <div
            className={styles.reference}
            style={{ background: color }}
          ></div>
          <p className={styles.company}>{company}</p>
        </div>
      ))}
    </div>
  );
}

export default Legend;
>>>>>>> 0110a05 (pages)
