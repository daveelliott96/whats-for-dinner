import { get, post, put, delete as destroy } from 'axios'

export const getMeals = () =>
  get(`/api/meals`)
    .then(response => response.data.data)

export const getIngredients = () =>
  get(`/api/ingredients`)
    .then(response => response.data.data)
