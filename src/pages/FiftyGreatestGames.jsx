import React from 'react';
import PieChart from '../components/PieChart';
import { getGreatestGamesByRating, getCompanies } from '../api/api';
import useFetch from '../hooks/useFetch';
import Loading from '../components/helper/Loading';

function FiftyGreatestGames() {
  const { loading, data, error, request } = useFetch();
  const [companies, setCompanies] = React.useState(null);
  const [games, setGames] = React.useState(null);

  React.useEffect(() => {
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
  }, []);

  React.useEffect(() => {
    if (companies) {
      async function getGames() {
        const { url, options } = getGreatestGamesByRating();
        const { response, json } = await request(url, options);
        if (response.ok) {
          let arr = [];
          for (let i = 1; i <= 6; i++) {
            let result = json.filter((game) => {
              return game.companyId === i;
            });

            arr.push({
              company: companies[i],
              quantity: result.length,
              games: result,
            });
          }

          setGames(arr);
        }
      }
      getGames();
    }
  }, [companies]);

  if (!games && !companies) return <Loading />
  return <div>{games && <PieChart data={games} />}</div>;
}

export default FiftyGreatestGames;
