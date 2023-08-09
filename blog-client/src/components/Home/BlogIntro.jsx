import React from "react";

import { Link } from "react-router-dom";

const BlogIntro = ({ posts }) => {
  const PF = "http://localhost:3500/images/";
  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 md:px-10 px-3">
        <div className="flex flex-col lg:flex-row gap-4">
          {posts.slice(0, 1).map((post) => (
            <div key={post._id}>
              <Link to={`/post/${post._id}`} className="grid gap-y-1">
                {post.photo && (
                  <img
                    className="w-[1000px] h-[450px] object-cover"
                    src={PF + post.photo}
                    alt="Post Image"
                  />
                )}

                <div className="flex items-center ">
                  <p className="px-1 border-r-2 border-r-green-900">
                  {Math.floor(Math.random() * 1000)} Views
                  </p>
                  <p className="px-1 border-r-2 border-r-green-900">
                  {Math.floor(Math.random() * 10)} minute read
                  </p>
                  <p>{Math.floor(Math.random() * 100)} shares</p>
                </div>
                <h2 className="font-semibold text-3xl ">{post.title}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam asperiores eveniet mollitia.
                </p>
                <div className="flex items-center ">
                  <p className="px-1 border-r-2 border-r-green-900 font-semibold">
                    by {post.username}
                  </p>
                  <p className="px-1">
                    {" "}
                    {new Date(post.createdAt).toDateString()}
                  </p>
                </div>
              </Link>
            </div>
          ))}

          <div className="flex flex-col gap-6 items-center">
            {posts.slice(1, 3).map((post) => (
              <Link
                to={`/post/${post._id}`}
                key={post._id}
                className="grid place-items-center overflow-hidden md:place-items-start relative w-full lg:w-[29rem] bg-blend-multiply h-[20rem] object-cover bg-cover"
                style={{
                  backgroundImage: `url(${PF + post.photo})`, // Set the background image using inline styles
                   // Apply mix blend mode to the background image
                  backgroundColor: "#4f4b59",
                }}
              >
                <h2 className="text-center absolute top-[50%] p-4 text-white">
                  {post.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIntro;
