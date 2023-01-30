import React from 'react';
import { ReactComponent as ArrowUp } from '../../../assets/uparrow.svg';
import styles from './ButtonNav.module.css'


function ButtonUp({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <ArrowUp />
    </button>
  );
}

export default ButtonUp;
