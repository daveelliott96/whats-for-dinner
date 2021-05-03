import React, { useReducer } from 'react'
import { useHistory } from "react-router-dom"
import { NavigationButton } from "../components/navigation-button"
import AddForm from "./components/add-form"
import styled from "styled-components"

export const ButtonsContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
`

const initialState = {
  mealName: '',
  mealIngredients: []
}

function reducer(state, action) {
  return {
    ...state,
    [action.field]: action.value
  }
}

function CreateMealForm({ onSubmit, ingredients }) {
  const history = useHistory()

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = event => {
    event.preventDefault()

    onSubmit(state)
    history.push('/')
  }

  return (
    <>
      <ButtonsContainer>
        <NavigationButton children={'Back to meal list'} linkTo={'/'}/>
      </ButtonsContainer>
      <AddForm onFormSubmit={handleSubmit} ingredients={ingredients} dispatch={dispatch}/>
    </>
  )
}

export default CreateMealForm
