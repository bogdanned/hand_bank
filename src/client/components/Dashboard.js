import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import LineChart from './LineChart'
import PieChart from './PieChart'

const Root = styled.div`

`

const Dashboard =styled.div`
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

const Metric = styled.div`
  border: 1px solid ${props => props.theme.terciaryColor};
  border-radius: 2px;
  :first-child {
    margin-right: 1rem;
  }
`
const MetricHeader = styled.div`
  background-color: ${props => props.theme.terciaryColor};
  padding: 1rem;
  color: white;
`

const MetricFooter = styled.div`
  padding: 0.75rem;
  background-color: ${props => props.theme.terciaryColor};
`

const Content = styled.div`
  padding: 1rem 0 1rem 0;
  display: flex;
  align-items: center;
`

export default() => {
  return <Root>
    <Header title={"Dashboard"} />
    <Dashboard>
      <Row>
        <Metric>
          <MetricHeader>Revenue v.s. Cash</MetricHeader>
          <Content><LineChart /></Content>
          <MetricFooter></MetricFooter>
        </Metric>
        <Metric>
          <MetricHeader>Revenue by source</MetricHeader>
          <Content><PieChart /></Content>
          <MetricFooter></MetricFooter>
        </Metric>
      </Row>
    </Dashboard>
  </Root>
}
