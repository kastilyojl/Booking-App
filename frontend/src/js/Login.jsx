import React, { useState } from "react";
import undraw_certificate_71gt from "../assets/undraw_certificate_71gt.svg";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      alert("Login Successfullly");
    } catch {}
  };

  return (
    <div className="h-screen flex items-center justify-center px-5">
      <div className="flex flex-col rounded md:grid grid-cols-[200px_1fr] w-[600px] h-[400px]">
        <div className="hidden p-4 md:block">
          <div className="h-full ">
            <img
              className="object-cover w-full"
              src={undraw_certificate_71gt}
              alt="login image"
            />
          </div>
        </div>
        <div className="relative flex flex-col justify-center p-4">
          <h1 className="mb-5 pt-4 text-[#00004C] text-[32px] font-semibold md:absolute md:top-0 md:mb-0">
            Login
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-4"
          >
            <input
              className="h-8 focus:outline-none pl-2 text-[14px] border-b-[1px] border-b-blue-950"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="h-8 pl-2 focus:outline-none text-[14px] border-b-[1px] border-b-blue-950"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-[12px]">
              Don't have an account yet? <Link to="/register">Register</Link>
            </p>
            <button
              className="bg-blue-950 p-2 text-white rounded-md w-[140px] mx-auto"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
