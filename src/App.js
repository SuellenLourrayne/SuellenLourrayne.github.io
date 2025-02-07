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
        <h2>Suellen Lourrayne - Professional Portfolio</h2>
		<p>I am from Brazil and have been captivated by the art of development since my teenage years. <br/>
        At 21, I moved to Ireland to enhance my language skills and immerse myself in a new culture. <br/>
		Since then, I have dedicated myself to continuous improvement, always seeking new knowledge and opportunities. </p>
        <p>Here, you will find a collection of my work and projects that reflect my journey so far.</p>
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
