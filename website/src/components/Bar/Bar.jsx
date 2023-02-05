import React from "react";
import styles from "./Bar.module.css";
import Counter from "../helper/Counter";


const Bar = ({onClick, company }) => {
  const [numb, setNumb] = React.useState(
    Math.round((company.games.length * 1200) / 18800)
  );
  const [newNumb, setNewNumb] = React.useState(0);
 
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (newNumb < numb) setNewNumb(newNumb + 1);
    }, 4);

    return () => clearTimeout(timeout);
  }, [newNumb]);

  if (numb >= 0)
    return (
      <div >

        <div  className={styles.cont}>

          <div onClick={onClick} className={styles.wrapper}>
            <p className={styles.companyTitle}>{company.name}</p>
            <p className={styles.percentValue}>{`${(newNumb / 10).toFixed(
              1
            )}%`}</p>
          </div>

          <div className={styles.Bar}>
            <div
              className={styles.percentBar}
              style={{
                width: `${newNumb / 10}%`,
              }}
            ></div>
          </div>

        </div>

  
      </div>
    );
};

export default Bar;
