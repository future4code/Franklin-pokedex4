import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, CardContainer, CardImg } from "./styled";

const Card = ({ pokemon, loading }) => {
const navigate = useNavigate()
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
                <CardImg
                  src={item.sprites.front_default}
                  alt="icone"
                />
                <h2>{item.name}</h2>
                <Button>Adicionar a Pokédex</Button>
                <Button key={item.id} onClick={()=>navigate(`/details/${item.id}`)}>Ver Detalhes</Button>
              </CardContainer>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
