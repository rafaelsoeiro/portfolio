import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

import "./About.css";

import ME from "../../assets/me-about.jpg";

const About = () => {
    return (
        <section id="about">
            <h5>Um pouco mais</h5>
            <h2>Sobre mim</h2>
            <div className="container about-container">
                <div className="about-me">
                    <img src={ME} alt="Sombre mim - img" className="about-me-img" />
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                            <FaAward className="about-icon"/>
                            <h5>Experiencia</h5>
                            <small>3+ years</small>
                        </article>
                        <article className="about-card">
                            <FiUsers className="about-icon"/>
                            <h5>Clientes</h5>
                            <small>3+ years</small>
                        </article>
                        <article className="about-card">
                            <VscFolderActive className="about-icon"/>
                            <h5>Projetos</h5>
                            <small>3+ years</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nesciunt recusandae accusamus quisquam sint sit tempora, ipsam consectetur impedit quaerat odit consequuntur cupiditate! </p>
                    <a href="#contact" className="btn btn-primary">Converse comigo</a>
                </div>
            </div>
        </section>
    );
};

export default About;
