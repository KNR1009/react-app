import axios from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};
