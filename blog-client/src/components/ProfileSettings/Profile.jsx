import React from "react";

const Profile = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 md:px-10 px-3">
        <h2 className="p-4 bg-slate-900 rounded-lg text-center text-white text-2xl">
          Edit Profile
        </h2>

        <form
          action=""
          className="mt-7 grid place-items-center gap-6 mx-auto overflow-hidden w-[60%]"
        >
          <div className="w-full mb-6 ">
            <label htmlFor="" className="hidden">
              Profile Picture
            </label>
            <div className="grid">
              <img
                className="w-[300px] mx-auto my-0 rounded-3xl"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput"
              />
            </div>

            <div className="w-full my-6">
              <label htmlFor="" className="">
                Full Name
              </label>
              <input
                type="text"
                className="py-2 rounded-sm px-8 w-full border-2 outline-none"
                placeholder="Full Name"
              />
            </div>

            <div className="w-full mb-6">
              <label htmlFor="" className="">
                Email Address
              </label>
              <input
                type="email"
                className="py-2 rounded-sm px-8 w-full border-2 outline-none"
                placeholder="Email Address"
              />
            </div>

            <div className="bg-white w-full mb-6">
              <label htmlFor="" className="">
                Password
              </label>
              <input
                type="password"
                className="py-2 rounded-sm px-8 w-full border-2 outline-none"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button className="bg-[#187B99] text-white rounded-sm w-[100%] px-4 py-4 text-center">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
