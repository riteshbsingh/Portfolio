import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  BsGithub,
  BsLinkedin,
  BsCodeSlash
} from "react-icons/bs";
import {
  AiOutlineFileText
} from "react-icons/ai";
import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <a href=".">
            <img src={images.logo} alt="logo" />
          </a>
        </div>
        <ul className="app__navbar-links">
          {["home", "about", "work", "skills", "experience", "contact"].map(
            (item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                {item === "experience" ? (
                  <a href="#skills" rel="noreferrer">
                    {item}
                  </a>
                ) : (
                  <a href={`#${item}`} rel="noreferrer">
                    {item}
                  </a>
                )}
              </li>
            )
          )}

          <li className="app__flex p-text">
            <a
              href="https://drive.google.com/file/d/1cm6il_ylE0vHb9LFxcohRrTao4Gu7y-T/view?pli=1"
              target={"_blank"}
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              // whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {[
                  "home",
                  "about",
                  "work",
                  "skills",
                  "experience",
                  "contact",
                ].map((item) => (
                  <li key={item}>
                    {/* <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a> */}
                    {item === "experience" ? (
                      <a
                        onClick={() => setToggle(false)}
                        href="#skills"
                        rel="noreferrer"
                      >
                        {item}
                      </a>
                    ) : (
                      <a
                        onClick={() => setToggle(false)}
                        href={`#${item}`}
                        rel="noreferrer"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                ))}

                <li>
                  <a
                    onClick={() => setToggle(false)}
                    href="https://drive.google.com/file/d/185JWB_Kaxrpvb0e0-JsBWBScxec7jxaE/view?usp=sharing"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </li>
              </ul>
              <ul className="navbarSocial">
                <li>
                  <a
                    href="https://github.com/Ritesh-B-Singh"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {" "}
                    <BsGithub />
                  </a>
                  <a
                    href="https://leetcode.com/riteshbmsingh/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <BsCodeSlash />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/riteshbsingh/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/185JWB_Kaxrpvb0e0-JsBWBScxec7jxaE/view?usp=sharing"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <AiOutlineFileText />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
