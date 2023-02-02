<<<<<<< HEAD
import React from 'react';
import useFetch from '../hooks/useFetch';
import { getTotalDatabase } from '../api/api';
import Counter from '../components/helper/Counter';
import styles from './DatabaseTotal.module.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as LogosDecorationFirst } from '../assets/logos1.svg';
import { ReactComponent as LogosDecorationSecond } from '../assets/logos2.svg';
import Loading from '../components/helper/Loading';

function DatabaseTotal() {
  const { loading, data, error, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = getTotalDatabase();
      await request(url, options);
    }
    getData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  return (
    <section className={`${styles.section} comeFromTop`}>
      <LogosDecorationFirst className={`${styles.first} ${styles.scale}`} />
      <div>
        <Logo />
        {data && (
          <Counter
            number={data.length}
            style={{
              fontSize: '8rem',
              fontWeight: '700',
              fontFamily: 'Satoshi',
              color: '#BFBEF3',
              lineHeight: '1.125',
            }}
          />
        )}
      </div>
      <LogosDecorationSecond className={`${styles.second} ${styles.scale}`} />
    </section>
  );
}

export default DatabaseTotal;
=======
import React from 'react';
import useFetch from '../hooks/useFetch';
import { getTotalDatabase } from '../api/api';
import Counter from '../components/helper/Counter';
import styles from './DatabaseTotal.module.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as LogosDecorationFirst } from '../assets/logos1.svg';
import { ReactComponent as LogosDecorationSecond } from '../assets/logos2.svg';
import Loading from '../components/helper/Loading';

function DatabaseTotal() {
  const { loading, data, error, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = getTotalDatabase();
      await request(url, options);
    }
    getData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  return (
    <section className={`${styles.section} comeFromTop`}>
      <LogosDecorationFirst className={`${styles.first} ${styles.scale}`} />
      <div>
        <Logo />
        {data && (
          <Counter
            number={data.length}
            style={{
              fontSize: '8rem',
              fontWeight: '700',
              fontFamily: 'Satoshi',
              color: '#BFBEF3',
              lineHeight: '1.125',
            }}
          />
        )}
      </div>
      <LogosDecorationSecond className={`${styles.second} ${styles.scale}`} />
    </section>
  );
}

export default DatabaseTotal;
>>>>>>> 0110a05 (pages)
