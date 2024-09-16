// src/Home/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // Use useNavigate para navegação programática

  const handleButtonClick = () => {
    navigate("/formulario"); // Redireciona para a página de formulário
  };
  return (
    <div className="App">
      <section id="gallery" className="gallery">
        <h2>Nossos Trabalhos</h2>
        <div className="photos">
          <img src="/images/trabalho1.jpg" alt="Trabalho 1" />
          <img src="/images/trabalho2.jpg" alt="Trabalho 2" />
          <img src="/images/trabalho3.jpg" alt="Trabalho 3" />
          <img src="/images/trabalho4.jpg" alt="Trabalho 4" />
          <img src="/images/trabalho5.jpg" alt="Trabalho 5" />
          <img src="/images/trabalho6.jpg" alt="Trabalho 6" />
        </div>
      </section>

      <section id="contact" className="cta">
        <h2>Precisa de um orçamento?</h2>
        <p>Preencha o formulário e entraremos em contato!</p>
        <button onClick={handleButtonClick}>Solicitar Orçamento</button>
      </section>

      <section id="about" className="about">
        <h2>Sobre a Empresa</h2>
        <p>Design Serralheria é uma empresa dedicada à arte e à precisão no trabalho com metais, liderada pelo experiente serralheiro Jackson. Com anos de experiência no setor, Jackson e sua equipe têm se destacado por oferecer soluções inovadoras e de alta qualidade em serralheria.</p>
        <p>Desde a fundação, a Design Serralheria tem se comprometido com a excelência, combinando técnicas tradicionais com abordagens modernas para criar produtos personalizados que atendem às necessidades específicas de cada cliente. Nossa paixão pelo trabalho é refletida na atenção aos detalhes e na qualidade dos nossos projetos.</p>
        <p>Nós oferecemos uma ampla gama de serviços, incluindo a fabricação e instalação de grades, portões, estruturas metálicas e outros produtos de metal. Acreditamos que cada projeto é uma oportunidade para transformar metal em arte, garantindo durabilidade e estética.</p>
        <p>Seja para projetos residenciais ou comerciais, a Design Serralheria está pronta para atender às suas expectativas com profissionalismo e dedicação. Venha conhecer o trabalho de Jackson e descubra como podemos ajudar a dar vida às suas ideias com a nossa experiência e criatividade.</p>
        </section>
    </div>
  );
};

export default Home;
