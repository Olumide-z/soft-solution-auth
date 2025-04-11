import React from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import Image from "next/image";

export default function Signup() {
  return (
    <div className="min-h-screen relative flex overflow-hidden items-center justify-center bg-[#f0f4f3] p-4">
      {/* Red Box */}
      <div className="absolute top-0 right-[-2rem] md:w-[310.85px] w-[250px] h-[388px] z-0">
        <Image
          src="/images/red-box.png"
          fill
          className="object-cover"
          alt="Red Box"
        />
      </div>

      {/* Yellow Ellipse */}
      <div className="absolute bottom-0 left-0 md:w-[225px] w-[180px] h-[250px] z-0 opacity-[.9]">
        <Image
          src="/images/yellow-ellipse.png"
          fill
          className="md:object-cover object-contain"
          alt="Yellow Ellipse"
        />
      </div>

      {/* Main Card */}
      <div className="flex flex-col md:flex-row w-full max-w-[90vw] z-[999] min-h-[80vh] rounded-xl overflow-hidden">
        {/* Left Panel */}
        <div className="w-full md:w-[40%] bg-[#06A67E] text-white flex flex-col items-center justify-center p-6 md:p-10 relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="mb-6 text-center text-sm md:text-[0.9rem] md:w-[70%] w-full">
            To keep connected with us please login with your personal info
          </p>
          <button className="border-1 cursor-pointer text-[0.75rem] border-white w-[160px] h-[43px] rounded-full hover:bg-white hover:text-[#38B593] transition">
            SIGN IN
          </button>

          <img
            src="/images/Polygon1.svg"
            alt="shape1"
            className="absolute top-[40%] right-0 md:w-[100px] w-[70px] md:h-[100px] h-[70px] opacity-70"
          />
          <img
            src="/images/Polygon2.svg"
            alt="shape2"
            className="absolute top-[10%] right-[20%] w-[49px] h-[49px] opacity-70"
          />
          <img
            src="/images/rectangle.svg"
            alt="shape3"
            className="absolute bottom-[20%] right-[50%] w-[38px] h-[38px] opacity-70"
          />
          <img
            src="/images/circle.svg"
            alt="shape3"
            className="absolute top-[25%] right-[-2rem] w-[57px] h-[57px] opacity-70"
          />
           <img
            src="/images/circle2.png"
            alt="shape3"
            className="absolute bottom-0 left-[-2rem] md:w-[190px] w-[90px] md:h-[190px] h-[100px] opacity-70"
          />
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-[60%] bg-white p-6 md:p-10 flex flex-col justify-center items-center">
          <h2 className="text-[1.5rem] md:text-[1.6rem] font-[700] text-[#38B593] mb-4 text-center">
            Create Account
          </h2>

          {/* Social Icons */}
          <div className="flex justify-center gap-2 mb-4">
            <SocialIcon image="twitter.svg" />
            <SocialIcon image="facebook.svg" />
            <SocialIcon image="linkedin.svg" />
          </div>

          <p className="text-center text-[#9A9A9A] mb-6 text-sm">
            or use your email for registration
          </p>

          <form className="flex flex-col gap-4 w-full sm:w-[80%] md:w-[70%]">
            {/* Name Input */}
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Name"
                className="w-full pl-10 pr-4 text-[#9A9A9A] py-3 bg-[#F4F8F5] placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 text-[#9A9A9A] pr-4 py-3 bg-[#F4F8F5] placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 text-[#9A9A9A] pr-4 py-3 bg-[#F4F8F5] placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            {/* Submit Button */}
            <div className="flex item-center justify-center mt-4">
              <button
                type="submit"
                className="bg-[#38B593] text-white h-[43px] w-[160px] py-2 text-[.75rem] cursor-pointer rounded-full hover:bg-emerald-600 transition"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
