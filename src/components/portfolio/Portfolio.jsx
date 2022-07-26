import React from "react";
import "./Portfolio.css";
import { BsGithub } from "react-icons/bs";
import { RiShareBoxFill } from "react-icons/ri";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "title-item",
        gitHub: "https://github.com/",
        demo: "https://github.com/rafaelsoeiro",
    },
    {
        id: 2,
        image: IMG2,
        title: "title-item",
        gitHub: "https://github.com/",
        demo: "https://github.com/rafaelsoeiro",
    },
    {
        id: 3,
        image: IMG3,
        title: "title-item",
        gitHub: "https://github.com/",
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
                    return(
                        <article className="portfolio-item" key={id}>
                        <div className="portfolio-item-img">
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio-item-cta">
                            <a href={gitHub} className="btn">
                                <BsGithub
                                    className="portfolio-item-icon"
                                    target="_blank"
                                />
                            </a>
                            <a href={demo} className="btn btn-primary">
                                <RiShareBoxFill
                                    className="portfolio-item-icon"
                                    target="_blank"
                                />
                            </a>
                        </div>
                    </article>
                    )
                })}
            </div>
        </section>
    );
};

export default Portfolio;

// {
//     data.map(({ id, title, image, gitHub, demo }) => {
//         // <article className="portfolio-item" key={id}>
//         //     <div className="portfolio-item-img">
//         //         <img src={image} alt={title} />
//         //     </div>
//         //     <h3>{title}</h3>
//         //     <div className="portfolio-item-cta">
//         //         <a href={gitHub} className="btn">
//         //             <BsGithub
//         //                 className="portfolio-item-icon"
//         //                 target="_blank"
//         //             />
//         //         </a>
//         //         <a href={demo} className="btn btn-primary">
//         //             <RiShareBoxFill
//         //                 className="portfolio-item-icon"
//         //                 target="_blank"
//         //             />
//         //         </a>
//         //     </div>
//         // </article>;
//     });
// }
