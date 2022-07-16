import React from "react"
import { Header, ImgPoke } from "./styled"
import { ButtonHome} from "../../pages/initialpage/styled"
import logo from "../../images/logo-pokemon.png";
import { useNavigate } from "react-router-dom"

function HeaderComponent() {
    const navigate = useNavigate()
    return (
        <Header>
            <ButtonHome
            onClick={() => navigate("/home")}>Voltar</ButtonHome>
            <div>
               <ImgPoke src={logo}/>
            </div>
            <div>
                <ButtonHome>Pokédex</ButtonHome>
            </div>
        </Header>
    )
}
export default HeaderComponent