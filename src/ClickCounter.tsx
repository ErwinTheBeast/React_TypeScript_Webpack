import { useState } from 'react';

export const ClickCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </>
  );
};
