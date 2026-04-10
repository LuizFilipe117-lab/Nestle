import { useState } from 'react'
import './App.css'

export default function App() {

   const CLASSES = [
   { nome: "mercado", emoji: "🛒"},
  ];
  const [nome, setNome] = useState("");  
  const [hp, setHp] = useState(100);  
  const [vivo, setVivo] = useState(true);  
  const [classe, setClasse] = useState(CLASSES[0]);
  
  const vender = () => {
    setVenda(true);
    setCompra(false);
  }

  const receberDano = () => {
    const novoHp = Math.max(0, hp-10)
    setHp(novoHp);
    setVivo(novoHp > 0)
  }

  const pct = hp/100;
  const corBarra = pct > 0.5 ? "#5DCAA5" : pct >0.25 ? "#EF9F27" : "#E24B4A";

  return (
    <>
      <main>
        <h1 className="Titulo">Nestle</h1>
        <div id="icon">{vivo ? classe.emoji : "☠️"}</div>
        <input 
        type="text" 
        placeholder="Nome do Produto" 
        maxLength={20}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        />
        
        <div id="status">
          <h2>Status</h2>
          <h2>Status 2</h2>
          <p>Ativo</p>
          <p>true</p>
        </div>

        <p id="pontos">Pontos de Cupom(R$) <span>100/100</span></p>
        <div id="barraVida"></div>

        <button className="acao">🛍Comprar</button>
        <button className="acao">📦 Vender</button>

        <p id="classeProduto">Classe do Produto</p>
        <button className="produto">🍫Doce</button>
        <button className="produto">🥗Verduras</button>
        <button className="produto">🍉Frutas</button>
        <button className="produto">🥃Bebidas</button>

      </main>
    </>
  )
}