import React from "react";
import "./Header.css";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

import ME from "../../assets/me.png";

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <h5> Olá, eu sou </h5>
                <h1>Rafael Soeiro</h1>
                <h5 className="text-light"> Front-End Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="" />
                </div>
                <a href="#contact" className="scroll-down">
                    Contato
                </a>
            </div>
        </header>
    );
};

export default Header;