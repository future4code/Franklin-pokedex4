import React from "react"
import { Header } from "./styled"
import { ButtonHome } from "../../pages/initialpage/styled"

function HeaderComponent() {
    return (
        <Header>
            <h1>Pokémons</h1>
            <ButtonHome>Pokédex</ButtonHome>
        </Header>
    )
}
export default HeaderComponent