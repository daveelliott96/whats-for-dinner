import React, { useState, useEffect } from 'react'
import { CrudButton } from "./components/crud-button"
import '../../sass/app.css'
import { ExportButton } from "./components/export-button"
import { PageTitle } from "./components/page-title"
import { PageHeader } from "./components/page-header"
import { ButtonsContainer } from "./components/button-container"
import { MainBody } from "./components/main-body"
import { Meal } from "./components/meal"
import { ExportButtonContainer } from "./components/export-button-container"

const axios = require('axios')

const App = () => {
  const [meals, setMeals] = useState([])
  useEffect(() => {
    axios.get('api/meals')
      .then(response => response.data)
      .then(responseData => {
        setMeals(responseData.data)
      })
  }, [])


  return (
    <>
      <PageHeader>
        <PageTitle title={"What's For Dinner?"}/>
      </PageHeader>
      <ButtonsContainer>
        <CrudButton children={'Add new meal'}/>
        <CrudButton children={'Add new ingredient'}/>
        <ExportButtonContainer>
          <ExportButton children={'Generate shopping list'}/>
        </ExportButtonContainer>
      </ButtonsContainer>
      <MainBody>
        {meals.map(meal => {
          return (
            <Meal key={meal.meal_id}/>
          )
        })}
      </MainBody>


    </>
  )
}

export default App
