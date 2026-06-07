import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav-container">
      <div className="logo">SAR<span>TRACKER</span></div>
      
      <div className="nav-links">
        <Link to="/" className="nav-link">Visão Geral</Link>
        <Link to="/tecnologia" className="nav-link">Tecnologia</Link>
        <Link to="/beneficios" className="nav-link">Impacto</Link>
        <Link to="/dashboard" className="nav-link">Radar Operacional</Link>
        <Link to="/sobre" className="nav-link">Equipe</Link>
        
        {/* Botão de destaque atendendo aos requisitos visuais */}
        <Link to="/denuncia" className="nav-link nav-link-destaque">
          🚨 Denúncia
        </Link>
      </div>
    </nav>
  );
}