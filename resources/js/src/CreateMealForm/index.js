import React, { useReducer, useState, useEffect } from 'react'
import CreatableSelect from 'react-select/creatable'
import styled from "styled-components"
import { Link, useHistory } from "react-router-dom"
import { createMeal } from "../api"

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  padding-top: 0.5rem;
`

const Legend = styled.legend`
  font-weight: bold;
  font-size: 0.85rem;
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

  const options = ingredients.map(ingredient => {
    return { value: ingredient.ingredient_name, label: ingredient.ingredient_name }
  })

  return (
    <>
      <Link to={'/'}>
        <button>Back to meal list</button>
      </Link>

      <form onSubmit={handleSubmit}>
        <Fieldset>
          <Legend>
            Create new meal
          </Legend>

          <label htmlFor={'mealName'}>Meal Name</label>
          <input
            type={'text'}
            name={'mealName'}
            onChange={(e) => dispatch({ field: 'mealName', value: e.target.value })}/>
          <label htmlFor={'mealIngredients'}>Ingredients</label>
          <CreatableSelect
            id={'mealIngredients'}
            options={options}
            isMulti
            closeMenuOnSelect={false}
            onChange={(e) => dispatch({ field: 'mealIngredients', value: e })}
          />
          <button type={'submit'}>Save meal</button>
        </Fieldset>
      </form>
    </>
  )
}

export default CreateMealForm
