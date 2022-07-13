import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Container = styled.div`
  height: 100vh;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerData = styled.div`
  display: flex;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > img:nth-child(1) {
    margin-bottom: 20px;
  }
`;

export const CardImg = styled.img`
  border: solid 1px black;
  height: 210px;
  width: 210px;
  border-radius: 8px;
`;

export const States = styled.div`
  border: 1px solid black;
  width: 210px;
  margin: 0 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 8px;
  
`;
export const ContainerTypeMoves = styled.div`
  width: 210px;
`;
export const Type = styled.div`
  border: 1px solid black;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
  border-radius: 8px;
`;

export const Moves = styled.div`
  height: 360px;
  border: 1px solid black;
  overflow: auto;
  padding-left: 10px;
  border-radius: 8px;
  
  & > h2 {
    text-align: center;
  }
`;

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
            return(
              <p key={stat.stat.name}><strong>{stat.stat.name}:</strong> {stat.base_stat}</p>
            )
          })}
        </States>
        <ContainerTypeMoves>
          <Type>
            <h2>Types</h2>
            {types.map((type) => {
                return (
                  <p key={type.slot}>{type.type.name}</p>
                )
            })}
          </Type>
          <Moves>
            <h2>Moves</h2>
            {moves.map((move) => {
              return (
                <p key={move.move.name}>{move.move.name}</p>
              )
            })}
          </Moves>
        </ContainerTypeMoves>
      </ContainerData>
    </Container>
  );
}
export default DetailsPage;
