import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center justify-center flex flex-col">
        <p className="uppercase text-xl font-bold p-2 bg-gradient-to-r from-cyan-300 to-cyan-200 bg-clip-text text-transparent">
          Growing with data analytics
        </p>
        <h1 className="text-white md:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center py-3">
          <p className="md:text-3xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue fot BTB, BTC, & SASS
          platforms.
        </p>
        <div>
          <button className="bg-cyan-300 hover:bg-cyan-200 rounded-md py-3 px-8 mt-5 text-black mx-auto font-semibold">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
