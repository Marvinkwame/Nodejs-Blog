import React from "react";
import blog from "../../assets/blog.webp";

const BlogIntro = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 md:px-10 px-3">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="">
            <img src={blog} alt="" className="w-[1400px] h-[350px] object-cover" />
            <div className="flex items-center my-3">
              <p className="px-1 border-r-2 border-r-green-900">2.4k Views</p>
              <p className="px-1 border-r-2 border-r-green-900">3 minute read</p>
              <p>100 shares</p>
            </div>
            <h2 className="font-semibold text-3xl mb-3">
              Gary Inman Wants to Teach You How to Build A House
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              asperiores eveniet mollitia.
            </p>
            <div className="flex items-center mt-2">
              <p className="px-1 border-r-2 border-r-green-900 font-semibold">
                by Hatake Kakashi
              </p>
              <p className="px-1">22 July 2023</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <div className="grid place-items-center md:place-items-start">
              <img
                src={blog}
                alt=""
                className="w-[500px] h-[200px] object-cover"
              />
              <h2 className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias at repudiandae itaque architecto illo! Laborum labore
              </h2>
            </div>
            <div className="grid place-items-center md:place-items-start">
              <img
                src={blog}
                alt=""
                className="w-[500px] h-[200px] object-cover"
              />
              <h2 className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias at repudiandae itaque architecto illo! Laborum labore
              </h2>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIntro;
