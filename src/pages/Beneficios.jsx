export default function Impacto() {
  return (
    <div className="page-container" style={{ maxWidth: '950px' }}>
      
      {/* Título Principal */}
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <h1 style={{ fontSize: '38px', color: '#f59e0b', textShadow: '0 0 20px rgba(245, 158, 11, 0.4)', marginBottom: '15px' }}>
          O Custo Real da Ilegalidade
        </h1>
        <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '750px', margin: '0 auto' }}>
          A pesca ilegal não é apenas uma violação de fronteiras; é o esgotamento silencioso da vida marinha e um crime direto contra o futuro do nosso planeta.
        </p>
      </div>

      {/* SECÇÃO 1: Captura em Massa */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '90px' }}>
        <div>
          <h2 style={{ color: '#f8fafc', marginBottom: '20px', fontSize: '28px' }}>1. O Saque dos Oceanos</h2>
          <p style={{ lineHeight: '1.7', fontSize: '17px', color: '#94a3b8', marginBottom: '15px' }}>
            Frotas clandestinas utilizam redes de arrasto em escala industrial que operam de forma cega e implacável. Elas não pescam; elas varrem o leito oceânico, capturando milhares de toneladas de vida marinha de uma só vez.
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '17px', color: '#94a3b8' }}>
            Esse volume absurdo drena rapidamente a capacidade de reprodução dos cardumes, esgotando os recursos que comunidades costeiras inteiras dependem para a própria sobrevivência.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/2792153/pexels-photo-2792153.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Captura em massa de peixes"
          className="page-image"
          style={{ 
            border: '1px solid rgba(245, 158, 11, 0.4)', 
            boxShadow: '0 10px 40px rgba(245, 158, 11, 0.15)',
            transform: 'perspective(1000px) rotateY(-5deg)'
          }}
        />
      </div>

      {/* SECÇÃO 2: Extinção de Animais (Mantida a sua preferida) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        <img
          src="https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Tartaruga marinha, símbolo de animal em risco de extinção"
          className="page-image"
          style={{ 
            border: '1px solid rgba(239, 68, 68, 0.4)', 
            boxShadow: '0 10px 40px rgba(239, 68, 68, 0.15)',
            transform: 'perspective(1000px) rotateY(5deg)'
          }}
        />
        <div>
          <h2 style={{ color: '#ef4444', marginBottom: '20px', fontSize: '28px' }}>2. A Caminho da Extinção</h2>
          <p style={{ lineHeight: '1.7', fontSize: '17px', color: '#94a3b8', marginBottom: '15px' }}>
            O maior crime ambiental dessa prática é a captura incidental (Bycatch). Tartarugas, golfinhos, tubarões e outras espécies vulneráveis são arrastadas para a morte em redes destinadas a peixes comerciais, sendo depois descartadas ao mar.
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '17px', color: '#94a3b8' }}>
            Sem uma tecnologia capaz de monitorar essas zonas no escuro, não estamos apenas perdendo recursos econômicos; estamos empurrando milhares de espécies marinhas para a extinção total, quebrando ecossistemas inteiros para sempre.
          </p>
        </div>
      </div>

    </div>
  );
}