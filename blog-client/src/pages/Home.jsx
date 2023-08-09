import React, { useContext } from "react";
import BlogIntro from "../components/Home/BlogIntro";
import Editor from "../components/Home/Editor";
import LastestPost from "../components/Home/LastestPost";
import axios from "axios";
import newRequest from "../utils/axiosRequest";
import Categories from "../components/Home/Categories";
import { useLocation, Link } from "react-router-dom";
import { Context } from "../context/Context";
import CreateBlog from "../components/WriteBlog/CreateBlog";

const Home = () => {
  const [posts, setPosts] = React.useState([]);
  const { search } = useLocation();
  const { user } = useContext(Context);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await newRequest.get("/posts" + search);
      setPosts(res.data); //setPosts function is called to update the posts state with the fetched data. This will cause the component to re-render with the new data, as posts is now updated.
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <BlogIntro posts={posts} />
      <CreateBlog />

      {user ? (
        <Editor posts={posts} />
      ) : (
        <Link to="/login" className="grid place-items-center">
          Log in to view blogs from other users
        </Link>
      )}

      {user && <LastestPost posts={posts} />}
    </>
  );
};

export default Home;
