import React from 'react'
import styled from "styled-components"

const PageHeaderContainer = styled.div`
  text-align: center;
  background-color: #24265A;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;

  @media only screen and (max-width: 992px) {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`

const StyledPageTitle = styled.h1`
  color: white;
  font-weight: lighter;
  font-size: 2.5rem;

  @media only screen and (max-width: 992px) {
    font-size: 2rem;
  }
`

const PageTitle = ({ titleText }) => <StyledPageTitle>{titleText}</StyledPageTitle>

const PageHeader = () => {
  return (
    <PageHeaderContainer>
      <PageTitle titleText={"What's For Dinner?"}/>
    </PageHeaderContainer>
  )
}

export default PageHeader
