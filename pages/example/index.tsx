import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";

type User = {
  name: string;
  age: number;
};

const numArray = [1, 2, 3, 4, 5];

type CountProps = {
  title: string;
};

const Count: React.FC<CountProps> = ({ title }) => {
  const [count, setCount] = useState<number>(0);
  const countUp = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{title}</p>
      <p>{count}</p>
      <button onClick={countUp}>+</button>
    </div>
  );
};

const Example: NextPage = () => {
  // const inputNum = [1, 2, 3, 4];
  const [inputNum, setInputNum] = useState<number[]>([1, 2, 3, 4]);
  const onClick = () => {
    const copy = [...inputNum];
    copy.unshift(inputNum[inputNum.length - 1] + 1);
    setInputNum(copy);
  };
  return (
    <>
      {inputNum.map((i, index) => (
        <>
          {i}:
          <input type="text" key={index} />
          <br />
        </>
      ))}
      <button onClick={onClick}>入力フォームを増やす</button>
    </>
  );
};

export default Example;
