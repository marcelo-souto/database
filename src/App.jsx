import React from 'react';
import DatabaseTotal from './pages/DatabaseTotal';
import TheGreatestStatistics from './pages/TheGreatestStatistics';
import './styles/global.css';
import ButtonUp from './components/Form/Button/ButtonUp';
import ButtonDown from './components/Form/Button/ButtonDown';

function App() {
  const [slide, setSlide] = React.useState(1);

  return (
    <div className='App'>
      {slide > 1 && <ButtonUp onClick={() => setSlide(slide - 1)} />}

      <div className='content'>
        {slide === 1 && <DatabaseTotal />}
        {slide === 3 && <TheGreatestStatistics />}
      </div>

      {slide < 5 && <ButtonDown onClick={() => setSlide(slide + 1)} />}
    </div>
  );
}

export default App;
