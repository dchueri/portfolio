import React from "react";
import IMG1 from "../../assets/IMG1.jpg";
import "./portifolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "ArchApp",
    language: "TypeScript",
    description:
      "O Arch tem o intuito de realizar o controle de bonificações mensais de cada projetista a respeito do projeto arquitetônico.",
    github: "https://github.com/dchueri/arch-site/",
  },
  {
    id: 2,
    image: IMG1,
    title: "Inspect",
    language: "Java",
    description:
      "O Inspect tem o intuito de realizar a importação de transações bancárias. Sua principal função é realizar a análise das transações para identificar possíveis transações suspeitas.",
    github: "https://github.com/dchueri/Inspect/",
  },
  {
    id: 3,
    image: IMG1,
    title: "API - Controle Financeiro",
    language: "NodeJS",
    description:
      "A API permite que uma pessoa cadastre suas receitas e despesas do mês, bem como gerar um relatório mensal.",
    github: "https://github.com/dchueri/api-controle-financeiro",
  },
];

const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>Veja meus trabalhos</h5>
      <h2>Portifólio</h2>

      <div className="container portifolio__container">
        {data.map(({ id, image, title, language, description, github }) => {
          return (
            <article key={id} className="portifolio__item">
              <div className="portifolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{language}</p>
              <small>{description}</small>
              <div className="portifolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portifolio;
