export default function Home() {
  return (
    <div style = { { textAlign: 'center', padding:'50px' } } >
      <h1 style={{ color: '#c30000', fontSize: '3rem' }}>CASTLEVANIA</h1>
      <p>"O que é um homem? Uma pilha miserável de segredos!"</p>
      <img 
        src="https://criticalhits.com.br/wp-content/uploads/2021/04/Castlevania.jpg.webp" 
        alt="Castelo do Dracula" 
        style={{ width: '80%', maxWidth: '600px', borderRadius: '10px', border: '2px solid #333' }}
      />
    </div>
  );
}