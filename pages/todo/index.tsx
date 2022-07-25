import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const List: NextPage = () => {
  const [list, setList] = useState<string[]>(["リスト"]);

  const addValue = () => {
    setList([...list, "リスト"]);
  };
  return (
    <Container>
      <div className="todo-list">
        <div className="input-container">
          <button onClick={addValue}>リストを追加</button>
        </div>
        <ul>
          {list.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 200px;
`;
export default List;
