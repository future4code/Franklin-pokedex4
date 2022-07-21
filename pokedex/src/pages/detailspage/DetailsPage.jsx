import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Images } from "./styled";
import { CardImg } from "./styled";
import { States } from "./styled";
import { ContainerTypeMoves } from "./styled";
import { Container } from "./styled";
import { ContainerData } from "./styled";
import { Type } from "./styled";
import { Moves } from "./styled";
import { Progress } from "./styled";
import HeaderComponent from "../../components/header/Header";
import { ButtonHome } from "../initialpage/styled";
import { FavoriteContext } from "../../pages/favorites/favoritesContext"

function DetailsPage() {
  const pathParams = useParams();
  const [moves, setMoves] = useState([]);
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);
  const [data, setData] = useState({})
  const { favorite, setFavorite } = React.useContext(FavoriteContext);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pathParams.pokemonId}/`)
      .then((response) => {
        setMoves(response.data.moves);
        setStats(response.data.stats);
        setTypes(response.data.types);
        setData(response.data);
      })
      .catch((error) => {});
  }, []);

  const addFavorite = () => {
    const myFavorites = [...favorite];
    const pokeIndex = myFavorites.indexOf(data);
    myFavorites.includes(data)
      ? myFavorites.splice(pokeIndex, 1) &&
        alert(
          `pokemon ${data.name} removido com sucesso,Confira na sua POKEDEX!`
        )
      : myFavorites.push(data) &&
        alert(
          `pokemon ${data.name} ADICIONADO com sucesso,Confira na sua POKEDEX!`
        );
    setFavorite(myFavorites);
  };
  return (
    <>
      <HeaderComponent paginaDetalhe={true} />
      <Container>
        <ContainerData>
          <Images>
            <CardImg
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pathParams.pokemonId}.png`}
            />
            <CardImg
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pathParams.pokemonId}.png`}
            />
          </Images>
          <States>
            <h1>States</h1>
            {stats.map((stat) => {
              if (stat.stat.name === "hp") {
                return (
                  <p>
                    <strong>Hp:</strong>
                    <Progress value={stat.base_stat} max="100">
                      {stat.base_stat}
                    </Progress>
                    {stat.base_stat}
                  </p>
                );
              }
              return (
                <p key={stat.stat.name}>
                  <strong>{stat.stat.name}:</strong> {stat.base_stat}
                </p>
              );
            })}
          </States>
          <ContainerTypeMoves>
            <Type>
              <h2>Types</h2>
              {types.map((type) => {
                return <p key={type.slot}>{type.type.name}</p>;
              })}
            </Type>
            <Moves>
              <h2>Moves</h2>
              {moves.map((move) => {
                return <p key={move.move.name}>{move.move.name}</p>;
              })}
            </Moves>
          </ContainerTypeMoves>
        </ContainerData>
        <ButtonHome disabled={favorite.includes(data)} onClick={() => addFavorite()}>
          {favorite.includes(data) ? "Capturado" : "Capturar"}
          </ButtonHome>
      </Container>
    </>
  );
}
export default DetailsPage;
