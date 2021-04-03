import React  from 'react'
import Select from 'react-select'
import styled from "styled-components"

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  padding-top: 0.5rem;
`

const Legend = styled.legend`
  font-weight: bold;
  font-size: 0.85rem;
`

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]



function CreateMealForm() {
  return (
    <>
      <p>Layout</p>
      <ul>
        <li>Meal Name textbox</li>
        <li>Ingredients dropdown</li>
        <li>labels for each of the selected ingredients</li>
        <li>Back to meal list</li>
        <li>Save meal</li>
      </ul>

      <form>
        <Fieldset>
          <Legend>
            Create new meal
          </Legend>
          <input type={'text'}/>
          <Select
            options={options}
            isMulti
            closeMenuOnSelect={false}
            name="ingredients"
          />

        </Fieldset>
      </form>


    </>
  )
}

export default CreateMealForm
