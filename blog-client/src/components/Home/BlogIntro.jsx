import React from "react";
import blog from "../../assets/blog.webp";
import { Link } from 'react-router-dom'

const BlogIntro = ({ posts }) => {
  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 md:px-10 px-3">
        <div className="flex flex-col lg:flex-row gap-4">
          {posts.slice(0, 1).map((post) => (
            <>
              <Link to={`/post/${post._id}`} className="grid gap-y-1" key={post._id}>
                <img src={blog} className="w-[1400px] h-[350px] object-cover" alt="" />
                {/* 
                {post.photo && (
                  <img
                    className="w-[1400px] h-[350px] object-cover"
                    src={PF + post.photo}
                    alt=""
                  />
                )}
                */}
                
                <div className="flex items-center ">
                  <p className="px-1 border-r-2 border-r-green-900">
                    2.4k Views
                  </p>
                  <p className="px-1 border-r-2 border-r-green-900">
                    3 minute read
                  </p>
                  <p>100 shares</p>
                </div>
                <h2 className="font-semibold text-3xl ">{post.title}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam asperiores eveniet mollitia.
                </p>
                <div className="flex items-center ">
                  <p className="px-1 border-r-2 border-r-green-900 font-semibold">
                    by Hatake Kakashi
                  </p>
                  <p className="px-1">
                    {" "}
                    {new Date(post.createdAt).toDateString()}
                  </p>
                </div>
              </Link>

              <div className="flex flex-col gap-6 items-center">
                {posts.slice(1, 4).map((post) => (
                  <>
                    <Link to={`/post/${posts._id}`} className="grid place-items-center md:place-items-start">
                      <img src={blog} className="w-[500px] h-[200px] object-cover" alt="" />
                      {/*
                      {post.photo && (
                        <img
                          className="w-[500px] h-[200px] object-cover"
                          src={PF + post.photo}
                          alt=""
                        />
                      )}
                      */}
                      
                      <h2 className="text-center">{post.title}</h2>
                    </Link>
                  </>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogIntro;
