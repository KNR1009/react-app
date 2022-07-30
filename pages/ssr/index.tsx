import type { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SSR } from "../../components/pages/ssr";
import { getPosts } from "../api/jsonPlaceHolder";

type Props = {
  title: string;
  num: number;
};

const SSRPage: NextPage<Props> = ({ title, num }) => {
  return (
    <SSRContainer>
      <SSR title={title} num={num} />
    </SSRContainer>
  );
};
export default SSRPage;

const SSRContainer = styled.div`
  padding: 300px;
`;

// サーバサイドで実行する処理(getServerSideProps)を定義する
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  // APIやDBからのデータ取得処理などを記載
  const props: Props = {
    title: "test",
    num: 123,
  };

  return {
    props: props,
  };
};
