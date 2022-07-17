import React from 'react'

const Pokedex = ({data}) => {
    return (
        <>
          {!data ? (
            ""
          ) : (
            <>
              <h1>{data.name}</h1>
              </>
      )}
    </>
  );
}

export default Pokedex