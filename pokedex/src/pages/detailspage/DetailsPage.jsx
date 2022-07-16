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
import HeaderComponent from "../../components/header/Header"

function DetailsPage() {
  const pathParams = useParams();
  const [moves, setMoves] = useState([]);
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pathParams.pokemonId}/`)
      .then((response) => {
        setMoves(response.data.moves);
        setStats(response.data.stats);
        setTypes(response.data.types);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
      </Container>
      </>
  );
}
export default DetailsPage;
