import React from "react";
import BlogIntro from "../components/Home/BlogIntro";
import Editor from "../components/Home/Editor";
import LastestPost from "../components/Home/LastestPost";
import axios from "axios";
import newRequest from "../utils/axiosRequest";
import Categories from "../components/Home/Categories";

const Home = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await newRequest.get("/posts");
      console.log(res.data);
      setPosts(res.data); //setPosts function is called to update the posts state with the fetched data. This will cause the component to re-render with the new data, as posts is now updated.
    };
    fetchPosts();
  }, []);
  return (
    <>
      <BlogIntro posts={posts} />
      <Categories />
      <Editor posts={posts} />
      <LastestPost posts={posts} />
    </>
  );
};

export default Home;
