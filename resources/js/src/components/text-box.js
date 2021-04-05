import styled from "styled-components"
import React from "react"

const StyledTextBox = styled.input`
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  height: 2.3rem;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: Helvetica, sans-serif;
  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;
`

const TextBox = ({name, ...props}) => (
  <StyledTextBox
    type={'text'}
    name={name}
    {...props}
  />
)

export default TextBox
