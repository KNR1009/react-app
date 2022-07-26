import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";

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
        <div key={i}>
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
  padding: 200px;
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
