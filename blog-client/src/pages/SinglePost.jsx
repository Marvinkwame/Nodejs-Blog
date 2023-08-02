import React from "react";
import { useLocation } from "react-router-dom";
import blog from "../assets/blog.webp";
import newRequest from "../utils/axiosRequest";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; //gets the id of the post so from the url so that i can fetch from the backend
  const [posts, setPosts] = React.useState({});

  React.useEffect(() => {
    const singlePost = async () => {
      const res = await newRequest.get("/posts/" + path);
      console.log(res.data);
      setPosts(res.data);
    };
    singlePost();
  }, [path]);

  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 border-blue-950 md:px-10 px-3">
        {/* Post Content */}
        <h2 className="text-center">{posts.title}</h2>
        <h2 className="text-center">Title</h2>
        {/*Author */}
        <div className="flex  items-center justify-center">
          <img src="" alt="" />
          <div className="grid gap-y-1">
            <p>by {posts.username}</p>
            {new Date(posts.createdAt).toDateString()}
          </div>
        </div>

        <img src={blog} alt="" className="w-[90%] mx-auto"  />
        <div className="w-[87%] mx-auto mt-6">
          {/* Small Info*/}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl text-center mx-auto font-semibold">
              {posts.title}
            </h2>
          </div>

          <img src="" alt="" />

          <p>
            {posts.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
