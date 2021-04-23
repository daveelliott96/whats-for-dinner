import React from 'react'
import styled from "styled-components"
import arrowUnopened from "./images/arrow-unopened.svg"


const MealContainer = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`

const MealNameContainer = styled.div`
  background-color: #D1D0D0;
  height: 4rem;
  width: 100%;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0rem;
  padding-bottom: 0rem;
  display: flex;
  align-items: center;
`

const MealIngredientsContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #F5F5F5;
`

const Arrow = styled.img`
   top: 50%;
   left: 50%;
   margin-right: 2rem;
`

const MealName = styled.h2`
  color: #24265A;
  font-weight: normal;
  font-size: 2rem;
  padding: 0;
`

const IngredientList = styled.ul`
  padding-left: 3.1rem;
  padding-right: 3.1rem;
  padding-top: .2rem;
  padding-bottom: .2rem;
  color: #24265A;
  font-size: 1.3rem;
`

const IngredientListItem = styled.li`
  padding-bottom: .5rem;
`

function Meal({ meal }) {
  return (
    <MealContainer>
      <MealNameContainer>
        <Arrow src={arrowUnopened} alt={'arrow'}/>
        <MealName>{meal.meal_name}</MealName>
      </MealNameContainer>
      <MealIngredientsContainer>
        <IngredientList>
        {meal.ingredients.map(ingredient => {
          return (
            <IngredientListItem key={ingredient.ingredient_id}>{ingredient.ingredient_name}</IngredientListItem>
          )
        })}
        </IngredientList>
      </MealIngredientsContainer>
    </MealContainer>
  )
}

export default Meal
