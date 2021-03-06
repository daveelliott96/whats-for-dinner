import React from 'react'
import styled from "styled-components"

const MealContainer = styled.div`
height: 200px;
width: 386px;
margin: 8px;
background: red;
display: inline-block;

`

const MealButtonContainer = styled.div`
  background: orange;
`

const ActionButtonContainer = styled.div`
  background: purple;
`

export function Meal(props) {
  return (
    <MealContainer>
      <MealButtonContainer>
        <button>Meal</button>
      </MealButtonContainer>
      <ActionButtonContainer>
        <button>Edit</button>
        <button>Delete</button>
      </ActionButtonContainer>
    </MealContainer>
  )
}
