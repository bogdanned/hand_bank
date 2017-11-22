import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import LineChart from './LineChart'
import PieChart from './PieChart'

const Root = styled.div`

`

const Dashboard =styled.div`
  padding: 2rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

export default() => {
  return <Root>
    <Header title={"Dashboard"} />
    <Dashboard>
      <Row>
        <div>
          <p>Revenue v.s. Cash</p>
          <LineChart />
        </div>
        <div>
          <p>Revenue by source</p>
          <PieChart />
        </div>
      </Row>
      <Row>
      </Row>
    </Dashboard>
  </Root>
}
