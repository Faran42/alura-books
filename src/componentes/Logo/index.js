import logo from "../../images/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImg = styled.img`
  margin-right: 20px;
`;

export default function Logo() {
  return (
    <LogoContainer className="logo">
      <LogoImg className="logo-img" src={logo} alt="Logo" />
      <p>
        <strong>Alura Books</strong>
      </p>
    </LogoContainer>
  );
}
