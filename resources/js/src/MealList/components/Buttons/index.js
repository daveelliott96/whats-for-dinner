import React from "react"
import { ButtonsContainer } from "./components/button-container"
import { ExportButton } from "./components/export-button"
import { NavigationButton } from "../../../components/navigation-button"

function Buttons() {
  return (
    <ButtonsContainer>
      <NavigationButton linkTo={'/create-meal'} children={'Create new meal'}/>
      <ExportButton linkTo={'/export'} children={'Generate shopping list'}/>
    </ButtonsContainer>
  )
}

export default Buttons
