import React from 'react'
import styled from "styled-components"

const StyledLabel = styled.label`
  display: block;
  margin-bottom: .2rem;
`

const Label = ({children, ...props}) => (
  <StyledLabel
    {...props}
  >
    {children}
  </StyledLabel>
)

export default Label
