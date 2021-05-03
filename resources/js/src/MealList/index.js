import React from "react"
import { Meal } from "./components/Meal"
import Buttons from "./components/Buttons"
import { NoMealsMessage } from "./components/no-meals-message"
import styled from 'styled-components'

export const ListContainer = styled.div`
  padding: 0;
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  clear: both;
`

function MealList({meals, addToShoppingList, deleteMeal}) {
  return (
    <>
      <Buttons />
      <p>Click a meal to add it to your shopping list:</p>
      <ListContainer>
        {meals.length === 0 && <NoMealsMessage />}
        {
          meals.length > 0 &&
          meals.map(meal => {
            return (
              <Meal key={meal.meal_id} meal={meal} addToShoppingList={addToShoppingList} deleteMeal={deleteMeal}/>
            )
          })
        }
      </ListContainer>
    </>
  )
}

export default MealList
