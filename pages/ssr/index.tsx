import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import styled from "styled-components";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const SSRPage: NextPage<{ posts: Post[] }> = (props) => {
  return <SSRContainer>{/* <SSR title={title} num={num} /> */}</SSRContainer>;
};
export default SSRPage;

const SSRContainer = styled.div`
  padding: 300px;
`;

// サーバサイドで実行する処理(getServerSideProps)を定義する
export const getServerSideProps: GetServerSideProps<{ posts: Post[] }> = async (
  context
) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const result = await res.data;

  const posts: Post[] = result.map((i: any) => {
    return {
      userId: i.userId,
      id: i.id,
      title: i.title,
      body: i.body,
    };
  });

  return {
    props: { posts },
  };
};
