import React from 'react';
import {
  getCompanies,
  getGreatestGamesByPlatform,
  getPlatforms
} from '../api/api';
import Loading from '../components/helper/Loading';
import useFetch from '../hooks/useFetch';
import Button from '../components/Form/Button/Button';
import styles from './TheGreatestStatistics.module.css';
import Podium from '../components/Podium';
import { ReactComponent as MetacriticLogo } from '../assets/metacritic.svg';

function TheGreatestStatistics() {
  const { loading, error, request } = useFetch();
  const [companies, setCompanies] = React.useState(null);
  const [platforms, setPlatforms] = React.useState(null);
  const [greatest, setGreatest] = React.useState(null);
  const [actived, setActived] = React.useState({
    company: null,
    platform: null,
  });

  React.useEffect(() => {
    async function getData() {
      const { url, options } = getCompanies();
      const { response, json } = await request(url, options);
      if (response.ok) setCompanies(json);
    }
    getData();
  }, []);

  
  async function getPlatform(e, id) {
    setGreatest(null)
    setActived({ company: e.target.innerText, platform: null });

    const { url, options } = getPlatforms(id);
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) setPlatforms(json);
  }

  async function getGreatestGames(e, id) {
    setActived({ ...actived, platform: e.target.innerText });
    const { url, options } = getGreatestGamesByPlatform(id);
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) setGreatest(json);
  }

  if (loading) return <Loading />;
  return (
    <section className={`${styles.container} comeFromBottom`}>
      <div>
        <div>
          <MetacriticLogo className={styles.logo} />
        </div>
        {companies && (
          <div>
            <h2>Escolha uma empresa</h2>
            <div className={`${styles.buttonsGroup} comeFromBottom`}>
              {companies.length > 0 &&
                companies.map((company) => {
                  return (
                    <Button
                      key={company.name + company.id}
                      text={company.name}
                      actived={actived.company}
                      onClick={(e) => getPlatform(e, company.id)}
                    />
                  );
                })}
            </div>
          </div>
        )}

        {platforms && (
          <div className='comeFromBottom'>
            <h2>escolha uma plataforma</h2>
            <div className={`${styles.buttonsGroup} comeFromBottom`}>
              {platforms.platforms &&
                platforms.platforms.map((platform) => {
                  return (
                    <Button
                      key={platform.name + platform.id}
                      text={platform.name}
                      actived={actived.platform}
                      onClick={(e) => getGreatestGames(e, platform.id)}
                    />
                  );
                })}
            </div>
          </div>
        )}
      </div>

      {greatest && <Podium data={greatest} />}
    </section>
  );
}

export default TheGreatestStatistics;
