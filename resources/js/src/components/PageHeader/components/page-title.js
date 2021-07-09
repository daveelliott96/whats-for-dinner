import React from 'react'
import styled from 'styled-components'

const StyledPageTitle = styled.h1`
  color: white;
  font-weight: lighter;
  font-size: 2.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

export const PageTitle = (props) => <StyledPageTitle>{props.title}</StyledPageTitle>
