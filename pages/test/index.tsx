import type { NextPage } from "next";
import React, {
  forwardRef,
  LegacyRef,
  useEffect,
  useRef,
  useState,
} from "react";
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
    <>
      {isDisplay && <Example />}
      <button onClick={onClick}>トグル</button>
    </>
  );
};
export default Todo;

const ExampleContainer = styled.div`
  padding: 30px;
`;
