import React from 'react'
import CreatableSelect from "react-select/creatable"
import styled from "styled-components"
import Label from "../../components/label"
import TextBox from "../../components/text-box"
import { SubmitButton } from "../../components/submit-button"

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

const AddForm = ({ ingredients, onFormSubmit, dispatch }) => {
  const options = ingredients.map(ingredient => {
    return { value: ingredient.ingredient_id, label: ingredient.ingredient_name }
  })

  // TODO: Add validation to fields: required, length, type etc.
  return (
    <FormContainer>
      <Form>
        <Fieldset>
          <Legend>
            Create new meal
          </Legend>
          <Label htmlFor={'mealName'} children={'Meal Name'}/>
          <TextBox
            type={'text'}
            name={'mealName'}
            placeholder={'Enter a meal name'}
            onChange={(e) => dispatch({ field: 'mealName', value: e.target.value })}
          />
          <Label htmlFor={'mealIngredients'} children={'Ingredients'}/>
          <CreatableSelect
            id={'mealIngredients'}
            options={options}
            isMulti
            closeMenuOnSelect={false}
            onChange={e => dispatch({ field: 'mealIngredients', value: e })}
          />
          <ButtonContainer>
            <SubmitButton onSubmit={onFormSubmit}>Save meal</SubmitButton>
          </ButtonContainer>
        </Fieldset>
      </Form>
    </FormContainer>
  )
}

export default AddForm
