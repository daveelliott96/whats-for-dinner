import React from "react"
import styled from 'styled-components'

const Button = styled.button
  `
  margin-left: auto;
  margin-top: 2rem;
  align-self: flex-end;
  width: 400px;
  height: 50px;
  background-color: #33955D;
  border-radius: 10px;
  border: none;
  font-size: 1.3rem;
  color: white;
  float: right;
  transition: .2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    cursor: pointer;
    background-color: #1f5d38;
  }
  `

export const SubmitButton = ({ children, onSubmit, ...props }) => (
  <Button
    type={'submit'}
    onClick={onSubmit}
    {...props}
  >
    {children}
  </Button>
)
