import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return { count, increaseCount, decreaseCount };
};

export default useCounter;
