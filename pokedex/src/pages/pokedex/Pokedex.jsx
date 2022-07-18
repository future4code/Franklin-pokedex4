import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, CardContainer, CardImg } from "../../components/card/styled";
import { Header } from "../../components/header/styled";
import { FavoriteContext } from "../favorites/favoritesContext";

const Pokedex = () => {
  const { favorite } = React.useContext(FavoriteContext);
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Button onClick={() => navigate("/home")}>Voltar</Button>
      {favorite &&
        favorite.map((item) => {
          return (
            <CardContainer key={item.id}>
              <h2>{item.id}</h2>
              <CardImg src={item.sprites.front_default} alt="icone" />
              <h2>{item.name}</h2>
              <Button
                key={item.id}
                onClick={() => navigate(`/details/${item.id}`)}
              >
                Ver Detalhes
              </Button>
            </CardContainer>
          );
        })}
    </div>
  );
};

export default Pokedex;
