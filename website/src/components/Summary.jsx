import React from 'react';
import styles from './Summary.module.css';

function Summary({ page, setPage, totalPages }) {
  const pages = Array(totalPages).fill(undefined);

  return (
    <div className={styles.container}>
      {pages.map((item, index) => (
        <div
          key={'page' + index}
          onClick={() => setPage(index + 1)}
          className={`${styles.dot} ${page === index + 1 ? styles.active : ''}`}
        ></div>
      ))}
    </div>
  );
}

export default Summary;
