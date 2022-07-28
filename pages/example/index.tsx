import type { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
type ChildProps = {
  value: string;
};

const Example: NextPage = () => {
  const [inputId, setInputId] = useState<number[]>([1]);
  const onClick = () => {
    const copy = [...inputId];
    copy.unshift(inputId.length + 1);
    setInputId(copy);
  };

  return (
    <ExampleContainer>
      {inputId.map((i, index) => (
        <div key={index}>
          <p>id:{i}</p>
          <input type="text" />
          <br />
        </div>
      ))}
      <button onClick={onClick} className="button">
        入力フォームを増やす
      </button>
    </ExampleContainer>
  );
};
export default Example;

const ExampleContainer = styled.div`
  padding: 300px;
  .input-container {
    width: 100px;
  }
  .button {
    margin-top: 20px;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 8px;
    border-radius: 6px;
    background-color: #485354;
    color: #ffffff;
  }
  .button-container {
    margin-top: 20px;
  }
`;
