import React from 'react'
import styled from "styled-components"

const Button = styled.button`
  width: 100%;
  height: 100%;
  border-top: 1px solid black;
  border-left: 0;
  border-bottom: 0;
  border-right: 0;
  border-bottom-right-radius: 3px;
  background: #E3E3E3;
  font-size: 1rem;
  transition: .2s;
  &:hover {
    cursor: pointer;
    background-color: #E03838;
  }
`

export const DeleteButton = ({ children, onClick, mealId, ...props }) => (
  <Button
    onClick={() => onClick(mealId)}
    {...props}
  >
    {props.icon && <img src={props.icon} alt={'Delete icon'} style={{height: 32, width: 32}}/>}
    {children}
  </Button>
)

