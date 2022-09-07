import React from "react";
import "./Header.css";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

import ME from "../../assets/me-portfolio.png";

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <div className="head">
                    <h5> Olá, eu sou </h5>
                    <h1>Rafael Soeiro</h1>
                    <h5 className="text-light"> Front-End Developer </h5>
                </div>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="about-me" />
                </div>

                <a href="#contact" className="scroll-down">
                    Contato
                </a>
            </div>
        </header>
    );
};

export default Header;
