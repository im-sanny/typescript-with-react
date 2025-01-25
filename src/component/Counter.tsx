import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      return setCount(count - 1);
    } else {
      return alert('You cannot decrease anymore');
    }
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
