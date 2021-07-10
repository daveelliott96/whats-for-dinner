import React, { useReducer } from 'react'
import CreatableSelect from "react-select/creatable"
import styled from "styled-components"
import Label from "../../components/label"
import TextBox from "../../components/text-box"
import { SubmitButton } from "../../components/submit-button"
import { useHistory } from "react-router-dom"

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  padding-top: 0.5rem;
`

const Legend = styled.legend`
  font-weight: bold;
  font-size: 1.5rem;
`

const FormContainer = styled.div`
  margin-top: 2rem;
`

const Form = styled.form`
  width: 100%;
`


export const ButtonContainer = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`

function reducer(state, action) {
  return {
    ...state,
    [action.field]: action.value
  }
}

const EditForm = ({ meal, availableIngredients, onSubmit }) => {
  const history = useHistory()
  const options = availableIngredients.map(ingredient => {
    return { label: ingredient.ingredient_name, value: ingredient.ingredient_name }
  })

  const initialValue = meal.ingredients.map(ingredient => {
    return { label: ingredient.ingredient_name, value: ingredient.ingredient_name }
  })

  const initialState = {
    mealName: meal.meal_name,
    mealIngredients: initialValue
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = event => {
    event.preventDefault()

    let ingredients = state.mealIngredients.map(ingredient => {
      return ingredient.value
    })

    const formData = {
      meal_id: meal.meal_id,
      meal_name: state.mealName,
      ingredients
    }

    onSubmit(meal.meal_id, formData)
    history.push('/')
  }

  // TODO: Add validation to fields: required, length, type etc.
  return (
    <FormContainer>
      <Form>
        <Fieldset>
          <Legend>
            {`Edit ${meal.meal_name} meal`}
          </Legend>
          <Label htmlFor={'mealName'} children={'Meal Name'}/>
          <TextBox
            type={'text'}
            name={'mealName'}
            onChange={(e) => dispatch({ field: 'mealName', value: e.target.value })}
            defaultValue={meal.meal_name}
          />
          <Label htmlFor={'mealIngredients'} children={'Ingredients'}/>
          <CreatableSelect
            id={'mealIngredients'}
            options={options}
            isMulti
            closeMenuOnSelect={false}
            onChange={e => dispatch({ field: 'mealIngredients', value: e })}
            defaultValue={initialValue}
          />
          <ButtonContainer>
            <SubmitButton onSubmit={handleSubmit}>Update meal</SubmitButton>
          </ButtonContainer>
        </Fieldset>
      </Form>
    </FormContainer>
  )
}

export default EditForm
