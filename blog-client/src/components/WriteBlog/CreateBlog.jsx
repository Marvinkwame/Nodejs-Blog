import React, { useContext } from "react";
import { BiImages } from "react-icons/bi";
import newRequest from "../../utils/axiosRequest";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const CreateBlog = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [blogImage, setBlogImage] = React.useState(null);
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const submitPost = async (e) => {
    e.preventDefault();
    const newPost = {
      title: title,
      desc: content,
      username: user.username,
    };
    if (blogImage) {
      const data = new FormData();
      const filename = Date.now() + blogImage.name;
      data.append("name", filename);
      data.append("file", blogImage);
      newPost.photo = filename;
      try {
        await newRequest.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await newRequest.post("/posts/", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="py-8">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 md:px-10 px-3">
        <h1 className="text-center font-semibold text-2xl mb-9">
          Want to share something? Write it.......
        </h1>

        {blogImage && (
          <img
            className="rounded-lg mx-auto w-[50%] h-[50%]"
            src={URL.createObjectURL(blogImage)}
            alt=""
          />
        )}

        <form action="" className="mx-auto text-center" onSubmit={submitPost}>
          <div className="flex items-center justify-center gap-4">
            <div>
              <label htmlFor="fileInput">
                <BiImages className="text-blue-500 text-4xl" />
              </label>
              <input
                type="file"
                id="fileInput"
                name="file"
                className="hidden cursor-pointer w-[70vw]"
                onChange={(e) => setBlogImage(e.target.files[0])}
              />
            </div>

            <label htmlFor="Title" className="hidden">
              Title
            </label>
            <input
              type="text"
              name="Title"
              id=""
              placeholder="Title"
              className="focus:outline-none w-[30rem] p-4"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mt-9">
            <textarea
              name=""
              id=""
              className="w-[80%] h-[300px] p-6 border-4 rounded-lg focus:outline-none"
              placeholder="Post Your Blog......"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white p-4 rounded-lg w-[20%] mt-6"
          >
            Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateBlog;
