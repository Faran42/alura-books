import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";

const PesquisaContainer = styled.div`
  /* background-image: linear-gradient(90deg, #002f52 35%, #326589 165%); */
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;
const Titulo = styled.div`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const SubTitulo = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export default function Pesdquisa() {
  const [textoDigitado, setTextoDigitado] = useState("");
  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(batata) => setTextoDigitado(batata.target.value)}
      />
      <p>{textoDigitado}</p>
    </PesquisaContainer>
  );
}
