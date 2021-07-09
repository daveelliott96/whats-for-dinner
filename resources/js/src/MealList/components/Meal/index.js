import React from 'react'
import styled from "styled-components"
import { AddMealButton } from "./components/add-meal-button"
import { EditButton } from "./components/edit-button"
import { DeleteButton } from "./components/delete-button"
import editIcon from '../../../../../images/edit.svg'
import deleteIcon from '../../../../../images/delete.svg'

const MealContainer = styled.div`
  height: 128px;
  width: 270px;
  margin: 8px;
  vertical-align: top;
  display: flex;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const MealButtonContainer = styled.div`
  margin-right: auto;
  width: 76%;
  height: 100%;
`

const ActionButtonsContainer = styled.div`
  margin-left: auto;
  width: 24%;
  height: 100%;
`

const EditButtonContainer = styled.div`
  width: 100%;
  height: 50%;
`

const DeleteButtonContainer = styled.div`
  width: 100%;
  height: 50%;
`

export function Meal({meal, addToShoppingList, deleteMeal}) {
  return (
    <MealContainer>
      <MealButtonContainer>
        <AddMealButton children={meal.meal_name} addToShoppingList={addToShoppingList}/>
      </MealButtonContainer>
      <ActionButtonsContainer>
        <EditButtonContainer>
          <EditButton linkTo={'/edit-meal'} icon={editIcon} children={'Edit'} meal={meal}/>
        </EditButtonContainer>
        <DeleteButtonContainer>
          <DeleteButton icon={deleteIcon} children={'Delete'} mealId={meal.meal_id} onClick={deleteMeal}/>
        </DeleteButtonContainer>
      </ActionButtonsContainer>
    </MealContainer>
  )
}
