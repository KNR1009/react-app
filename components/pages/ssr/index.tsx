import { GetServerSideProps } from "next";
import React from "react";

type Props = {
  title: string;
  num: number;
};

export const SSR = (props: Props) => {
  return (
    <>
      <h1>Test Page</h1>
      <h2>
        {props.title}:{props.num}
      </h2>
    </>
  );
};
