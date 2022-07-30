import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import React from "react";
import styled from "styled-components";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const SGPage: NextPage<{ posts: Post[] }> = (props) => {
  return (
    <SGContainer>
      {props.posts &&
        props.posts.map((post) => (
          <div key={post.id}>
            <p>
              {post.id}:{post.title}
            </p>
          </div>
        ))}
    </SGContainer>
  );
};
export default SGPage;

const SGContainer = styled.div`
  padding: 100px;
`;

// ビルド時に実行
export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async (
  context
) => {
  console.log("getStaticProps");
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
