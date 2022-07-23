import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";

type User = {
  name: string;
  age: number;
};

const numArray = [1, 2, 3, 4, 5];

const Example: NextPage = () => {
  const [num, setNum] = useState<number[]>(numArray);

  const shuffle = () => {
    const copyNum = [...num];
    const iterator = copyNum[0];
    copyNum.shift();
    copyNum.push(iterator);
    setNum(copyNum);
  };

  return (
    <div>
      <p>{num}</p>
      <button onClick={shuffle}>シャッフル</button>
    </div>
  );
};

export default Example;
