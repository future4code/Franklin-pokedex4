import React from "react";
import { Header, ImgPoke } from "./styled";
import { ButtonHome } from "../../pages/initialpage/styled";
import logo from "../../images/logo-pokemon.png";
import { useNavigate } from "react-router-dom";

function HeaderComponent(props) {
  const navigate = useNavigate();
  return (
    <Header>
      {props.paginaDetalhe === true && (
        <ButtonHome onClick={() => navigate("/home")}>Voltar</ButtonHome>
      )}
      <div>
        <ImgPoke src={logo} />
      </div>
      <div>
        <ButtonHome onClick={() => navigate("/pokedex")}>Pokédex</ButtonHome>
      </div>
    </Header>
  );
}
export default HeaderComponent;
