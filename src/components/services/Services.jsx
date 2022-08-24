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
                            <p> Utilizar React, Hooks e React Router</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>React Icons</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Componentes funcionais</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Foco em componentes reutilizáveis</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Aplicações responsivas</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Gerenciamento de estado com Redux</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Utilizar Styled Components </p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>CSS intermediário</p>
                        </li>
                    </ul>
                    {/* FIM DO SERVIÇO */}
                </article>
                {/* <article className="services">
                    <div className="service-head">
                        <h3>UI & UX</h3>
                    </div>
                    <ul className="service-list">
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Desenvolver visando a usabilidade</p>
                        </li>
                    </ul> */}
                    {/* FIM DO SERVIÇO */}
                {/* </article> */}
            </div>
        </section>
    );
};

export default Services;
