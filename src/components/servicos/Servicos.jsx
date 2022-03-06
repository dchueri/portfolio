import React from "react";
import "./servicos.css";
import {BsCheck} from 'react-icons/bs'

const Servicos = () => {
  return (
    <section id="servicos">
      <h5>O que posso fazer por você?</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>  
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li> 
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li>
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li>
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li>
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li>
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li> 
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Web</h3>  
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li> 
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li>
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li>
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li>
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li>
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li> 
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Data Science</h3>  
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li> 
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li>
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li>
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li>
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li>
            <li>
              <BsCheck className="service__list-icon"/> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            </li> 
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Servicos;
