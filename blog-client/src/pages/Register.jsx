import React from "react";
import register from "../assets/blogregister.webp";
import newRequest from "../utils/axiosRequest";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [responseError, setResponseError] = React.useState('')
  const navigate = useNavigate()

  function handleChange(event) {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const res = await newRequest.post("/auth/register", {
        ...user,
      });
      setResponseError("");
      navigate('/login')
    } catch (err) {
      // If there's an error from the backend, update the responseError state with the error message.
      if (err.response && err.response.data && err.response.data.error) {
        setResponseError(err.response.data.error);
      } else {
        // If the error is not coming from the backend response, log it to the console for further investigation.
        console.log("An unexpected error occurred:", err);
      }
    }
  };

  return (
    <section className="w-full h-screen flex flex-col lg:flex-row items-start">
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
        <div className="mx-auto flex items-center justify-center">
          <h2>Marvin's Blog</h2>
        </div>
        <h1 className="text-base lg:text-2xl heading">
          Sign Up to Create An Account
        </h1>

        <form
        onSubmit={handleSubmit}
          className="mt-7 grid place-items-center mx-auto overflow-hidden w-[60%] gap-4"
        >
          <div className="w-full">
            <label htmlFor="" className="hidden">
              User Name
            </label>
            <input
              type="text"
              className="py-2 rounded-sm px-8 w-full border-2 outline-none"
              placeholder="User Name"
              name="username"
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label htmlFor="" className="hidden">
              Email Address
            </label>
            <input
              type="email"
              className="py-2 rounded-sm px-8 w-full border-2 outline-none"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="bg-white w-full">
            <label htmlFor="" className="hidden">
              Password
            </label>
            <input
              type="password"
              className="py-2 rounded-sm px-8 w-full border-2 outline-none"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>


          <button className="bg-[#187B99] text-white rounded-sm w-[100%] px-4 py-4 text-center" type="submit">
            Sign Up
          </button>
          {responseError && <p className="text-red-600">{responseError}</p>}
        </form>
      </div>

      <div className="relative w-1/2 h-full hidden lg:flex">
        <img
          src={register}
          alt="Signup image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Register;
