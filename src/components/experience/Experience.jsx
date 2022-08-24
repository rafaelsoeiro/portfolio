import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experience = () => {
    return (
        <section id="experience">

            <h5>Quais ferramentas estão presentes no meu dia a dia</h5>
            <h2>Tech Stack</h2>
            <div className="container experience-container">
                <div className="expecience-front-end">
                    <h3>Front-end Development</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsFillPatchCheckFill className="experience-details-icons" />
                            <div>
                                <h4>HTML5 + CSS3</h4>
                                <small className="text-ligth"> Intermediario</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsFillPatchCheckFill  className="experience-details-icons"/>
                            <div>
                                <h4>Javascript</h4>
                                <small className="text-ligth"> Intermediario</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsFillPatchCheckFill className="experience-details-icons"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-ligth"> Intermediario</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsFillPatchCheckFill className="experience-details-icons"/>
                            <div>
                                <h4>Typescript</h4>
                                <small className="text-ligth"> Básico</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsFillPatchCheckFill className="experience-details-icons" />
                            <div>
                                <h4>Next.js</h4>
                                <small className="text-ligth"> Básico</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsFillPatchCheckFill className="experience-details-icons"/>
                            <div>
                                <h4>React</h4>
                                <small className="text-ligth"> Intermediario</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience-back-end">
                    <h3>Back-end Development</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsFillPatchCheckFill className="experience-details-icons"/>
                            <div>
                                <h4>Node.js</h4>
                                <small className="text-ligth"> Básico</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsFillPatchCheckFill className="experience-details-icons"/>
                            <div>
                                <h4>Git</h4>
                                <small className="text-ligth"> Básico</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
