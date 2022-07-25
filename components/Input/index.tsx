import React from "react";
import styled from "styled-components";

export const Input = () => {
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
