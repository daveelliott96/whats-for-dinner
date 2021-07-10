import React  from 'react'
import { NavigationButton } from "../components/navigation-button"
import styled from "styled-components"
import EditForm from "./components/edit-form"

export const ButtonsContainer = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
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
