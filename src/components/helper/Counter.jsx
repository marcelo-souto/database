import React from 'react';

function Counter({ number, style }) {
  const [counter, setCounter] = React.useState(() => number % 100);
  
  React.useEffect(() => {
    
    const timeout = setTimeout(() => {
      if (counter < number)
        setCounter((counter) => counter + Math.floor(number / 100));
    }, 10);

    return () => clearTimeout(timeout);
  }, [counter]);

  return <p style={style}>{counter}</p>;
}

export default Counter;
