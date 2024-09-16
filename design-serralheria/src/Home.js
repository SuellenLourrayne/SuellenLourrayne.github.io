// src/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Design Serralheria</h1>
        <p>Transformando metal em arte!</p>
      </header>

      <section className="gallery">
        <h2>Nossos Trabalhos</h2>
        <div className="photos">
          <img src="/images/trabalho1.jpg" alt="Trabalho 1" />
          <img src="/images/trabalho2.jpg" alt="Trabalho 2" />
          <img src="/images/trabalho3.jpg" alt="Trabalho 3" />
        </div>
      </section>

      <section className="cta">
        <h2>Precisa de um orçamento?</h2>
        <p>Preencha o formulário e entraremos em contato!</p>
        <button onClick={() => navigate("/formulario")}>Solicitar Orçamento</button>
      </section>
    </div>
  );
};

export default Home;
