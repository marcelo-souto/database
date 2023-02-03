import React from 'react';
import DatabaseTotal from './DatabaseTotal';
import TheGreatestStatistics from './TheGreatestStatistics';
import FiftyGreatestGames from './FiftyGreatestGames';
import TheBestGames from './TheBestGames';
import CompaniesStatistics from './CompaniesStatistics';

function PageSwitcher({ page }) {
  const pages = {
    1: <DatabaseTotal />,
    2: <CompaniesStatistics />,
    3: <TheGreatestStatistics />,
    4: <TheBestGames />,
    5: <FiftyGreatestGames />,
  };

  return pages[page];
}

export default PageSwitcher;
