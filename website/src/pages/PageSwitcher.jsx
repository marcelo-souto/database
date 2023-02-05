import React from 'react';
import Loading from '../components/helper/Loading';
const DatabaseTotal = React.lazy(() => import('./DatabaseTotal'));
const TheGreatestStatistics = React.lazy(() =>
  import('./TheGreatestStatistics'),
);
const FiftyGreatestGames = React.lazy(() => import('./FiftyGreatestGames'));
const CompaniesStatitics = React.lazy(() => import('./CompaniesStatitics'));
const TheBestGames = React.lazy(() => import('./TheBestGames'));
const CompanyAvarege = React.lazy(() => import('./CompanyAvarege'));
const CompaniesAverageScore = React.lazy(() =>
  import('./CompaniesAverageScore'),
);

function PageSwitcher({ page }) {
  const pages = {
    1: <DatabaseTotal />,
    2: <CompaniesStatitics />,
    3: <TheGreatestStatistics />,
    4: <TheBestGames />,
    5: <FiftyGreatestGames />,
    6: <CompaniesAverageScore />,
    7: <CompanyAvarege />,
  };

  return <React.Suspense fallback={<Loading />}>{pages[page]}</React.Suspense>;
}

export default PageSwitcher;
