import React, { useState, useEffect } from 'react'
import '../../sass/app.css'
import MealList from "./MealList"
import { getMeals } from "./api"
import PageHeader from "./components/PageHeader"

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
      {!mealsLoading && <MealList meals={meals}/>}
    </>
  )
}

export default App
