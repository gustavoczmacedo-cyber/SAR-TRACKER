import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importação das Páginas
import Home from './pages/Home';
import Tecnologia from './pages/Tecnologia';
import Beneficios from './pages/Beneficios'; // A sua página de Impacto
import Dashboard from './pages/Dashboard';
import Sobre from './pages/Sobre';
import Denuncia from './pages/Denuncia';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        {/* Onde o conteúdo de cada página vai renderizar */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="/beneficios" element={<Beneficios />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/denuncia" element={<Denuncia />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}