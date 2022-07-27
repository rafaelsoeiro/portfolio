import React from "react";

import { useRef } from "react";
import emailjs from "emailjs-com";

import { BsGithub } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";

import "./Contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_736i7np",
                "template_h6cdkeo",
                form.current,
                "JKRs9KZ5FdLhPR-rK"
            )
            e.target.reset()
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <section id="contact">
            <h5> Com apenas um toque</h5>
            <h2> Converse comigo</h2>
            <div className="container contact-container">
                <div className="contact-options">
                    <article className="contact-option">
                        <ImLinkedin className="contact-option-icon" />
                        <h4>Linkedin</h4>
                        <h5>in/rafael-soeiro/</h5>
                        <a
                            className="btn"
                            href="https://www.linkedin.com/in/rafael-soeiro/"
                            target="_blank"
                        >
                            Ver Perfil
                        </a>
                    </article>
                    <article className="contact-option">
                        <IoIosMail className="contact-option-icon" />
                        <h4>email</h4>
                        <h5>rafaelssoeiro@gmail.com</h5>
                        <a
                            className="btn"
                            href="mailto:rafaelssoeiro@gmail.com"
                        >
                            Entrar em contato
                        </a>
                    </article>
                    <article className="contact-option">
                        <ImWhatsapp className="contact-option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+55 (98) 98488-3851</h5>
                        <a
                            className="btn"
                            href="https://wa.me/5598984883851"
                            target="_blank"
                        >
                            Entrar em contato
                        </a>
                    </article>
                </div>
                {/* Fim das opções de contato */}
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Seu nome completo"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Seu email para contato"
                        required
                    />
                    <textarea
                        name="message"
                        id=""
                        rows="19"
                        placeholder="Sua mensagem"
                        required
                    ></textarea>
                    <button className="btn btn-primary" type="submit">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
