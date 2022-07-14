import logo from "../../images/logo-pokemon.png";
import { useNavigate } from 'react-router-dom';
import { BackgroundPage, Img, ButtonHome } from "./styled";



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
