import { ListContainer } from "./components/list-container"
import React from "react"
import { Meal } from "./components/Meal"
import CrudButtons from "./components/CrudButtons"
import { NoMealsMessage } from "./components/no-meals-message"

function MealList(meals) {
  return (
    <>
      <CrudButtons/>
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
