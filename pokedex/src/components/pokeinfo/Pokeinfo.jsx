import React from "react";
import { Abilits, AbilitsGroup, BaseStat } from "./styled";

const Pokeinfo = ({ data }) => {
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
