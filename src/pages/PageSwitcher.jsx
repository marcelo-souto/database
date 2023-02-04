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
