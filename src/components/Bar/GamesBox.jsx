import React from 'react'
import style from './GamesBox.module.css'

const GamesBox = ({ data, choose }) => {

  return (
    <div className={style.cardGame}>
      {data.map((games, index) => (
        <div className={style.game} key={games.id}>

          <span className={style.highlighter}>{index + 1}</span>{" "}
        
          <div className={style.item}>
            <p>{games.name}</p>
            <span className={style.note}>{choose == "Usuário" ? games.user_review : games.meta_score}</span>
          </div>

        </div>))}
    </div>
  )
}

export default GamesBox
