import { get, post, put, delete as destroy } from 'axios'

export const getMeals = () =>
  get(`/api/meals`)
    .then(response => response.data.data)
