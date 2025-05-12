import React from "react";
import about from "../assets/about.png";
import {ABOUT_TEXT} from "../constants/index.js"

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center font-semibold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
        About <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl"  src={about} alt="About me" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
             <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl font-jost font-bold py-6">{ABOUT_TEXT}</p>
             </div>
          </div>
      </div>
    </div>
  );
}

export default About;
