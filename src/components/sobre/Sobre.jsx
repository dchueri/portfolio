import React from "react";
import "./sobre.css";
import ME from "../../assets/sobre-mim.jpg";
import { BiBook } from "react-icons/bi";
import { MdOutlineLightbulb } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Sobre = () => {
  return (
    <section id="sobre">
      <h5>Sabia mais</h5>
      <h2>Sobre mim!</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Imagem Sobre Mim" />
          </div>
        </div>

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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde magni
            tempora dolorem impedit iure exercitationem incidunt, ab error
            repudiandae? Corporis minima officia sed ullam eaque ipsum repellat
            molestias numquam doloribus?
          </p>

          <a href="#contato" className="btn btn-primary">
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
