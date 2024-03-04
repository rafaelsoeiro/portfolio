import React from "react";
import { FaAward } from "react-icons/fa";
import { BsFileEarmarkCode } from "react-icons/bs";
import { VscFolderActive } from "react-icons/vsc";

import "./About.css";

import ME from "../../assets/perfil-linkedin.png";

const About = () => {
    return (
        <section id="about">
            <h5>Um pouco mais</h5>
            <h2>Sobre mim</h2>
            <div className="container about-container">
                <div className="about-me">
                    <img
                        src={ME}
                        alt="Sombre mim - img"
                        className="about-me-img"
                    />
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                            <FaAward className="about-icon" />
                            <h5>Experiencia Profissional</h5>
                            <small>Loading... </small>
                        </article>
                        <article className="about-card">
                            <BsFileEarmarkCode className="about-icon" />
                            <h5>Estudando e Codificando</h5>
                            <small>Desde Jun/2022</small>
                        </article>
                    </div>
                    <p>
                    Sou estudante e entusiasta da Tecnologia da Informação, atualmente cursando Bacharelado em Sistemas da Informação no Instituto Federal do Maranhão (IFMA) onde também obtive a formação de Técnico em Informática com enfâse na Análise e Desenvolvimento de Sistemas.
                    </p>
                    <p>
                    Atuo como desenvolvedor de software com foco no Front-end estou em busca de uma nova oportunidade profissioal, sempre em busca criar soluções inovadoras e funcionais com alta qualidade.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Converse comigo
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
