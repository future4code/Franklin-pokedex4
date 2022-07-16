import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a83a3a;
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
  background-color: #FFFFFF;
  box-shadow: 0 5px 5px rgb(0 0 0 / 50%);
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
  background-color: #FFFFFF;  
  box-shadow: 0 5px 5px rgb(0 0 0 / 50%);
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
  background-color: #FFFFFF;
  box-shadow: 0 5px 5px rgb(0 0 0 / 50%);
`;

export const Moves = styled.div`
  height: 360px;
  border: 1px solid black;
  overflow: auto;
  padding-left: 10px;
  border-radius: 8px;
  background-color: #FFFFFF;
  box-shadow: 0 5px 5px rgb(0 0 0 / 50%);
  
  & > h2 {
    text-align: center;
  }
`;

export const Progress = styled.progress`
background-color: #a83a3a;
border-radius: 5px;

&::-webkit-progress-bar {
  border-radius: 5px;
}
&::-webkit-progress-value {
  background-color: #a83a3a;
  border-radius: 5px;
}
`