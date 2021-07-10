import React from "react"
import styled from 'styled-components'
import { useHistory } from "react-router-dom"

const Button = styled.button
  `
  align-self: flex-end;
  width: 400px;
  height: 50px;
  background-color: #33955D;
  border-radius: 10px;
  border: none;
  font-size: 1.3rem;
  color: white;
  transition: .2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    cursor: pointer;
    background-color: #1f5d38;
  }

  @media only screen and (max-width: 992px) {
    align-self: center;
    margin-top: .5rem;
    width: 300px;
  }

  @media only screen and (min-width: 993px) {
    margin-left: auto;
  }
  `

export function ExportButton({ children, linkTo, ...props }) {
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
