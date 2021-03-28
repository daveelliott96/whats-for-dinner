import React from 'react'
import styled from 'styled-components'

const StyledPageTitle = styled.h1`
  color: white;
  font-weight: lighter;
  font-size: 2.5rem;
`

export const PageTitle = (props) => <StyledPageTitle>{props.title}</StyledPageTitle>
