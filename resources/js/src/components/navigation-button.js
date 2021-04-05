import React from "react"
import styled from 'styled-components'
import { Link, useHistory } from "react-router-dom"

const Button = styled.button
  `
  align-self: flex-end;
  width: 300px;
  height: 50px;
  float: left;
  background-color: #5F6998;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  color: white;
  margin-right: 16px;
  transition: .2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    cursor: pointer;
    background-color: #485381;
  }
  `

export function NavigationButton({ children, linkTo, ...props }) {
  const history = useHistory()

  return (
      <Button
        onClick={() => history.push(linkTo)}
        {...props}
      >
        {children}
      </Button>
  )
}
