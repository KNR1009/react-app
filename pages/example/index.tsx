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
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleComponent = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {toggle ? (
        <Count key={"A"} title={"A"}></Count>
      ) : (
        <Count key={"B"} title={"B"}></Count>
      )}
      <button onClick={toggleComponent}>コンポーネントの変更</button>
    </>
  );
};

export default Example;
