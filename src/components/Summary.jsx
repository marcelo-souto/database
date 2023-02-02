import React from 'react';
import styles from './Summary.module.css';

function Summary() {
  const pages = new Array (5);
  console.log(pages)

  return (
    <div className={styles.container}>
      {pages.map(page => <p>Ola</p>)}
    </div>
  );
}

export default Summary;
