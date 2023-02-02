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
          <p className={styles.company}>{company} / {quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default Legend;
