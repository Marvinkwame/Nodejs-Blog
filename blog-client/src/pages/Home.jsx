import React from "react";
import BlogIntro from "../components/Home/BlogIntro";
import Editor from "../components/Home/Editor";
import LastestPost from "../components/Home/LastestPost";

const Home = () => {
  return (
    <>
      <BlogIntro />
      <Editor />
      <LastestPost />
    </>
  );
};

export default Home;
