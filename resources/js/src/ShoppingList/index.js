import React, { useEffect, useState } from 'react'
import { NavigationButton } from "../components/navigation-button"
import styled from "styled-components"
import { ExportButton } from "../MealList/components/Buttons/components/export-button"
import { CopyToClipboard } from 'react-copy-to-clipboard'

export const ButtonsContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`

function ShoppingList({ selectedMeals }) {
  const [shoppingList, setShoppingList] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    generateShoppingList()
  }, [])

  const generateShoppingList = () => {
    let ingredientsForShoppingList = []
    selectedMeals.forEach(meal => {
      meal.ingredients.forEach(ingredient => {
        ingredientsForShoppingList.push(ingredient.ingredient_name)
      })
    })

    let uniqueIngredients = [...new Set(ingredientsForShoppingList)]

     uniqueIngredients.join(' ')

    setShoppingList(uniqueIngredients)
  }

  return (
    <>
      <ButtonsContainer>
        <NavigationButton children={'Back to meal list'} linkTo={'/'}/>
        <CopyToClipboard text={shoppingList} onCopy={() => setCopied(true)}>
          <ExportButton children={'Copy shopping list to clipboard'}/>
        </CopyToClipboard>
      </ButtonsContainer>
      <p>You've added {selectedMeals.length} {selectedMeals.length === 1 ? 'meal' : 'meals'} to your shopping list:</p>
      {
        selectedMeals.map(meal => {
          return (
            <>
              <p>{meal.meal_name}</p>
              <ul>
                {
                  meal.ingredients.map(ingredient => {
                    return (
                      <li>{ingredient.ingredient_name}</li>
                    )
                  })
                }
              </ul>
            </>
          )
        })
      }
    </>
  )
}

export default ShoppingList
