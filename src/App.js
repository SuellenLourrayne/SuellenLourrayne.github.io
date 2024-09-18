import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";

const App = () => {
  return (
    <><div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/Projects">Galeria</a></li>
            <li><a href="/Contact">Contato</a></li>
          </ul>
        </nav>
        <h1>Suellen Lourrayne - Personal Portfolio</h1>
        <p>This website serves as a showcase of the projects I have worked on and highlights my skills in software development and programming.</p>
      </header>
    </div>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router></>
  );
};

export default App;