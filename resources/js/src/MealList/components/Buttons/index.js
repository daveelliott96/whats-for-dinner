import React from "react"
import { ExportButton } from "./components/export-button"
import { NavigationButton } from "../../../components/navigation-button"
import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`

function Buttons() {
  return (
    <ButtonsContainer>
      <NavigationButton linkTo={'/create-meal'} children={'Create new meal'}/>
      <ExportButton linkTo={'/shopping-list'} children={'Generate shopping list'}/>
    </ButtonsContainer>
  )
}

export default Buttons
