<<<<<<< HEAD
import React from 'react';
import styles from './Button.module.css';

function Button({ onClick, text, actived }) {
  return (
    <button
      className={`${styles.button} ${text === actived && styles.actived}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
=======
import React from 'react';
import styles from './Button.module.css';

function Button({ onClick, text, actived }) {
  return (
    <button
      className={`${styles.button} ${text === actived && styles.actived}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
>>>>>>> 0110a05 (pages)
