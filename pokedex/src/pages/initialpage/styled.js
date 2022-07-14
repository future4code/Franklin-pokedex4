import styled from "styled-components"



export const BackgroundPage = styled.div`
  background-color: #a83a3a;
  background-size: cover;
  display: flex;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  font-family: "VT323";
  flex-direction: column;
`;
export const Img = styled.img`
  height: 18em;
  padding: 1px;
`;

export const ButtonHome = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23vh;
  height: 6vh;
  border-radius: 10px;
  border: none;
  background-color: #3a5ca8;
  color: #ffffff;
  margin: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  font-family: 'VT323';
  font-size: 5vh;
  cursor: pointer;
`;