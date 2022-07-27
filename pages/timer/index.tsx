import type { NextPage } from "next";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

const Example = () => {
  useEffect(() => {
    console.log("初回レンダリング");
    return () => {
      console.log("消えました");
    };
  }, []);
  return <p>サンプルです</p>;
};

const Todo: NextPage = () => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const onClick = () => {
    setIsDisplay(!isDisplay);
  };
  return (
    <Container>
      {isDisplay && <Example />}
      <button onClick={onClick}>トグル</button>
    </Container>
  );
};

const Container = styled.div`
  padding: 200px;
`;
export default Todo;
