import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import FormPage from "./Formulario/FormPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/design-serralheria/" element={<Home />} />
        <Route path="/design-serralheria/formulario" element={<FormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
