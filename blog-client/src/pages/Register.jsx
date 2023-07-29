import React from "react";
import register from "../assets/blogregister.webp"

const Register = () => {
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
          className="mt-7 grid place-items-center mx-auto overflow-hidden w-[60%] gap-4"
        >
          <div className="w-full">
            <label htmlFor="" className="hidden">
              Full Name
            </label>
            <input
              type="text"
              className="py-2 rounded-sm px-8 w-full border-2 outline-none"
              placeholder="Full Name"
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
            />
          </div>

          <button className="bg-[#187B99] text-white rounded-sm w-[100%] px-4 py-4 text-center">
            Sign Up
          </button>
        </form>
      </div>

      <div className="relative w-1/2 h-full hidden lg:flex">
        <img src={register} alt="Signup image" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Register;
