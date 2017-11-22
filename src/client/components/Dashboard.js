import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import LineChart from './LineChart'

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
`

export default() => {
  return <Root>
    <Header title={"Dashboard"} />
    <Dashboard>
      <Row>
        <LineChart />
      </Row>
      <Row>
        <LineChart />
      </Row>
    </Dashboard>
  </Root>
}
