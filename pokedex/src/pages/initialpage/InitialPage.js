import styled from "styled-components";
import logo from "./logo-pokemon.png";
import { useNavigate } from 'react-router-dom';

const BackgroundPage = styled.div`
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
const Img = styled.img`
  height: 25em;
  padding: 1px;
`;

const ButtonHome = styled.button`
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

export default function InitialPage() {
    const navigate = useNavigate()   

    const goToHome = () => {
        navigate("/home")
    }


  return (
    <BackgroundPage className="App">
      <Img src={logo} />
      <ButtonHome onClick={goToHome}>Home</ButtonHome>
    </BackgroundPage>
  );
}
