import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepara os dados do formulário
    const message = encodeURIComponent(`Hi there! My name is ${name}.\nI came from your personal portfolio website. \n${details}.`);

    //decidir o metodo de contato aqui..

    // Redireciona para a página principal após enviar
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Get in Touch!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
