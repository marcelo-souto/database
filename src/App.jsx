import React from 'react';
import './styles/global.css';
import ButtonUp from './components/Form/Button/ButtonUp';
import ButtonDown from './components/Form/Button/ButtonDown';
import PageSwitcher from './pages/PageSwitcher';

function App() {
  const [page, setPage] = React.useState(5);
  const [changePage, setChangePage] = React.useState({
    action: null,
    animate: false,
  });

  React.useEffect(() => {
    let timeout;
    if (changePage.animate) {
      timeout = setTimeout(() => {
        setChangePage({ action: null, animate: false });
        if (changePage.action === 'DOWN') setPage(page + 1);
        if (changePage.action === 'UP') setPage(page - 1);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [changePage]);

  return (
    <div className='App'>
      {page > 1 && (
        <ButtonUp
          onClick={() => setChangePage({ action: 'UP', animate: true })}
        />
      )}

      <div className={`content ${changePage.animate ? changePage.action : ''}`}>
        <PageSwitcher page={page} />
      </div>

      {page < 5 && (
        <ButtonDown
          onClick={() => setChangePage({ action: 'DOWN', animate: true })}
        />
      )}
    </div>
  );
}

export default App;
