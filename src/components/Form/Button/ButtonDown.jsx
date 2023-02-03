import React from 'react';
import { ReactComponent as ArrowDown } from '../../../assets/downarrow.svg';
import styles from './ButtonNav.module.css'

function ButtonDown({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <ArrowDown />
    </button>
  );
}

export default ButtonDown;
