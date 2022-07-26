import React from "react";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className="header-socials">
            <a
                href="https://www.linkedin.com/in/rafael-soeiro/"
                target="_blank"
            >
                {" "}
                <ImLinkedin />{" "}
            </a>
            <a href="https://github.com/rafaelsoeiro" target="_blank">
                <BsGithub />
            </a>
        </div>
    );
};

export default HeaderSocials;
