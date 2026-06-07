export default function Home() {
  return (
    <div className="page-container" style={{ maxWidth: '950px' }}>
      
      {/* Título Principal de Impacto */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '38px', color: '#ef4444', textShadow: '0 0 20px rgba(239, 68, 68, 0.4)', marginBottom: '15px' }}>
          A Ameaça Silenciosa dos Oceanos
        </h1>
        <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '700px', margin: '0 auto' }}>
          Um ecossistema à beira do colapso e milhares de milhões em recursos roubados anualmente pela Pesca Ilegal, Não Declarada e Não Regulamentada.
        </p>
      </div>

      {/* SECÇÃO 1: A Devastação */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
        <div>
          <h2 style={{ color: '#f8fafc', marginBottom: '15px', fontSize: '28px' }}>Devastação em Massa</h2>
          <p style={{ lineHeight: '1.7', fontSize: '17px', color: '#94a3b8', marginBottom: '15px' }}>
            Milhões de toneladas de vida marinha são arrancadas dos oceanos impiedosamente todos os anos. Ecossistemas inteiros estão a ser dizimados por frotas predatórias que operam sem leis ou escrúpulos.
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '17px', color: '#94a3b8' }}>
            Eles invadem reservas ambientais e destroem o leito oceânico com redes de arrasto, empurrando espécies vulneráveis para a extinção sob o véu da impunidade.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80"
          alt="Redes de pesca industriais"
          className="page-image"
          referrerPolicy="no-referrer"
          style={{ 
            border: '1px solid rgba(239, 68, 68, 0.4)', 
            boxShadow: '0 10px 40px rgba(239, 68, 68, 0.15)',
            transform: 'perspective(1000px) rotateY(-5deg)'
          }}
        />
      </div>

      {/* SECÇÃO 2: O Navio Fantasma */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
        <img
          src="https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Navio sombrio a operar na escuridão do mar"
          className="page-image"
          style={{ 
            border: '1px solid rgba(56, 189, 248, 0.4)', 
            boxShadow: '0 10px 40px rgba(56, 189, 248, 0.15)',
            transform: 'perspective(1000px) rotateY(5deg)'
          }}
        />
        <div>
          <h2 style={{ color: '#38bdf8', marginBottom: '15px', fontSize: '28px' }}>Caçando Fantasmas</h2>
          <p style={{ lineHeight: '1.7', fontSize: '17px', color: '#94a3b8', marginBottom: '15px' }}>
            Para ocultar os seus crimes, estas embarcações desligam os transponders de identificação civil (AIS), transformando-se em verdadeiros <strong>"Navios Fantasmas"</strong> indetetáveis pelas autoridades marítimas.
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '17px', color: '#f8fafc', fontWeight: '600' }}>
            Mas o oceano deixou de ter pontos cegos.
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '17px', color: '#94a3b8' }}>
            Utilizando a nossa arquitetura de fusão de dados e telemetria SAR orbital, conseguimos atravessar a escuridão e as nuvens para rastrear e expor estas frotas em tempo real.
          </p>
        </div>
      </div>

    </div>
  );
}