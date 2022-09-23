import React, { useEffect, useState } from "react";

// type ChildProps = {
//   count: number;
// };

export const Child: React.FC<ChildProps> = ({ count }) => {
  count = 0;

  return <p>{count}</p>;
};

export const Parent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const addCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("カウントが増えました");
  }, [count]);
  return (
    <>
      <button onClick={addCount}>クリック</button>
      <p>{count}</p>
    </>
  );
};
