import "./estilo.css"

export default function OpcoesHeader() {
  const textoOpcoes = ["CATEGORIAS", "MINHA", "FAVORITOS"];

  return (
    <ul className="opcoes">
      {textoOpcoes.map((texto) => (
        <li className="opcao">
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
}
