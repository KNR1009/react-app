import React, { useEffect, useState } from "react";

type ChildProps = {
  count: number;
};
export const Child: React.FC<ChildProps> = ({ count }) => {
  console.log("子コンポーネントのレンダリング");
  return <p>カウント: {count}</p>;
};

export const Parent: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  console.log("親レンダリング");
  return (
    <>
      <p>入力フォーム</p>
      <input type="text" value={value} onChange={onChange} />
      <p>入力値{value}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        リセット
      </button>
      <Child count={count} />
    </>
  );
};
