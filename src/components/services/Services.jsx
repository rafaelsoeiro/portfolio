import React from "react";
import "./Services.css";
import { GoCheck } from "react-icons/go";
const Services = () => {
    return (
        <section id="service">
            <h5> Oque consigo fazer</h5>
            <h2>Skill's</h2>

            <div className="container services-container">
                <article className="services">
                    <div className="service-head">
                        <h3>Front-End</h3>
                    </div>
                    <ul className="service-list">
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Desenvolver sites através de arquivos do XD ou Figma</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Desenvolver aplicações responsivas</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Criar componentes reutilizaveis </p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                    {/* FIM DO SERVIÇO */}
                </article>
                <article className="services">
                    <div className="service-head">
                        <h3>Front-End</h3>
                    </div>
                    <ul className="service-list">
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                    {/* FIM DO SERVIÇO */}
                </article>
            </div>
        </section>
    );
};

export default Services;
