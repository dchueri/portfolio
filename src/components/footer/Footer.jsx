import React from "react";
import "./footer.css";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        DIEGO CHUERI
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#experiencia">Experiência</a>
        </li>
        <li>
          <a href="#portifolio">Portifólio</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/dchueri">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com/dchueri">
          <AiFillInstagram />
        </a>
        <a href="https://www.github.com/dchueri">
          <AiFillGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DIEGO CHUERI. Todos os direitos reservados.</small>
        </div>
    </footer>
  );
};

export default Footer;
