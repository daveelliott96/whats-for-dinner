import React, { useState, useEffect } from 'react'
import '../../sass/app.css'
import MealList from "./MealList"
import { createMeal, getIngredients, getMeals, deleteMeal as deleteMealFromDb } from "./api"
import PageHeader from "./components/PageHeader"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreateMealForm from "./CreateMealForm"
import { MainBodyContainer } from "./components/main-body-container"
import ShoppingList from "./ShoppingList"
import EditMealForm from "./EditMealForm"

const App = () => {
  const [meals, setMeals] = useState([])
  const [mealsLoading, setMealsLoading] = useState(true)
  const [ingredients, setIngredients] = useState([])
  const [ingredientsLoading, setIngredientsLoading] = useState(true)
  const [newMealSaved, setNewMealSaved] = useState(false)
  const [selectedMeals, setSelectedMeals] = useState([])

  useEffect(() => {
    getMeals()
      .then(data => {
        setMeals(data)
        setMealsLoading(false)
      })
    // TODO: Error handling
    getIngredients()
      .then(data => {
        setIngredients(data)
        setIngredientsLoading(false)
      })
    // TODO: Error handling
  }, [])

  useEffect(() => {
    if (newMealSaved === true) {
      getMeals()
        .then(data => {
          setMeals(data)
          setMealsLoading(false)
        })
      // TODO: Error handling
      getIngredients()
        .then(data => {
          setIngredients(data)
          setIngredientsLoading(false)
        })
      setNewMealSaved(false)
      // TODO: Error handling

    }
  }, [newMealSaved])

  const addNewMeal = formData => {
    let ingredients = formData.mealIngredients.map(ingredient => {
      return {
        ingredient_id: ingredient.value,
        ingredient_name: ingredient.label
      }
    })

    const requestBody = {
      meal_name: formData.mealName,
      ingredients: ingredients
    }

    createMeal(requestBody)
      .then(data => {
        setMeals([...meals, data])
        setNewMealSaved(true)
      })
  }

  const addToShoppingList = (mealName) => {
    let meal = meals.find(meal => meal.meal_name === mealName)

    if (selectedMeals.find(selectedMeal => selectedMeal === meal)) {
      // TODO: Add messaging to tell the user they've already added this meal
      return
    }

    setSelectedMeals([...selectedMeals, meal])
    // TODO Add confirmation that meal was added to shopping list
  }

  const updateMeal = formData => {
    let ingredients = formData.mealIngredients.map(ingredient => {
      return ingredient.value
    })

    const requestBody = {
      meal_name: formData.mealName,
      ingredients: ingredients
    }

    createMeal(requestBody)
      .then(data => {
        setMeals([...meals, data])
        setNewMealSaved(true)
      })
  }

  const deleteMeal = (mealId) => {
    deleteMealFromDb(mealId)

    setMeals(meals.filter(meal => {
      return meal.meal_id !== mealId
    }))
  }

  return (
    <>
      <PageHeader/>
      <MainBodyContainer>
        <BrowserRouter>
          <Switch>
            <Route path="/create-meal">
              {!ingredientsLoading && <CreateMealForm ingredients={ingredients} onSubmit={addNewMeal}/>}
            </Route>
            <Route path="/edit-meal">
              {!mealsLoading && <EditMealForm meals={meals} onSubmit={updateMeal}/>}
            </Route>
            <Route path="/shopping-list">
              {<ShoppingList selectedMeals={selectedMeals}/>}
            </Route>
            <Route path="/">
              {!mealsLoading && <MealList meals={meals} addToShoppingList={addToShoppingList} deleteMeal={deleteMeal}/>}
            </Route>
          </Switch>
        </BrowserRouter>
      </MainBodyContainer>
    </>
  )
}

export default App
