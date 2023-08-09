import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";

import "./estilo.css"

export default function IconesHeader() {
  const icones = [perfil, sacola];
  
  return (
    <ul className="icones">
      {icones.map((icone) => (
        <li className="icone">
          <img src={icone} alt="it's a secret" />
        </li>
      ))}
    </ul>
  );
}
