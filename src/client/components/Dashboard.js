import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import LineChart from './LineChart'
import PieChart from './PieChart'

const Root = styled.div`

`

const Dashboard =styled.div`
  padding: 1rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

const Metric = styled.div`
  :first-child {
    margin-right: 1rem;
  }
`
const MetricHeader = styled.div`
  background-color: ${props => props.theme.primaryColor};
  padding: 1rem;
  color: white;
`

const MetricFooter = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.primaryColor};
`

export default() => {
  return <Root>
    <Header title={"Dashboard"} />
    <Dashboard>
      <Row>
        <Metric>
          <MetricHeader>Revenue v.s. Cash</MetricHeader>
          <LineChart />
          <MetricFooter></MetricFooter>
        </Metric>
        <Metric>
          <MetricHeader>Revenue by source</MetricHeader>
          <PieChart />
          <MetricFooter></MetricFooter>
        </Metric>
      </Row>
    </Dashboard>
  </Root>
}
