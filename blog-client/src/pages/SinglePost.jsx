import React from "react";

const SinglePost = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 border-blue-950 md:px-10 px-3">
        {/* Post Content */}
        <h2>Blog</h2>
        <div>
          {/* Small Info*/}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold w-[50%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              molestiae ea nihil!
            </h2>

            {/*Author */}
            <div>
              <img src="" alt="" />
              <p>by Hatake Kakashi</p>
            </div>
          </div>

          <img src="" alt="" />

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            recusandae excepturi vero obcaecati consequuntur quis earum
            assumenda sed, aliquid delectus tempore blanditiis quaerat fuga
            incidunt aperiam voluptate veritatis vel enim.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
