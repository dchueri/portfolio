import React from "react";
import Contato from "./components/contato/Contato";
import Experiencia from "./components/experiencia/Experiencia";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portifolio from "./components/portifolio/Portifolio";
import Sobre from "./components/sobre/Sobre";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Sobre />
      <Experiencia />
      <Portifolio />
      <Contato />
      <Footer />
    </>
  );
};

export default App;
