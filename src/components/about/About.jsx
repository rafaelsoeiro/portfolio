import React from "react";
import { FaAward } from "react-icons/fa";
import { BsFileEarmarkCode } from "react-icons/bs";
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
                    <img src={ME} alt="Sombre mim - img" className="about-me-img"/>
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                            <FaAward className="about-icon"/>
                            <h5>Experiencia Profissional</h5>
                            <small>Loading... </small>
                        </article>
                        <article className="about-card">
                            <BsFileEarmarkCode className="about-icon"/>
                            <h5>Codificando</h5>
                            <small>18 meses</small>
                        </article>
                        <article className="about-card">
                            <VscFolderActive className="about-icon"/>
                            <h5>Projetos Concluidos</h5>
                            <small>4</small>
                        </article>
                    </div>
                    <p>Sou um desenvolvedor apaixonado por soluções simples para problemas difíceis, me adapto facilmente a diferentes ambientes e a entrega contínua.</p>
                    <p>Atualmente busco a primeira experiência oficial com desenvolvimento. </p>
                    <a href="#contact" className="btn btn-primary">Converse comigo</a>
                </div>
            </div>
        </section>
    );
};

export default About;
