import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FavoriteContext } from "../../pages/favorites/favoritesContext";
import { Button, CardContainer, CardImg } from "./styled";

const Card = ({ pokemon, loading }) => {
  const navigate = useNavigate();
  const { favorite, setFavorite } = React.useContext(FavoriteContext);

  const addFavorite = (item) => {
    const myFavorites = [...favorite];
    const pokeIndex = myFavorites.indexOf(item);
    myFavorites.includes(item)
      ? myFavorites.splice(pokeIndex, 1) &&
        alert(
          `pokemon ${item.name} removido com sucesso,Confira na sua POKEDEX!`
        )
      : myFavorites.push(item) &&
        alert(
          `pokemon ${item.name} ADICIONADO com sucesso,Confira na sua POKEDEX!`
        );
    setFavorite(myFavorites);
  };
  useEffect(() => {
    setFavorite(favorite);
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading..</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <CardContainer key={item.id}>
                <h2>{item.id}</h2>
                <CardImg src={item.sprites.front_default} alt="icone" />
                <h2>{item.name}</h2>
                {favorite.includes(item) ? (
                  <Button onClick={() => addFavorite(item)}>
                    Remover da Pokédex
                  </Button>
                ) : (
                  <Button onClick={() => addFavorite(item)}>
                    Adicionar na Pokédex
                  </Button>
                )}
                <Button
                  key={item.id}
                  onClick={() => navigate(`/details/${item.id}`)}
                >
                  Ver Detalhes
                </Button>
              </CardContainer>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
