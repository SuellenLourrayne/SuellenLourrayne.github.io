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
            <p>My name is Suellen Lourrayne. I am from Brazil and have been captivated by the art of development since my teenage years. </p>
            <p>At 21, I moved to Ireland to enhance my language skills and immerse myself in a new culture. Since then, I have dedicated myself to continuous improvement, always seeking new knowledge and opportunities. </p>
            <p>Here, you will find a collection of my work and projects that reflect my journey so far.</p>
        </div>
      </section>

      <section id="contact" className="cta">
        <button onClick={handleContactButtonClick}>Get in touch!</button>
      </section>

    </div>
  );
};

export default Home;
