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

      <header className="App-header">
        <nav className="App-nav">
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </nav>

        <div className="description col-6">
          <h2>Suellen Lourrayne - Professional Portfolio</h2>
		        <p>I am from Brazil and have been captivated by the art of development since my teenage years. 
              At 21, I moved to Ireland to enhance my language skills and immerse myself in a new culture. 
		          Since then, I have dedicated myself to continuous improvement, always seeking new knowledge and opportunities. 
              Here, you will find a collection of my work and projects that reflect my journey so far.</p>
        </div>

      </header>

    </div>
  );
};

export default Home;
