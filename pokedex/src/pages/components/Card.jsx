import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div `
width: 300px;
background-color:#FFFFFF;
border-radius: 1rem;
box-shadow: 0 5px 5px rgba(0,0,0,0.5);
padding: 0 1.5rem;
display: flex;
align-items: center;
justify-content: space-between;
box-sizing: border-box;
margin: 10px;
padding: 20px;
text-align: center;
flex-direction: column;
`
const CardImg = styled.img `
background-color: #e9e9e9;
border-radius: 50%;
width: 130px;
text-align: center;
padding: 10px;
margin: 20px;
`

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
              <CardContainer>
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
