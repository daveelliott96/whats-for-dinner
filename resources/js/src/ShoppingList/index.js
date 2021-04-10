import React from 'react'
import { NavigationButton } from "../components/navigation-button"
import styled from "styled-components"
import { ExportButton } from "../MealList/components/Buttons/components/export-button"

export const ButtonsContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`

function ShoppingList({ selectedMeals }) {
  return (
    <>
      <ButtonsContainer>
        <NavigationButton children={'Back to meal list'} linkTo={'/'}/>
        <ExportButton children={'Copy shopping list to clipboard'}/>
      </ButtonsContainer>
      <p>You've added {selectedMeals.length} meals to your shopping list:</p>
    </>
  )
}

export default ShoppingList
