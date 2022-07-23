import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";

type User = {
  name: string;
  age: number;
};

const Example: NextPage = () => {
  const [user, setUser] = useState<User>({
    name: "ken",
    age: 12,
  });

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ name: e.target.value, age: user.age });
  };
  const onChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ name: user.name, age: Number(e.target.value) });
  };
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <input type="text" value={user.name} onChange={onChangeName} />
      <input type="text" value={user.age} onChange={onChangeAge} />
    </div>
  );
};

export default Example;
