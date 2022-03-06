import React from "react";
import "./portifolio.css";
import IMG1 from '../../assets/IMG1.jpg'
import IMG2 from '../../assets/IMG2.jpg'
import IMG3 from '../../assets/IMG3.jfif'


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Título do trabalho",
    github: "https://github.com/dchueri",
  },
  {
    id: 2,
    image: IMG2,
    title: "Título do trabalho",
    github: "https://github.com/dchueri",
  },
  {
    id: 3,
    image: IMG3,
    title: "Título do trabalho",
    github: "https://github.com/dchueri",
  },
];

const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>Veja meus trabalhos</h5>
      <h2>Portifólio</h2>

      <div className="container portifolio__container">
        {
          data.map(({id,image,title,github}) => {
            return (
              <article key={id} className="portifolio__item">
              <div className="portifolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portifolio__item-cta">
                <a href={github} className="btn" target='_blank'>
                  GitHub
                </a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portifolio;
