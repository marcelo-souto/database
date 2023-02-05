import React from 'react'
import useFetch from '../hooks/useFetch';
import { getTotalGameCompany, getGreatestGamesByCompany } from '../api/api'
import Loading from '../components/helper/Loading';
import Bar from '../components/Bar/Bar';
import styles from './CompaniesStatitics.module.css';
import GamesBox from '../components/Bar/GamesBox';

const CompaniesStatitics = () => {

  const { loading, data, error, request } = useFetch();
  const [companyGames, setCompanyGames] = React.useState(null);
  const [compName, setCompName] = React.useState('');
  const [compTotal, setCompTotal] = React.useState(null);


  async function getGames(id, name, total) {
    setCompanyGames(null)
    const { url, options } = getGreatestGamesByCompany(id);
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) setCompanyGames(json);
    setCompName(name)
    setCompTotal(total)

  }

  React.useEffect(() => {

    async function getData() {
      const { url, options } = getTotalGameCompany();
      await request(url, options);
    }
    getData();

  }, []);


  if (loading) return <Loading />
  return (
    <div className={`${styles.container} comeFromRight`}>

      <div className={styles.bar}> 
        {data && data.map(comp => <Bar onClick={() => getGames(comp.id, comp.name, comp.games)} company={comp} />)}
      </div>

      {companyGames &&
        <div className={`${styles.games} comeFromBottom`}>
          <h1 className={styles.title}>Principais jogos: <span className={styles.titleName}>{compName}</span></h1>
          <GamesBox data={companyGames} /> 
          <p className={styles.total}>Total de jogos : <span className={styles.note}>{compTotal.length}</span></p>
        </div>}

    </div>
  )
}

export default CompaniesStatitics
