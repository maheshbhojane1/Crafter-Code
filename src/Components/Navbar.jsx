import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <nav className=" mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          {/* <img className="mx-2 w-11" /> */}
          <a href="https://craftercode.netlify.app/"><img className="mx-2 w-11" src={logo} alt="logo" /></a>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/mahesh-bhojane-31ba3a23b/"><FaLinkedin /></a>
          <a href=""><FaGithub /></a>
          <a href=""><FaSquareXTwitter /></a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
