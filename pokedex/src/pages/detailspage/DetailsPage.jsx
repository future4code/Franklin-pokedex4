import React from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom"

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
  border: 1px solid red;

  & > img:nth-child(1) {
    margin-bottom: 20px;
  }
`;

export const CardImg = styled.img`
  border: solid 1px black;
  height: 210px;
  width: 210px;
`;

export const States = styled.div`
  border: 1px solid green;
  width: 210px;
  margin: 0 32px;
`;
export const ContainerTypeMoves = styled.div`
  border: 1px solid blue;
  width: 210px;
`;
export const Type = styled.div`
  height: 60px;
  border: 1px solid yellow;
  margin-bottom: 20px;
`;

export const Moves = styled.div`
  height: 360px;
  border: 1px solid black;
`;

function DetailsPage() {
  const pathParams = useParams()
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
        <States />
        <ContainerTypeMoves>
          <Type />
          <Moves />
        </ContainerTypeMoves>
      </ContainerData>
    </Container>
  );
}
export default DetailsPage;
