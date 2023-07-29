import React from "react";

const CreatePost = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 border-blue-950 md:px-10 px-3">
        {/* Post Content */}
        <h2>Create Post</h2>

        <div>
          <form action="">
            <div className="py-8">
              <label htmlFor="">Title</label>
              <input id="fileInput" type="file" style={{ display: "none" }} />
              <input
                className="writeInput"
                placeholder=""
                type="text"
                autoFocus={true}
              />
            </div>
            <div>
              <textarea
                className="w-[100%] h-[80vh] p-12 text-lg"
                placeholder="What's on your mind. Spit it out..."
                type="text"
                autoFocus={true}
              />
            </div>

            <div className="mx-auto my-0 grid place-items-center mt-8">
            <button
              type="submit"
              className="bg-[#187B99] text-white rounded-sm w-[50%] mx-auto my-0 px-4 py-4 text-center"
            >
              Publish
            </button>
            </div>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
