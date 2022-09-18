import React from "react";

type Fruits = {
  name: string;
};

export const Fruits: React.FC<Fruits> = ({ name }) => {
  return <p>{name}</p>;
};
