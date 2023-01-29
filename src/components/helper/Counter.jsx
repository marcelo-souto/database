import React from 'react';

function Counter({ number }) {
  const [counter, setCounter] = React.useState(() => number % 100);
  
  React.useEffect(() => {
    
    const timeout = setTimeout(() => {
      if (counter < number)
        setCounter((counter) => counter + Math.floor(number / 100));
    }, 10);

    return () => clearTimeout(timeout);
  }, [counter]);

  return <div>{counter}</div>;
}

export default Counter;
