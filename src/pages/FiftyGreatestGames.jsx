import React from 'react';
import PieChart from '../components/PieChart';
import { getGreatestGamesByRating, getCompanies } from '../api/api';
import useFetch from '../hooks/useFetch';
import Loading from '../components/helper/Loading';
import GamesBox from '../components/GamesBox';
import styles from './FiftyGreatestGames.module.css';
import Button from '../components/Form/Button/Button';

const colors = {
  1: '#131626',
  2: '#1D2038',
  3: '#2D3259',
  4: '#484F8C',
  5: '#626CBF',
  6: '#7C89F2',
};

const opts = {
  crítica: 'meta_score',
  usuário: 'user_review',
};

function FiftyGreatestGames() {
  const { loading, error, request } = useFetch();
  const [choose, setChoose] = React.useState({ option: null, show: true });
  const [companies, setCompanies] = React.useState(null);
  const [games, setGames] = React.useState(null);
  const [companyChart, setCompanyChart] = React.useState(null);

  React.useEffect(() => {
    if (choose.option) {
      setGames(null);
      async function getData() {
        const { url, options } = getCompanies();
        let { response, json } = await request(url, options);
        if (response.ok) {
          json = json.reduce((prev, curr) => {
            return { ...prev, [curr.id]: curr.name };
          }, {});

          setCompanies(json);
        }
      }

      getData();
    }
  }, [choose.option]);

  React.useEffect(() => {
    if (companies && choose.option) {
      setCompanyChart(null);
      async function getGames() {
        const { url, options } = getGreatestGamesByRating(opts[choose.option]);
        let { response, json } = await request(url, options);
        if (response.ok) {
          json = json.map((game, index) => {
            return { ...game, position: index + 1 };
          });

          let arr = [];
          for (let i = 1; i <= Object.keys(companies).length; i++) {
            let result = json.filter((game) => {
              return game.companyId === i;
            });

            arr.push({
              company: companies[i],
              quantity: result.length,
              percent: result.length / (json.length / 100),
              color: colors[i],
              games: result,
            });
          }

          setGames({ units: json, info: arr });
        }
      }
      getGames();
    }
  }, [companies, choose.option]);

  return (
    <>
      <div
        className={`${styles.buttonsGroup} ${
          choose.show && styles.showOptions
        }`}
      >
        <h2>Escolha uma opção</h2>
        <div>
          <Button
            text='crítica'
            actived={choose.option}
            onClick={({ target }) =>
              setChoose({ option: target.innerText, show: false })
            }
          />
          <Button
            text='usuário'
            actived={choose.option}
            onClick={({ target }) =>
              setChoose({ option: target.innerText, show: false })
            }
          />
        </div>
      </div>
      {!choose.show && (
        <button
          className={styles.changeOptions}
          text='mudar opções'
          onClick={() => setChoose({ ...choose, show: true })}
        >
          mudar opção
        </button>
      )}
      {choose.option && !games && <Loading />}
      {games && (
        <div className={`${styles.container} comeFromBottom`}>
          <div>
            <GamesBox
              choose={opts[choose.option]}
              companyChart={companyChart}
              data={games}
            />
            {companyChart !== null && (
              <button className={styles.limpar} onClick={() => setCompanyChart(null)}>limpar</button>
            )}
          </div>
          <PieChart
            setCompanyChart={setCompanyChart}
            data={games.info}
          />
        </div>
      )}
    </>
  );
}

export default FiftyGreatestGames;
