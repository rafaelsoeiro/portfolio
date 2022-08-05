import React from "react";
import "./Portfolio.css";
import { BsGithub } from "react-icons/bs";
import { RiShareBoxFill } from "react-icons/ri";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/loading.jpg";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Portfolio",
        gitHub: "https://github.com/rafaelsoeiro/portfolio",
        demo: "#",
    },
    {
        id: 2,
        image: IMG2,
        title: "To Do List",
        gitHub: "https://github.com/rafaelsoeiro/lista-de-tarefas",
        demo: "https://portfolio-rafaelssoeiro.netlify.app/",
    },
    {
        id: 3,
        image: IMG3,
        title: "Em breve: Calculadora",
        gitHub: "https://github.com/",
        demo: "https://github.com/rafaelsoeiro",
    },
    {
        id: 4,
        image: IMG3,
        title: "Loading...",
        gitHub: "https://github.com/rafaelsoeiro",
        demo: "https://github.com/rafaelsoeiro",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>Meus trabalhos recentes</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio-container">
                {data.map(({ id, image, title, gitHub, demo }) => {
                    return (
                        <article className="portfolio-item" key={id}>
                            <div className="portfolio-item-img">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio-item-cta">
                                <a
                                    href={gitHub}
                                    className="btn"
                                    target="_blank"
                                >
                                    <BsGithub className="portfolio-item-icon" />
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                >
                                    <RiShareBoxFill className="portfolio-item-icon" />
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
