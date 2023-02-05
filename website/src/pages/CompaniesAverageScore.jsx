import React from 'react';
import useFetch from '../hooks/useFetch';
import { getCompanyAvarege } from '../api/api';
import Loading from '../components/helper/Loading';
import styles from './CompaniesAverageScore.module.css';
import Ball from '../components/Ball';
import { ReactComponent as Star } from '../assets/star.svg';

const CompaniesAverageScore = () => {
  const { loading, request } = useFetch();
  const [data, setData] = React.useState(null);
  const [actived, setActived] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const { url, options } = getCompanyAvarege();
      const { json, response } = await request(url, options);

      if (response.ok) {
        const result = json.map((company) => {
          const sumScore = company.games.reduce(
            (prev, curr) => {
              return {
                ...prev,
                meta_score: +(prev.meta_score + curr.meta_score),
                user_review: +(prev.user_review + curr.user_review),
              };
            },
            { meta_score: 0, user_review: 0 },
          );

          const gamesTotal = company.games.length;
          const metaScoreAverage = sumScore.meta_score / gamesTotal;
          const userScoreAverage = (sumScore.user_review * 10) / gamesTotal;

          return {
            company: company.name,
            meta: +metaScoreAverage.toFixed(1),
            user: +userScoreAverage.toFixed(1),
          };
        });
        setData(result);
      }
    }
    getData();
  }, []);

  if (loading) return <Loading />;
  if (data)
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleLeft}>
            <span>média da nota</span>
            <p>críticos</p>
          </div>
          <div className={styles.averageContainer}>
            <div>
              {data.map(({ company, meta }, index) =>
                index === 5 ? (
                  <Ball
                    company={company}
                    average={meta}
                    index={index}
                    actived={actived}
                    setActived={setActived}
                  />
                ) : null,
              )}
            </div>
            <div>
              {data.map(({ company, meta }, index) =>
                index > 2 && index <= 4 ? (
                  <Ball
                    company={company}
                    average={meta}
                    index={index}
                    actived={actived}
                    setActived={setActived}
                  />
                ) : null,
              )}
            </div>
            <div>
              {data.map(({ company, meta }, index) =>
                index <= 2 ? (
                  <Ball
                    company={company}
                    average={meta}
                    index={index}
                    actived={actived}
                    setActived={setActived}
                  />
                ) : null,
              )}
            </div>
          </div>
          <div className={styles.titleRight}>
            <span>média da nota</span>
            <p>usuários</p>
          </div>
          <div className={styles.averageContainer}>
            <div>
              {data.map(({ company, user }, index) =>
                index <= 2 ? (
                  <Ball
                    index={index}
                    company={company}
                    average={user}
                    actived={actived}
                    setActived={setActived}
                  />
                ) : null,
              )}
            </div>
            <div>
              {data.map(({ company, user }, index) =>
                index > 2 && index <= 4 ? (
                  <Ball
                    company={company}
                    average={user}
                    index={index}
                    actived={actived}
                    setActived={setActived}
                  />
                ) : null,
              )}
            </div>
            <div>
              {data.map(({ company, user }, index) =>
                index === 5 ? (
                  <Ball
                    company={company}
                    average={user}
                    index={index}
                    actived={actived}
                    setActived={setActived}
                  />
                ) : null,
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default CompaniesAverageScore;
