import React from 'react';

function App() {
  const [slide, setSlide] = React.useState(1)

  return (
    <div>
      {slide > 1 && <button onClick={() => setSlide(slide - 1)}>voltar</button>}
      {slide === 1 && <p>1</p>}
      {slide === 2 && <p>2</p>}
      {slide === 3 && <p>3</p>}
      {slide === 4 && <p>4</p>}
      {slide === 5 && <p>5</p>}
      {slide < 5 && <button onClick={() => setSlide(slide + 1)}>proximo</button>}
    </div>
  );
}

export default App;