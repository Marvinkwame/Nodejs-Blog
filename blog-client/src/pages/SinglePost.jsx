import React, { useContext, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import blog from "../assets/jayt.jpg";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import newRequest from "../utils/axiosRequest";
import { Context } from "../context/Context";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; //gets the id of the post so from the url so that i can fetch from the backend
  const [posts, setPosts] = useState({});
  const [updatePost, setUpdatePost] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const PF = "http://localhost:3500/images/";

  React.useEffect(() => {
    const singlePost = async () => {
      const res = await newRequest.get("/posts/" + path);
      setPosts(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    singlePost();
  }, [path]);

  const updateContent = async () => {
    try {
      await newRequest.put(`/posts/${posts._id}`, {
        username: user.username,
        title: title,
        desc: desc,
      });
      setUpdatePost(false);
    } catch (err) {
      console.log("error", err);
    }
  };

  const deletePost = async () => {
    try {
      await newRequest.delete(`/posts/${posts._id}`, {
        data: {username: user.username}
      })
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 text-center mx-auto py-8 md:px-10 px-3">
        <div className="grid place-items-center mx-auto w-[50%] mb-4 gap-4">
          {/* Post Content */}
          {updatePost ? (
            <input
              className="text-center focus:outline-none"
              type="text"
              name="title"
              value={title}
              autoFocus
              placeholder="Edit Title..."
              id=""
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h2 className="text-center">{title}</h2>
          )}

          {/*Author */}
          <div className="flex items-center gap-4 justify-center">
            <img
              src={PF+user.profilePic}
              className="rounded-[90px] w-[3rem] h-[2rem] object-cover"
              alt=""
            />
            <div className="grid gap-y-1">
              <Link to={`/?user=${posts.username}`}>by {posts.username}</Link>
              {new Date(posts.createdAt).toDateString()}
            </div>
          </div>

          {posts.username === user?.username && (
            <div className="flex items-center gap-4 justify-center">
              <div className="flex">
                <p>Edit</p>
                <BiSolidEditAlt
                  className="text-lime-800 text-2xl cursor-pointer"
                  onClick={() => setUpdatePost((prevUpdate) => !prevUpdate)}
                />
              </div>

              <div className="flex">
                <p>Delete</p>
                <MdDelete onClick={deletePost} className="text-red-700 text-2xl" />
              </div>
            </div>
          )}
        </div>

        {posts.photo && (
          <img src={PF + posts.photo} alt="Post Image" className="w-[90%] h-[30rem] object-cover mx-auto" />
        )}
        <div className="w-[87%] mx-auto p-6 text-justify mt-6">
          {/* Small Info*/}

          {updatePost ? (
            <textarea
              name=""
              id=""
              className="w-full h-[300px] p-6 rounded-lg "
              placeholder="Edit Content"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            ></textarea>
          ) : (
            <p>{desc}</p>
          )}
        </div>

        <div>
          {updatePost &&
          <button
            type="submit"
            className="bg-black text-white p-4 rounded-lg w-[20%] mt-6"
            onClick={updateContent}
          >
            Update Post
          </button> }
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
