import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function App() {
  return (
     <>  {/* Menu de Navegação simples */}
      <nav style={{ 
        padding: '30px', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px',
        backgroundColor: '#A9A9A9',
        borderBottom: '2px solid #B8860B',
        fontSize: '1.2rem',
        }}>
          <Link to="/">Portão Principal</Link>
          <Link to="/sobre">Biblioteca</Link>
          <Link to="/contato">Altar</Link>
      </nav>

      <hr />

      {/* Definição das Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      </> 
  );
}

export default App;