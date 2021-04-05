import { ListContainer } from "./components/list-container"
import React from "react"
import { Meal } from "./components/Meal"
import Buttons from "./components/Buttons"
import { NoMealsMessage } from "./components/no-meals-message"

function MealList(meals) {
  return (
    <>
      <Buttons/>
      <ListContainer>
        {meals.meals.length === 0 && <NoMealsMessage/>}
        {
          meals.meals.length > 0 &&
          meals.meals.map(meal => {
            return (
              <Meal key={meal.meal_id} meal={meal}/>
            )
          })
        }
      </ListContainer>
    </>
  )
}

export default MealList
