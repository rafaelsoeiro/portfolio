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
                            <p>Implementação de animações e transições CSS</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Implementação de técnicas de SEO </p>
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
                            <p>Criação de menus e navegação interativa</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Integração de APIs de terceiros</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Uso de Flexbox e Grid para layout responsivo</p>
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
                            Integração de APIs de terceiros
                            </p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Desenvolvimento de APIs REST</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Criação de rotas com Express</p>
                        </li>
                        <li>
                            <GoCheck className="service-list-icon" />
                            <p>Uso do Git para desenvolvimento colaborativo</p>
                        </li>
                    </ul>
                    {/* FIM DO SERVIÇO */}
                </article>
            </div>
        </section>
    );
};

export default Services;
