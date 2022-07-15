import React from "react";
import styled from "styled-components";

const Abilits = styled.div `
width: 30%;
margin: auto;
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 1rem;
`

const AbilitsGroup = styled.div `
background-color: #b74555;
color: white;
padding: 0.5rem;
font-size: 15px;
border-radius: 8px;
`

const BaseStat = styled.div `
margin-top: 2rem
`

const Pokeinfo = ({ data }) => {
  console.log(data);
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt="icone"
          />
          <Abilits key={data.id}>
            {data.abilities.map((poke) => {
              return (
                <>
                  <AbilitsGroup>
                    <h2>{poke.ability.name}</h2>
                  </AbilitsGroup>
                </>
              );
            })}
          </Abilits>
          <BaseStat>
            {data.stats.map((poke) => {
              return (
                <>
                  <h3>{poke.stat.name}:{poke.base_stat}</h3>
                </>
              );
            })}
          </BaseStat>
        </>
      )}
    </>
  );
};

export default Pokeinfo;
