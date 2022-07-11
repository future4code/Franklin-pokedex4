import React from "react";
import styled from "styled-components";


const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 20vh;
height: 4vh;
border-radius: 10px;
border: none;
background-color: #3A5CA8;
color: #FFFFFF;
margin: 10px;
font-family: 'VT323';
font-size: 2vh;
box-shadow: 0 5px 5px rgb(0 0 0 / 50%);
cursor: pointer;
`

const Card = ({ pokemon, loading, infoPokemon }) => {
//   console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>loading..</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div className="card">
                <h2>{item.id}</h2>
                <img
                  src={item.sprites.front_default}
                  alt="icone"
                />
                <h2>{item.name}</h2>
                <Button>Adicionar a Pokédex</Button>
                <Button key={item.id} onClick={()=>infoPokemon(item)}>Ver Detalhes</Button>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
