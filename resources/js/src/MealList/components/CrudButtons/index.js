import React from "react"
import { ButtonsContainer } from "./components/button-container"
import { CrudButton } from "./components/crud-button"
import { ExportButton } from "./components/export-button"

function CrudButtons() {
  return (
    <ButtonsContainer>
      <CrudButton linkTo={'/create-meal'} children={'Create new meal'}/>
      <CrudButton linkTo={'/create-ingredient'} children={'Create new ingredient'}/>
      <ExportButton linkTo={'/export'} children={'Generate shopping list'}/>
    </ButtonsContainer>
  )
}

export default CrudButtons
