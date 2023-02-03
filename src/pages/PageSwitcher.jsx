import React from 'react';
import DatabaseTotal from './DatabaseTotal';
import TheGreatestStatistics from './TheGreatestStatistics';
import FiftyGreatestGames from './FiftyGreatestGames';

function PageSwitcher({ page }) {
  
  const pages = {
    1: <DatabaseTotal />,
    2: null,
    3: <TheGreatestStatistics />,
    4: null,
    5: <FiftyGreatestGames />,
  };

  return pages[page];
}

export default PageSwitcher;
