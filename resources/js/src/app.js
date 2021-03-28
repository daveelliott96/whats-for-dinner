import React, { useState, useEffect } from 'react'
import '../../sass/app.css'
import MealList from "./MealList"
import { getMeals } from "./api"
import PageHeader from "./components/PageHeader"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateMealForm from "./CreateMealForm"
import { MainBodyContainer } from "./components/main-body-container"

const App = () => {
  const [meals, setMeals] = useState([])
  const [mealsLoading, setMealsLoading] = useState(true)

  useEffect(() => {
    getMeals()
      .then(data => {
        setMeals(data)
        setMealsLoading(false)
      })
  }, [])

  return (
    <>
      <PageHeader/>
      <MainBodyContainer>
      <BrowserRouter>
        <Switch>
          <Route path="/create-meal">
            <CreateMealForm />
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
