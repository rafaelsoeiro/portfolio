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
                        <h3>FRONT-END</h3>
                    </div>
                    <ul className="service-list">
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Paginas semanticas HTML5 e responsivas com CSS3 </p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Criar interfaces com Bootstrap 5</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Criar paginas dinamicas com Javascript </p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Criar aplicações SPA com React</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Gerenciamento de estado com Redux</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Estilização com Styled Components</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Next.js</p>
                        </li>
                    </ul>
                    {/* FIM DO SERVIÇO */}
                </article>
                <article className="services">
                    <div className="service-head">
                        <h3>BACK-END | DATABASES</h3>
                    </div>
                    <ul className="service-list">
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>
                                Desenvolvimento e manutenção de projetos Node.JS
                            </p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Criação e consumo de API's</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Criação de rotas com Express</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Interação com banco não relacional: Mongo DB</p>
                        </li>
                    </ul>
                    {/* FIM DO SERVIÇO */}
                </article>
            </div>
        </section>
    );
};

export default Services;
