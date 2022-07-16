import React from "react"
import { Header, ImgPoke } from "./styled"
import { ButtonHome} from "../../pages/initialpage/styled"
import logo from "../../images/logo-pokemon.png";

function HeaderComponent() {
    return (
        <Header>
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