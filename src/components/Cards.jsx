import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 bg-transparent mx-auto mt-[-3rem] bg-white"
            src={single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$99</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">Spend up to 2GB</p>
          </div>
          <button className="bg-cyan-300 hover:bg-cyan-200 mx-auto rounded-md py-3 w-[200px] mt-5 text-black  font-semibold">
            Start trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 md:my-0 bg-sky-50">
          <img
            className="w-20 mx-auto bg-transparent mt-[-3rem] bg-white"
            src={double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">50 TB Storage</p>
            <p className="py-2 border-b mx-8 ">100 Granted User</p>
            <p className="py-2 border-b mx-8 ">Spend up to 100GB</p>
          </div>
          <button className="bg-cyan-400 hover:bg-cyan-300 mx-auto rounded-md py-3 w-[200px] mt-5 text-black  font-semibold">
            Start trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Ultimate</h2>
          <p className="text-center text-4xl font-bold">$599</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 TB Storage</p>
            <p className="py-2 border-b mx-8 ">300 Granted User</p>
            <p className="py-2 border-b mx-8 ">Spend up to 200GB</p>
          </div>
          <button className="bg-cyan-300 hover:bg-cyan-200 mx-auto rounded-md py-3 w-[200px] mt-5 text-black  font-semibold">
            Start trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
