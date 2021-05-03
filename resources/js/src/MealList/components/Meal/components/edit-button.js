import React from 'react'
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const Button = styled.button`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-top-right-radius: 3px;
  background: #E3E3E3;
  font-size: 1rem;
  transition: .2s;
  &:hover {
    cursor: pointer;
    background-color: #5F6998;
  }
`

export function EditButton({ children, linkTo, ...props }) {
  const history = useHistory()

  return (
    <Button
      onClick={() => history.push(linkTo)}
      {...props}
    >
      {props.icon && <img src={props.icon} alt={'Edit icon'} style={{ height: 32, width: 32 }}/>}
      {children}
    </Button>
  )
}

