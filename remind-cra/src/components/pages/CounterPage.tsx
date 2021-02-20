import useCounter from '../../hooks/useCounter';
import Button from '../atoms/Button';

const CounterPage = () => {
  const { count, increaseCount, decreaseCount } = useCounter();

  return (
    <>
      <h1>Counter Page</h1>
      <h2>{count}</h2>
      <Button onClick={increaseCount}>+</Button>
      <Button onClick={decreaseCount}>-</Button>
    </>
  );
};

export default CounterPage;
