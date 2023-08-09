import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Editor = ({ posts }) => {
  const PF = "http://localhost:3500/images/";
  const contentRef = React.useRef(null);

  const scrollLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft -= 800;
    }
  };

  const scrollRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft += 800;
    }
  };

  return (
    <section className="py-12 relative border-4">
      <div className="max-w-[1400px] my-0 mx-auto md:px-10 px-3">
        <h2 className="text-2xl font-semibold">Editor's Picks</h2>
        <div className="flex flex-col md:flex-row mx-auto items-center justify-between gap-4">
          <div className="absolute right-4 bottom-1 mt-4 ">
            <button
              onClick={scrollLeft}
              className="p-2 m-2 border-2 text-xl text-primary border-primary rounded-full bg-white"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 m-2 border-2 text-xl text-primary border-primary rounded-full bg-white"
            >
              <FiChevronRight />
            </button>
          </div>

          <div
            id="content"
            className="carousel p-2 border-purple-950 gap-2 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide relative"
          >
          {/* Cards */}
          {posts.slice(0, 3).map((post) => (
            <Link
              to={`/post/${post._id}`}
              className="grid place-items-center md:place-items-start w-[28rem] h-[27rem]"
              key={post._id}
            >
              <img
                src={PF + post.photo}
                alt=""
                className="w-[400px] h-[230px] object-cover"
              />
              <div className="flex items-center mt-2">
                <p className="px-1 border-r-2 border-r-green-900 font-semibold">
                {Math.floor(Math.random() * 1000)} Views
                </p>
                <p className="px-1">{Math.floor(Math.random() * 10)} minute read</p>
              </div>
              <h2 className="font-semibold">{post.title}</h2>
              <p>
                {post.desc}
              </p>
              <div className="flex items-center mt-2">
                <p className="px-1 border-r-2 border-r-green-900 font-semibold">
                  by {post.username}
                </p>
                <p className="px-1">
                  {new Date(post.createdAt).toDateString()}
                </p>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editor;
