import React from "react"
import { ButtonsContainer } from "./components/button-container"
import { CrudButton } from "./components/crud-button"
import { ExportButton } from "./components/export-button"

function CrudButtons() {
  return (
    <ButtonsContainer>
      <CrudButton linkTo={'/create-meal'} children={'Add new meal'}/>
      <CrudButton children={'Add new ingredient'}/>
      <ExportButton children={'Generate shopping list'}/>
    </ButtonsContainer>
  )
}

export default CrudButtons
