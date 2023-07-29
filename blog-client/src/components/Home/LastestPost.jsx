import React from "react";
import blog from "../../assets/blog.webp";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const LastestPost = () => {
  return (
    <section className="py-12">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 border-blue-950 md:px-10 px-3">
        <h2>Lastest Post</h2>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          {/* Posts */}
          <div className="grid gap-4">
            <Link className="flex items-center gap-4" to="/post/abc">
              <img src={blog} alt="Post" className="w-[290px] h-[300px] object-cover" />
              <div className="grid gap-2">
                <div className="flex items-center mt-2">
                  <p className="px-1 border-r-2 border-r-green-900 font-semibold">
                    2.4k Views
                  </p>
                  <p className="px-1">3 minute read</p>
                </div>
                <h2 className="font-semibold">
                  Gary Inman Wants to Teach You How to Build A House
                </h2>
                <p className="w-[50%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam asperiores eveniet mollitia.
                </p>
                <div className="flex items-center mt-2">
                  <p className="px-1 border-r-2 border-r-green-900 font-semibold">
                    by Hatake Kakashi
                  </p>
                  <p className="px-1">22 July 2023</p>
                </div>
              </div>
            </Link>

            <Link className="flex items-center gap-4" to="/post/abc">
              <img src={blog} alt="Post" className="w-[290px] h-[300px] object-cover" />
              <div className="grid gap-2">
                <div className="flex items-center mt-2">
                  <p className="px-1 border-r-2 border-r-green-900 font-semibold">
                    2.4k Views
                  </p>
                  <p className="px-1">3 minute read</p>
                </div>
                <h2 className="font-semibold">
                  Gary Inman Wants to Teach You How to Build A House
                </h2>
                <p className="w-[50%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam asperiores eveniet mollitia.
                </p>
                <div className="flex items-center mt-2">
                  <p className="px-1 border-r-2 border-r-green-900 font-semibold">
                    by Hatake Kakashi
                  </p>
                  <p className="px-1">22 July 2023</p>
                </div>
              </div>
            </Link>

            <Link className="flex items-center gap-4" to="/post/abc">
              <img src={blog} alt="Post" className="w-[290px] h-[300px] object-cover" />
              <div className="grid gap-2">
                <div className="flex items-center mt-2">
                  <p className="px-1 border-r-2 border-r-green-900 font-semibold">
                    2.4k Views
                  </p>
                  <p className="px-1">3 minute read</p>
                </div>
                <h2 className="font-semibold">
                  Gary Inman Wants to Teach You How to Build A House
                </h2>
                <p className="w-[50%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam asperiores eveniet mollitia.
                </p>
                <div className="flex items-center mt-2">
                  <p className="px-1 border-r-2 border-r-green-900 font-semibold">
                    by Hatake Kakashi
                  </p>
                  <p className="px-1">22 July 2023</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Search Functionality */}
          <div>
            <form action="" className="flex flex-col items-center gap-4 mb-4">
              <label for="gsearch" className="hidden">
                Search Catgories:
              </label>
              <div className="border-4 flex items-center px-3 py-3 border-none outline-none justify-between">
                <input
                  type="search"
                  id="gsearch"
                  placeholder="Search Categories"
                  name="gsearch"
                />
                <BiSearchAlt />
              </div>
            </form>
            <h2>Categories</h2>
            {/* Pull categories from the backend later */}
            <div className="grid grid-cols-4 gap-2">
                <Link to="/post/abc" className="border-2 rounded-2xl border-sky-700 p-2  text-xs">NBA</Link>
                <Link to="/post/?cat=Nba" className="border-2 border-sky-700 p-2 rounded-2xl  text-xs">NBA</Link>
                <Link to="/post/?cat=Nba" className="border-2 border-sky-700 p-2 rounded-2xl  text-xs">NBA</Link>
                <Link to="/post/?cat=Nba" className="border-2 border-sky-700 p-2 rounded-2xl  text-xs">NBA</Link>
                <Link to="/post/?cat=Nba" className="border-2 border-sky-700 p-2 rounded-2xl  text-xs">NBA</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastestPost;
