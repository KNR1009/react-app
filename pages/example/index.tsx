import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";

const initialValue = {
  id: 1,
  value: "",
};

const Example: NextPage = () => {
  const [inputValues, setInputValues] = useState<
    {
      id: number;
      value: string;
    }[]
  >([initialValue]);

  const onChange = (id: number, e: ChangeEvent<HTMLInputElement>) => {
    const copy = [...inputValues];
    copy.map((i) => {
      if (i.id === id) {
        i.value = e.target.value;
      }
    });
  };

  const onAddInputForm = () => {
    const id = inputValues.length;
    const copy = [...inputValues];
    copy.unshift({ id: id, value: "" });
    setInputValues(copy);
  };

  return (
    <ExampleContainer>
      <div className="input-container">
        {inputValues.map((inputValue, index) => (
          <Input key={inputValue.id} />
        ))}
      </div>
      <div className="button-container">
        <button className="button" onClick={onAddInputForm}>
          入力フォームを追加
        </button>
      </div>
    </ExampleContainer>
  );
};
export default Example;

const ExampleContainer = styled.div`
  padding: 100px;
  .input-container {
    width: 200px;
  }
  .button {
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
