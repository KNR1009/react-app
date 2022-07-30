import axios from "axios";
import type { NextPage } from "next";
import React, { lazy, Suspense, useCallback } from "react";
import { ChangeEvent, useEffect, useState, memo } from "react";
import styled from "styled-components";
import { ComponentA } from "../../components/test/componentA";

const LazyComponentA = lazy(() =>
  import("../../components/test/componentA").then(({ ComponentA }) => ({
    default: ComponentA,
  }))
);
const Todo: NextPage = () => {
  const [isDisplayA, setIsDisplayA] = useState<boolean>(false);
  const onClick = () => {
    setIsDisplayA(!isDisplayA);
  };
  console.log(LazyComponentA);
  return (
    <Container>
      <Suspense fallback={<div>loading</div>}>
        {isDisplayA && <LazyComponentA />}
      </Suspense>
      <button onClick={onClick}>切り替え</button>
    </Container>
  );
};

const Container = styled.div`
  padding: 200px;
`;
export default Todo;
