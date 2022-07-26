import React, { ChangeEvent } from "react";
import styled from "styled-components";

type InputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = () => {
  return (
    <InputContainer>
      <input type="text" />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  input {
    width: 100%;
    height: 100%;
    padding: 8px;
    border-radius: 4px;
  }
`;
