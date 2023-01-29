import React from 'react';
import useFetch from '../hooks/useFetch';
import { getTotalDatabase } from '../api/api';
import Counter from '../components/helper/Counter';

function DatabaseTotal() {
  const { loading, data, error, request } = useFetch();

  React.useEffect(() => {

    async function getData() {
      const { url, options } = getTotalDatabase();
      await request(url, options);
    }
    getData();

  }, []);

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && data && <Counter number={data.length} />}
    </div>
  );
}

export default DatabaseTotal;
