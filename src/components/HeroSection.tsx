import Image from "next/image";
import React from "react";
import herosvg from "../../public/eater.svg";

export default function HeroSection() {
  return (
    <div id="home" className="hero_bg">
      <div className="flex sm:flex-row flex-col-reverse items-center justify-center h-screen bg-dots-pattern bg-pixdots bg-dots-vignette gap-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="sm:text-9xl text-7xl font-bold text-center">
            <span className="text-green-500">Eat</span> Right
            <br />
            Eat <span className="text-green-500">Tight!</span>
          </h1>
          <p className="text-center text-xl mt-8 text-gray-700">
            Your personal nutrition companion that makes
            <br />
            calorie tracking simple, intuitive, and actually enjoyable.
          </p>
          <div className="flex flex-row mt-10 items-center justify-center gap-10">
            <button className="border-2 border-yellow-500 hover:bg-gray-600 text-black hover:text-slate-100 shadow-md text-xl px-10 py-2 rounded-full">
              Try Demo
            </button>
            <button className="bg-green-500 hover:bg-green-800 border-2 border-yellow-500 shadow-xl text-white text-xl font-bold px-10 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
        <div className="">
          <Image
            src={herosvg}
            alt="hero"
            width={550}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
