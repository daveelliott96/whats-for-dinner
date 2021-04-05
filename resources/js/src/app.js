import React, { useState, useEffect } from 'react'
import '../../sass/app.css'
import MealList from "./MealList"
import { createMeal, getIngredients, getMeals } from "./api"
import PageHeader from "./components/PageHeader"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreateMealForm from "./CreateMealForm"
import { MainBodyContainer } from "./components/main-body-container"

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
    getIngredients()
      .then(data => {
        setIngredients(data)
        setIngredientsLoading(false)
      })
  }, [])

  useEffect(() => {
    if (newMealSaved === true) {
      getMeals()
        .then(data => {
          setMeals(data)
          setMealsLoading(false)
        })
      getIngredients()
        .then(data => {
          setIngredients(data)
          setIngredientsLoading(false)
        })
      setNewMealSaved(false)
    }
  }, [newMealSaved])

  const addNewMeal = formData => {
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

  return (
    <>
      <PageHeader/>
      <MainBodyContainer>
        <BrowserRouter>
          <Switch>
            <Route path="/create-meal">
              {!ingredientsLoading && <CreateMealForm ingredients={ingredients} onSubmit={addNewMeal}/>}
            </Route>
            <Route path="/">
              {!mealsLoading && <MealList meals={meals}/>}
            </Route>
          </Switch>
        </BrowserRouter>
      </MainBodyContainer>
    </>
  )
}

export default App
