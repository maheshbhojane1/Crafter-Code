import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className=" mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          {/* <img className="mx-2 w-11" /> */}
          <a href="https://craftercode.netlify.app/"><img className="mx-2 w-11" src={logo} alt="logo" /></a>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/mahesh-bhojane-31ba3a23b/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/maheshbhojane1" target="_blank"><FaGithub /></a>
          <a href="https://x.com/nftniverse" target="_blank"><FaSquareXTwitter /></a>
          <a href="https://discord.com/channels/@mahesh1399/1072490445055213689" target="_blank"><FaDiscord /></a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
