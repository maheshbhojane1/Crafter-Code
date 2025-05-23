import React from "react";
import hero from "../assets/hero.png";
import {HERO_CONTENT} from "../constants/index.js"

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-10 text-5xl font-thin tracking-tight lg:mt-16 lg:text-">
              Mahesh Bhojane
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-bold tracking-tighter">
              {HERO_CONTENT}
            </p>
            <button className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-1xl tracking-tight text-transparent"><a href="https://drive.google.com/file/d/1QgGouaEwJwN-y6TaFXaiETgKT2bOV81j/view?usp=sharing" target="_blank">Resume</a></button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="w-80 h-100 rounded-2xl" src={hero} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
