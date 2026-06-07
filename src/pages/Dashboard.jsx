import { useState, useEffect } from 'react';
import shipsData from '../data/navios.json';
import './Dashboard.css';

export default function Dashboard() {
  const [selectedShip, setSelectedShip] = useState(null);
  
  // Memória para saber quais navios já foram denunciados
  const [alertedShips, setAlertedShips] = useState([]);
  const [isAlerting, setIsAlerting] = useState(false);
  
  // 1. Cria a frota espalhada em posições aleatórias para evitar que nasçam amontoados
  const [fleet, setFleet] = useState(() => 
    shipsData.map((ship) => ({
      ...ship,
      x: 10 + Math.random() * 70, 
      y: 10 + Math.random() * 70, 
      angle: Math.random() * 360 
    }))
  );

  // 2. Motor do Radar com Sistema de Colisão nas Bordas
  useEffect(() => {
    const radarEngine = setInterval(() => {
      setFleet(currentFleet => 
        currentFleet.map(ship => {
          // Navio altera a rota aleatoriamente
          const steeringChange = (Math.random() - 0.5) * 90; 
          let newAngle = ship.angle + steeringChange;
          
          let radians = newAngle * (Math.PI / 180);
          const radarSpeed = ship.velocidade_nos * 0.2; 
          
          let newX = ship.x + Math.cos(radians) * radarSpeed;
          let newY = ship.y + Math.sin(radians) * radarSpeed;

          // Bateu nas laterais? Rebate e vira!
          if (newX > 88 || newX < 4) {
            newAngle = 180 - newAngle;
            newX = ship.x; 
          }
          // Bateu no teto ou fundo? Rebate e vira!
          if (newY > 85 || newY < 4) {
            newAngle = 360 - newAngle;
            newY = ship.y; 
          }

          // Mantém o ângulo formatado entre 0 e 360 graus
          if(newAngle < 0) newAngle += 360;

          return { ...ship, x: newX, y: newY, angle: newAngle };
        })
      );
    }, 1000); 

    return () => clearInterval(radarEngine); 
  }, []);

  // FUNÇÃO QUE SIMULA O ENVIO DE DADOS PARA A GUARDA COSTEIRA
  const handleAlertCoastGuard = (shipId) => {
    setIsAlerting(true); // Trava o botão e avisa que está carregando
    
    // Simula o tempo de uma requisição de API via Satélite (1.5 segundos)
    setTimeout(() => {
      setAlertedShips(prev => [...prev, shipId]); // Salva o ID na lista de denunciados
      setIsAlerting(false); // Destrava o sistema
    }, 1500);
  };

  // Verifica se o navio selecionado atualmente já está na lista de denunciados
  const hasAlerted = selectedShip ? alertedShips.includes(selectedShip.id) : false;

  return (
    <div className="page-container" style={{ maxWidth: '1100px' }}>
      <h1 style={{ marginBottom: '25px', color: '#38bdf8' }}>Centro de Comando SAR</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '30px', marginBottom: '50px' }}>
        
        {/* === TELA DO RADAR === */}
        <div className="radar-container">
          <div className="radar-grid"></div>
          <div className="scanline"></div>

          {fleet.map((ship) => {
            const isSelected = selectedShip?.id === ship.id;

            return (
              <div 
                key={ship.id} 
                className={`ship-dot ${ship.sinal_ais_ativo ? 'ship-legal' : 'ship-ghost'} ${isSelected ? 'ship-selected' : ''}`}
                style={{ top: `${ship.y}%`, left: `${ship.x}%` }}
                onClick={() => setSelectedShip(ship)}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width={isSelected ? "48" : "32"} 
                  height={isSelected ? "48" : "32"} 
                  style={{ transform: `rotate(${ship.angle + 90}deg)`, transition: 'all 0.3s' }}
                >
                  <path d="M12 2.5L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
                <span className="ship-id">{ship.id}</span>
              </div>
            );
          })}
        </div>

        {/* === PAINEL LATERAL (HUD) === */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '500px' }}>
          {selectedShip ? (
            <div className={`card-premium ${selectedShip.sinal_ais_ativo ? 'card-regular' : 'card-alerta'}`} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ color: selectedShip.sinal_ais_ativo ? '#38bdf8' : '#ef4444', fontSize: '20px' }}>Alvo Detectado</h2>
                <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', letterSpacing: '1px' }}>RASTREAMENTO ATIVO</span>
              </div>
              
              <h3 style={{ color: '#f8fafc', marginBottom: '20px', fontSize: '24px' }}>{selectedShip.nome}</h3>
              
              <div style={{ flex: 1 }}>
                <p style={{ marginBottom: '12px', fontSize: '16px' }}><strong>ID do Casco:</strong> <br/><span style={{ color: '#f8fafc' }}>{selectedShip.id}</span></p>
                <p style={{ marginBottom: '12px', fontSize: '16px' }}><strong>Classificação:</strong> <br/><span style={{ color: '#f8fafc' }}>{selectedShip.tipo}</span></p>
                <p style={{ marginBottom: '12px', fontSize: '16px' }}><strong>Velocidade Atual:</strong> <br/><span style={{ color: '#f8fafc' }}>{selectedShip.velocidade_nos} Nós</span></p>
                
                <p style={{ marginBottom: '12px', fontSize: '16px', color: '#38bdf8' }}><strong>Coordenadas SAR:</strong> <br/>
                  LAT: {(fleet.find(n => n.id === selectedShip.id)?.y || 0).toFixed(2)}° | LON: {(fleet.find(n => n.id === selectedShip.id)?.x || 0).toFixed(2)}°
                </p>

                <p style={{ marginBottom: '12px', fontSize: '16px' }}><strong>Transponder (AIS):</strong> <br/>
                  <span style={{ color: selectedShip.sinal_ais_ativo ? '#10b981' : '#ef4444', fontWeight: 'bold' }}>
                    {selectedShip.sinal_ais_ativo ? 'ONLINE' : 'OFFLINE (Alvo Clandestino)'}
                  </span>
                </p>
              </div>

              {/* BOTÃO INTELIGENTE: Muda de estado e cor conforme a ação */}
              {!selectedShip.sinal_ais_ativo && (
                <button 
                  onClick={() => handleAlertCoastGuard(selectedShip.id)}
                  disabled={hasAlerted || isAlerting}
                  style={{ 
                    marginTop: '20px', width: '100%', padding: '15px', 
                    background: hasAlerted ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)', 
                    border: hasAlerted ? '1px solid #10b981' : '1px solid #ef4444', 
                    color: hasAlerted ? '#10b981' : '#ef4444', 
                    borderRadius: '8px', fontWeight: '800', 
                    cursor: (hasAlerted || isAlerting) ? 'not-allowed' : 'pointer', 
                    transition: 'all 0.3s', textTransform: 'uppercase' 
                  }}
                >
                  {isAlerting ? 'Transmitindo...' : hasAlerted ? '✓ Força Tática Acionada' : 'Acionar Guarda Costeira'}
                </button>
              )}
            </div>
          ) : (
            <div className="card-premium" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', border: '1px dashed rgba(56, 189, 248, 0.3)' }}>
              <svg viewBox="0 0 24 24" width="48" height="48" fill="rgba(56, 189, 248, 0.5)" style={{ marginBottom: '15px' }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <h3 style={{ color: '#94a3b8' }}>Aguardando Seleção</h3>
              <p style={{ fontSize: '15px', marginTop: '10px' }}>Clique em um alvo no radar para extrair a telemetria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}