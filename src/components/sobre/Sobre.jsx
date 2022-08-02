import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdOutlineLightbulb } from "react-icons/md";
import "./sobre.css";

const Sobre = () => {
  return (
    <section id="sobre">
      <h5>Sabia mais</h5>
      <h2>Sobre mim!</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiBook className="about__icon" />
              <h5>Experiencia</h5>
              <small>1+ ano de estudo</small>
            </article>

            <article className="about__card">
              <MdOutlineLightbulb className="about__icon" />
              <h5>Conhecimentos</h5>
              <small>Conhecimento em 6 linguagens de programação</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projetos</h5>
              <small>Que tal uma olhada no GitHub?</small>
            </article>
          </div>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; Ser oficial do Exército Brasileiro por 8
            anos me trouxeram algumas qualidades que podem servir muito bem para
            a área de programação, como por exemplo: liderança, trabalhos em
            equipe, resiliência, flexibilidade e outros fatores que estão
            ligados a um bom trabalho em funções chave. Agora buscando um novo
            caminho como programador. Embora nunca tenha trabalhado na área eu
            possuo alguns projetos que você pode estar vendo em meu{" "}
            <a href="https://github.com/dchueri">GitHub</a>.
          </p>
          <p style={{textAlign: 'center'}}>Surgiu a curiosidade sobre mais detalhes? Vamos conversar.</p>
          <div className="div-btn">
            <a href="#contato" className="btn btn-primary" id="contact-btn">
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
