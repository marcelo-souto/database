import React from 'react';
import DatabaseTotal from './DatabaseTotal';
import TheGreatestStatistics from './TheGreatestStatistics';
import FiftyGreatestGames from './FiftyGreatestGames';
import CompaniesStatitics from './CompaniesStatitics'
import TheBestGames from './TheBestGames'
import CompanyAvarege from './CompanyAvarege'

function PageSwitcher({ page }) {
  
  const pages = {
    1: <DatabaseTotal />,
    2: <CompaniesStatitics />,
    3: <TheGreatestStatistics />,
    4: <TheBestGames />,
    5: <FiftyGreatestGames />,
    6: <CompanyAvarege />
  };

  return pages[page];
}

export default PageSwitcher;
import React from 'react'
import Loading from '../components/helper/Loading';
const DatabaseTotal = React.lazy(() => import('./DatabaseTotal'));
const TheGreatestStatistics = React.lazy(() => import('./TheGreatestStatistics'));
const FiftyGreatestGames = React.lazy(() => import('./FiftyGreatestGames'));
const TheBestGames = React.lazy(() => import('./TheBestGames'));
const CompaniesStatistics = React.lazy(() => import('./CompaniesStatistics'));


function PageSwitcher({ page }) {
  const pages = {
    1: <DatabaseTotal />,
    2: <CompaniesStatistics />,
    3: <TheGreatestStatistics />,
    4: <TheBestGames />,
    5: <FiftyGreatestGames />,
  };

  return (
    <React.Suspense fallback={<Loading />}>
      {pages[page]}
    </React.Suspense>
  );
}

export default PageSwitcher;
