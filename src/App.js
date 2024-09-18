import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
        <nav className="App-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#gallery">Galeria</a></li>
            <li><a href="/formulario">Contato</a></li>
            <li><a href="/#about">Sobre a Empresa</a></li>
          </ul>
        </nav>


        <h1>Design Serralheria</h1>
        <p>Transformando metal em arte!</p>
      </header>
    </div>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<FormPage />} />
        </Routes>
      </Router></>
>>>>>>> 1e6e9a58d31e266f1c1268a9dd4555bd1fbb5177
  );
}

export default App;
