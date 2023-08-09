import React, { useContext, useRef, useState } from "react";
import register from "../assets/blogregister.webp";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import newRequest from "../utils/axiosRequest";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [responseError, setResponseError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await newRequest.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      setResponseError("");
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILED" });
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
          action=""
          onSubmit={handleSubmit}
          className="mt-7 grid place-items-center mx-auto overflow-hidden w-[60%] gap-4"
        >
          <div className="w-full">
            <label htmlFor="" className="hidden">
              Email Address
            </label>
            <input
              type="email"
              className="py-2 rounded-sm px-3 w-full border-2 outline-none"
              placeholder="Email Address"
              ref={emailRef}
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
              ref={passwordRef}
            />
          </div>

          <button
            type="submit"
            className="bg-[#187B99] text-white disabled:cursor-not-allowed rounded-sm w-[100%] px-4 py-4 text-center"
            disabled={isFetching}
          >
            Sign In
          </button>

          <p className="heading text-center">
            Don't have an account? <br />
            <Link
              to="/register"
              className="text-[#187B99] ml-2 font-bold heading"
            >
              Sign Up
            </Link>
          </p>

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

export default Login;
