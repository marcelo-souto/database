import React from "react";
import useFetch from "../hooks/useFetch";
import { getGreatestGamesByCritic } from "../api/api";
import EyearSelect from "../components/helper/EyearSelect";
import Button from "../components/Form/Button/Button";
import style from "./TheBestGames.module.css";
import GamesBox from "../components/Bar/GamesBox";

const TheBestGames = () => {
  const [choose, setChoose] = React.useState({
    firstChoose: "",
    secondChoose: "",
    thirdChoose: "",
    fourthChoose: null,
    fifthChoose: null,
  });
  
  const { loading, data, error, request } = useFetch();

  const buscar = async () => {
    async function getData() {
      const { url, options } = getGreatestGamesByCritic({ ...choose });
      await request(url, options);
      setChoose({ ...choose, thirdChoose: choose.firstChoose });
    }
    getData();
  };

  return (
    <div className={style.container}>
    
      <div className={`${style.inputs} comeFromBottom`}>
        <h1>Escolha uma opção</h1>

        <div className={style.btns}>
          <Button
            actived={choose.firstChoose}
            onClick={() =>
              setChoose({
                ...choose,
                firstChoose: "Usuário",
                fourthChoose: true,
              })
            }
            text="Usuário"
          />

          <Button
            actived={choose.firstChoose}
            onClick={() =>
              setChoose({
                ...choose,
                firstChoose: "Critica",
                fourthChoose: true,
              })
            }
            text="Critica"
          />
        </div>

        {choose.fourthChoose && (
          <div>
            <div className={`${style.select} comeFromBottom`}>
              <h1>Escolha o ano</h1>
              <EyearSelect
                onchange={(e) =>
                  setChoose({
                    ...choose,
                    secondChoose: e.value,
                    fifthChoose: true,
                  })
                }
              />
            </div>

            {choose.fifthChoose && (
              <div className={`${style.search} comeFromBottom`}>
                <Button onClick={buscar} text="Buscar" />
              </div>
            )}
          </div>
        )}
      </div>

      {data && (
        <div className={`${style.games} comeFromRight`}>
          <h1>Melhores do ano</h1>

          <div className={style.tierlist}>
            <GamesBox data={data} choose={choose.thirdChoose}/>
          </div>
        </div>
      )}

    </div>
  );
};

export default TheBestGames;
