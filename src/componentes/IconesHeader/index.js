import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
  align-items: center;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

export default function IconesHeader() {
  const icones = [perfil, sacola];

  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt="it's a secret" />
        </Icone>
      ))}
    </Icones>
  );
}
