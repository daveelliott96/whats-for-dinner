import React  from 'react'
import { NavigationButton } from "../components/navigation-button"
import styled from "styled-components"
import EditForm from "./components/edit-form"

export const ButtonsContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
`

function EditMealForm({ onSubmit, meal, ingredients, ...props }) {
  return (
    <>
      <ButtonsContainer>
        <NavigationButton children={'Back to meal list'} linkTo={'/'}/>
      </ButtonsContainer>
      <EditForm onSubmit={onSubmit} meal={meal} ingredients={ingredients} {...props}/>
    </>
  )
}

export default EditMealForm
