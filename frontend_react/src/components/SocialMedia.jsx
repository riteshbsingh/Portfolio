import React from "react";
import { BsGithub, BsLinkedin, BsCodeSlash } from "react-icons/bs";
import {
  AiOutlineFileText
} from "react-icons/ai";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/Ritesh-B-Singh"
          target={"_blank"}
          rel="noreferrer"
        >
          {" "}
          <BsGithub color="black" />
        </a>
      </div>
      <div>
        <a
          href="https://leetcode.com/riteshbmsingh/"
          target={"_blank"}
          rel="noreferrer"
        >
          {" "}
          <BsCodeSlash color="black" />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/riteshbsingh/"
          target={"_blank"}
          rel="noreferrer"
        >
          <BsLinkedin color="black" />
        </a>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1gRTvn-6JRC1AlvkWLpHxxfP7ONqoM7te/view?usp=sharing"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiOutlineFileText color="black" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
