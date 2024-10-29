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
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Suellen Lourrayne - Portfolio</h1>
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
