import styled from "styled-components"

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
  box-shadow:rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
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
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  
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
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
`;

export const Moves = styled.div`
  height: 360px;
  border: 1px solid black;
  overflow: auto;
  padding-left: 10px;
  border-radius: 8px;
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  
  & > h2 {
    text-align: center;
  }
`;