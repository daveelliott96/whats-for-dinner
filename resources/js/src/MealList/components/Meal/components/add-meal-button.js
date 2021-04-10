import React from 'react'
import styled from "styled-components"

const Button = styled.button`
  width: 100%;
  height: 100%;
  border-right: 2px solid black;
  border-left: 0;
  border-top: 0;
  border-bottom: 0;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  font-size: 1.4rem;
  background: #E3E3E3;
  transition: .2s;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    background-color: #53A00A;
  }
`

export const AddMealButton = ({ children, addToShoppingList, ...props }) => (
  <Button
    onClick={() => addToShoppingList(children)}
    {...props}
  >
    {children}
  </Button>
)

