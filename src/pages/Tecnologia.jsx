export default function Tecnologia() {
  return (
    <div className="page-container" style={{ maxWidth: '950px' }}>
      
      {/* Título Principal */}
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <h1 style={{ fontSize: '38px', color: '#38bdf8', textShadow: '0 0 20px rgba(56, 189, 248, 0.4)', marginBottom: '15px' }}>
          TECNOLOGIA EM ÓRBITA
        </h1>
        <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '750px', margin: '0 auto' }}>
          Como utilizamos a mais avançada tecnologia aeroespacial para cruzar dados e iluminar os pontos cegos dos oceanos de forma inteligente.
        </p>
      </div>

      {/* SECÇÃO 1: A Captura (SAR) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '90px' }}>
        <div>
          <h2 style={{ color: '#f8fafc', marginBottom: '20px', fontSize: '28px' }}>1. O Olho que Tudo Vê</h2>
          <p style={{ lineHeight: '1.7', fontSize: '17px', color: '#94a3b8', marginBottom: '15px' }}>
            Câmeras comuns de satélite não funcionam à noite ou em dias de tempestade — que é exatamente quando as frotas clandestinas preferem agir. Para resolver isso, usamos o <strong>Radar de Abertura Sintética (SAR)</strong>.
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '17px', color: '#94a3b8' }}>
            Em vez de tirar uma foto, o satélite dispara pulsos de energia em direção à Terra. Essa energia atravessa qualquer nuvem e rebate no casco de metal dos navios. O resultado é um mapa exato mostrando onde existe uma embarcação física, não importa o quão escuro esteja o oceano.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
          alt="Visão da Terra do espaço"
          className="page-image"
          style={{ 
            border: '1px solid rgba(56, 189, 248, 0.4)', 
            boxShadow: '0 10px 40px rgba(56, 189, 248, 0.15)',
            transform: 'perspective(1000px) rotateY(-5deg)'
          }}
        />
      </div>

      {/* SECÇÃO 2: A Fusão de Dados e o Impacto */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        <img
          src="https://images.pexels.com/photos/5666613/pexels-photo-5666613.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Captura de peixes em redes industriais"
          className="page-image"
          style={{ 
            border: '1px solid rgba(239, 68, 68, 0.4)', 
            boxShadow: '0 10px 40px rgba(239, 68, 68, 0.15)',
            transform: 'perspective(1000px) rotateY(5deg)'
          }}
        />
        <div>
          <h2 style={{ color: '#ef4444', marginBottom: '20px', fontSize: '28px' }}>2. Interceptando o Massacre</h2>
          <p style={{ lineHeight: '1.7', fontSize: '17px', color: '#94a3b8', marginBottom: '15px' }}>
            Encontrar o navio no radar é só o primeiro passo. Para impedir a devastação em massa da vida marinha, o nosso sistema age como um detetive: cruza a imagem orbital com o sistema de GPS público obrigatório (o AIS).
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '17px', color: '#f8fafc', fontWeight: '600', marginBottom: '15px' }}>
            A matemática da justiça é implacável:
          </p>
          
          <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: '#94a3b8', fontSize: '16px', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: '#f8fafc' }}>Passo 1:</strong> O radar espacial confirma que <strong>existe</strong> um navio pescando nas coordenadas X e Y.</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: '#f8fafc' }}>Passo 2:</strong> O GPS de frota civil diz que <strong>não há</strong> ninguém ali.</li>
              <li><strong style={{ color: '#ef4444' }}>Conclusão:</strong> O sistema classifica a embarcação como um <strong style={{ color: '#ef4444' }}>Alvo Clandestino</strong> e notifica a força tática antes que as redes sejam recolhidas.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}