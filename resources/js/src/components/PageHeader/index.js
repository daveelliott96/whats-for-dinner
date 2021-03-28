import React from 'react'
import { PageHeaderContainer } from "./components/page-header-container"
import { PageTitle } from "./components/page-title"

const PageHeader = () => {
  return (
    <PageHeaderContainer>
      <PageTitle title={"What's For Dinner?"}/>
    </PageHeaderContainer>
  )
}

export default PageHeader
