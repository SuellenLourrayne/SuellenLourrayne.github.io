// src/Home/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // Use useNavigate para navegação programática

  const handleContactButtonClick = () => {
    navigate("/Contact"); // Redireciona para a página pedida
  };

  return (
    <div className="App">

      <section id="about" className="about">
        <div className="form-container">
            <h2>About Me</h2>
            <p>My name is Suellen Lourrayne. I &apos; m from Brazil and have been captivated by the art of development since my teenage years. 
            </p>
        </div>
      </section>

      <section id="contact" className="cta">
        <button onClick={handleContactButtonClick}>Get in touch!</button>
      </section>

    </div>
  );
};

export default Home;
