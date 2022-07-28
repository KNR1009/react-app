import type { NextPage } from "next";
import React, { useCallback } from "react";
import { ChangeEvent, useEffect, useState, memo } from "react";
import styled from "styled-components";

type ChildProps = {
  value: number;
  onClick: () => void;
};

const Child: React.FC<ChildProps> = ({ value, onClick }) => {
  console.log("レンダリングB");
  return (
    <>
      <p>カウントB:{value}です</p>{" "}
      <button onClick={onClick}>カウントBを増やす</button>
    </>
  );
};

const ChildMemo = React.memo(Child);

const Todo: NextPage = () => {
  const [countA, setCountA] = useState<number>(0);
  const [countB, setCountB] = useState<number>(0);
  console.log("レンダリングA");
  const addCountB = useCallback(() => {
    setCountB(countB + 1);
  }, []);
  const addCountA = () => {
    setCountA(countA + 1);
  };
  return (
    <Container>
      <ChildMemo value={countB} onClick={addCountB} />
      <p>カウントA:{countA}です</p>
      <button onClick={addCountA}>カウントAを増やす</button>
    </Container>
  );
};

const Container = styled.div`
  padding: 200px;
`;
export default Todo;
