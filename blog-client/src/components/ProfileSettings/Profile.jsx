import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import newRequest from "../../utils/axiosRequest";
import { BiImages } from "react-icons/bi";

const Profile = () => {
  const { user, dispatch } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false)
  const PF = "http://localhost:3500/images/";

  const deleteAccount = async () => {
    //let confirmDelete = window.confirm(`Are you sure to delete your account?`);
    try{
      const  result = await newRequest.delete(`/users/${user._id}`, {
        userId: user._id,
        username
      });

    } catch (err) {
      console.log(err)
    }

  }

  const updateDetails = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await newRequest.post("/upload", data);
      } catch (err) {
        console.log(err)
      }
    }
    try {
      const res = await newRequest.put("/users/" + user._id, updatedUser);
      setSuccess(true)
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data})
    } catch (err) {
      console.log(err);
      dispatch({ type: "UPDATE_FAILURE" })
    }
  };
  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 md:px-10 px-3">
        <h2 className="p-4 bg-slate-900 rounded-lg text-center text-white text-2xl">
          Edit Profile
        </h2>

        <form
          action=""
          onSubmit={updateDetails}
          className="mt-7 grid place-items-center gap-6 mx-auto overflow-hidden w-[60%]"
        >
          <div className="w-full mb-6 ">
            <label htmlFor="" className="">
              Profile Picture
            </label>
            <div className="grid">
              <label htmlFor="fileInput">
                <BiImages className="text-blue-500 text-4xl" />
              </label>
              <input
                type="file"
                id="fileInput"
                name="file"
                className="hidden cursor-pointer w-[70vw"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <img
                className="w-[300px] mx-auto my-0 rounded-3xl"
                src={
                  file
                    ? URL.createObjectURL(file)
                    : PF+user.profilePic
                }
                alt="Profile Image"
              />
              
            </div>

            <div className="w-full my-6">
              <label htmlFor="" className="">
                Username
              </label>
              <input
                type="text"
                className="py-2 rounded-sm px-8 w-full border-2 outline-none"
                placeholder={user.username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="w-full mb-6">
              <label htmlFor="" className="">
                Email Address
              </label>
              <input
                type="email"
                className="py-2 rounded-sm px-8 w-full border-2 outline-none"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="bg-white w-full mb-6">
              <label htmlFor="" className="">
                Password
              </label>
              <input
                type="password"
                className="py-2 rounded-sm px-8 w-full border-2 outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#187B99] text-white rounded-sm w-[100%] px-4 py-4 text-center"
          >
            Save Changes
          </button>

          <button onClick={deleteAccount}>Delete Account</button>
          {success && <p className="text-green-600 text-2xl font-semibold">Profile has been updated successfully</p> }
        </form>
      </div>
    </section>
  );
};

export default Profile;
