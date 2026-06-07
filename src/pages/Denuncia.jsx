import { useState } from 'react';

export default function Denuncia() {
  // Estados para controlar o formulário e o status do envio
  const [formData, setFormData] = useState({
    coordenadas: '',
    descricao: '',
    data: ''
  });
  const [status, setStatus] = useState('idle'); // idle, error, submitting, success

  // Função para atualizar os dados enquanto o usuário digita
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle'); // Tira o erro ao voltar a digitar
  };

  // Função disparada ao clicar em "Enviar Denúncia"
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação simples: campos obrigatórios
    if (!formData.coordenadas || !formData.descricao) {
      setStatus('error');
      return;
    }

    // Simula o tempo de envio para uma API (1.5 segundos)
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ coordenadas: '', descricao: '', data: '' }); // Limpa o form
    }, 1500);
  };

  return (
    <div className="page-container" style={{ maxWidth: '950px' }}>
      
      {/* Cabeçalho */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '38px', color: '#ef4444', textShadow: '0 0 20px rgba(239, 68, 68, 0.4)', marginBottom: '15px' }}>
          Reportar Alvo Clandestino
        </h1>
        <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '750px', margin: '0 auto' }}>
          Utilize este canal seguro e anônimo para reportar atividades suspeitas de pesca ilegal (INN) ou navios operando sem sinal AIS.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
        
        {/* Lado Esquerdo: Imagem e Instruções */}
        <div>
          <img
            src="https://images.pexels.com/photos/2850993/pexels-photo-2850993.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Visão de satélite focada em coordenadas"
            className="page-image"
            style={{ 
              border: '1px solid rgba(239, 68, 68, 0.4)', 
              boxShadow: '0 10px 40px rgba(239, 68, 68, 0.15)',
              transform: 'perspective(1000px) rotateY(-5deg)',
              marginBottom: '30px'
            }}
          />
          <h3 style={{ color: '#f8fafc', marginBottom: '10px', fontSize: '22px' }}>Como reportar?</h3>
          <ul style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
            <li>Insira a <strong>latitude e longitude</strong> aproximadas da ocorrência.</li>
            <li>Descreva o tipo de embarcação ou o maquinário visualizado (ex: redes de arrasto).</li>
            <li>Os dados são processados instantaneamente por nosso motor de fusão orbital.</li>
          </ul>
        </div>

        {/* Lado Direito: Formulário com Controle de Estado */}
        <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '12px', border: '1px solid #334155', boxShadow: '0 15px 35px rgba(0,0,0,0.2)' }}>
          
          {status === 'success' ? (
            // Mensagem de Sucesso Condicional
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
              <h2 style={{ color: '#10b981', marginBottom: '10px' }}>Alvo Registrado!</h2>
              <p style={{ color: '#94a3b8', marginBottom: '30px' }}>As coordenadas foram enviadas para a Força Tática Marítima. Obrigado por proteger nossos oceanos.</p>
              <button 
                onClick={() => setStatus('idle')}
                style={{ padding: '12px 24px', backgroundColor: '#334155', color: '#f8fafc', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Reportar Novo Alvo
              </button>
            </div>
          ) : (
            // O Formulário
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {status === 'error' && (
                <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '10px', borderRadius: '6px', border: '1px solid rgba(239, 68, 68, 0.3)', textAlign: 'center', fontWeight: 'bold' }}>
                  Atenção: Preencha as coordenadas e a descrição!
                </div>
              )}

              <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '8px', fontWeight: 'bold' }}>Coordenadas </label>
                <input 
                  type="text" 
                  name="coordenadas"
                  value={formData.coordenadas}
                  onChange={handleChange}
                  placeholder="Ex: -23.500, -46.6000" 
                  style={{ width: '100%', padding: '12px', borderRadius: '6px', backgroundColor: '#0f172a', border: '1px solid #475569', color: '#f8fafc', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '8px', fontWeight: 'bold' }}>Data da Ocorrência</label>
                <input 
                  type="date" 
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px', borderRadius: '6px', backgroundColor: '#0f172a', border: '1px solid #475569', color: '#f8fafc', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '8px', fontWeight: 'bold' }}>Descrição da Atividade </label>
                <textarea 
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  placeholder="Descreva o que foi detectado no radar ou a olho nu..." 
                  rows="4"
                  style={{ width: '100%', padding: '12px', borderRadius: '6px', backgroundColor: '#0f172a', border: '1px solid #475569', color: '#f8fafc', resize: 'none', boxSizing: 'border-box' }}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                style={{ 
                  padding: '14px', 
                  backgroundColor: status === 'submitting' ? '#475569' : '#ef4444', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '6px', 
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer', 
                  fontWeight: 'bold',
                  fontSize: '16px',
                  marginTop: '10px',
                  transition: 'background-color 0.3s'
                }}
              >
                {status === 'submitting' ? 'Transmitindo...' : 'Transmitir Alerta'}
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}