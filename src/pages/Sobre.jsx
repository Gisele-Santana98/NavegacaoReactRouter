export default function Sobre() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ borderBottom: '2px solid #c30000' }}>A Linhagem Belmont</h2>
      <p>Desde tempos imemoriais, a família Belmont carrega o chicote <em>Vampire Killer</em> para enfrentar as forças da noite.</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>⚔️ Simon Belmont</li>
        <li>⚔️ Trevor Belmont</li>
        <li>⚔️ Richter Belmont</li>
      </ul>
      <img 
      src="https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2023/09/castlevania-nocturne-belmont-family-tree-explained.jpg?w=1600&h=900&fit=crop" 
      alt="Árvore Genealógica dos Belmont" 
      style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }} />
    </div>
  );
}