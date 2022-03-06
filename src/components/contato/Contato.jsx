import React, { useRef } from "react";
import "./contato.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import emailjs from "emailjs-com";

const Contato = () => {
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_5utp39z",
      "template_prerx8h",
      form.current,
      "54rRNC3JULB_O63qn"
    );
    e.target.reset();
  };
  return (
    <section id="contato">
      <h5>Vamos conversar</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>diegochueri@gmail.com</h5>
            <a href="mailto:diegochueri@gmail.com" target="_blank">
              Envie agora
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 21 98480-0259</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5521984800259"
              target="_blank"
            >
              Envie agora
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={enviarEmail}>
          <input type="text" name="nome" placeholder="Nome completo" required />
          <input type="email" name="email" placeholder="Seu email" required />
          <textarea
            name="mensagem"
            rows="7"
            placeholder="Escreva sua mensagem"
            required
          />
          <button type="submit" className="btn btn-primary">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
