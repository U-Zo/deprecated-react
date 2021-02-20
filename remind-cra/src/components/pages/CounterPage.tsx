import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCounter from '../../hooks/useCounter';
import { RootState } from '../../modules';
import { decreaseCount, increaseCount } from '../../modules/counter';
import Button from '../atoms/Button';

const CounterPage = () => {
  // const { count, increaseCount, decreaseCount } = useCounter();
  const { count } = useSelector(({ counter }: RootState) => ({
    count: counter.count,
  }));

  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increaseCount());
  };

  const decrease = () => {
    dispatch(decreaseCount());
  };

  return (
    <>
      <h1>Counter Page</h1>
      <h2>{count}</h2>
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
    </>
  );
};

export default CounterPage;
