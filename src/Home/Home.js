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
			zzz
        </div>
      </section>

    </div>
  );
};

export default Home;
